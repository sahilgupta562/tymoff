// Express requirements
import path from "path";
import fs from "fs";

// React requirements
import React from "react";
import { renderToString } from "react-dom/server";
import Helmet from "react-helmet";
import { Provider } from "react-redux";
import { StaticRouter, Switch, Route } from "react-router";
import { Frontload, frontloadServerRender } from "react-frontload";
import { getStoredState, persistCombineReducers, persistStore } from "redux-persist";
import { createStore } from "redux";
import Loadable from "react-loadable";
import { CookieStorage, NodeCookiesWrapper } from "redux-persist-cookie-storage";
import Cookies from "cookies";
// Our store, entrypoint, and manifest
import { isInteger } from "../src/core";
import { rootReducerServer } from "../src/store/reducers/root-reducer";
import { apiFetchContentOnServer, apiFetchContentDetailOnServer, apiFetchDiscoverListOnServer } from "../src/api";

import manifest from "../build/asset-manifest.json";
import Layout from "./../src/pages/root/layout";
import { MobileTerms, MobilePolicy, MobileContact } from "./../src/pages/mobile-static";
// import * as Routes from "./../src/pages/root/Routes";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const THEME = createMuiTheme({
  typography: {
    fontFamily: "lato",
    fontSize: 12,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500
  }
});

// Some optional Redux functions related to user authentication
// const store = configureStore();
// const persistor = persistStore(store);

// LOADER
const configurePersistor = async store => {
  return new Promise(resolve => {
    const persistor = persistStore(store, {}, () => {
      resolve(persistor);
    });
  });
};
export default async (req, res, next) => {
  const cookieJar = new NodeCookiesWrapper(new Cookies(req, res));
  const persistConfig = {
    key: "root",
    storage: new CookieStorage(cookieJar),
    stateReconciler(inboundState, originalState) {
      return originalState;
    },
    whitelist: ["auth", "discover", "setting"]
  };

  let preloadedState;
  try {
    preloadedState = await getStoredState(persistConfig);
  } catch (e) {
    preloadedState = {};
  }

  const reducer = persistCombineReducers(persistConfig, rootReducerServer);
  const store = createStore(reducer);
  // console.log(store.getState());
  const persistor = await configurePersistor(store);
  await persistor.flush();
  res.removeHeader("Set-Cookie");

  /*
    A simple helper function to prepare the HTML markup. This loads:
      - Page title
      - SEO meta tags
      - Preloaded state (for Redux) depending on the current route
      - Code-split script tags depending on the current route
  */

  const injectHTML = (data, { html, title, meta, body, scripts, state, link, css }) => {
    data = data.replace("<html>", `<html ${html}>`);
    data = data.replace(/<title>.*?<\/title>/g, title);
    data = data.replace("</head>", `${meta}${link}</head>`);
    data = data.replace("</head>", `${scripts.join("")}  </head>`);
    data = data.replace(
      '<div id="root"></div>',
      `<div id="root">${body}</div>
    <script>window.__PRELOADED_STATE__= ${state}</script>`
    );

    return data;
  };

  let promises;
  let newUrl = "";
  const { url } = req;
  const storeState = store.getState();
  const { content } = storeState;
  const { filter } = content;
  const currentTime = Date.now();
  const sessionTime = req.session.startTime;
  let sessionEnabled = false;
  if (sessionTime) {
    let difference = currentTime - sessionTime;
    let minutesDifference = Math.floor(difference / 1000 / 60);
    sessionEnabled = !!(minutesDifference <= 30);
  }
  // const discover = apiFetchDiscoverListOnServer(store);
  if (url.indexOf("/rm") > -1) {
    req.session.startTime = Date.now();
    promises = apiFetchContentOnServer({ ...filter, formatsList: [4] }, 0, 12, "", store, url, true);
  } else if (url.indexOf("/content") > -1) {
    const urlSplit = url.split("/content/");
    let queryString = urlSplit.length === 2 && urlSplit.pop();
    let params = queryString && queryString.split("?");
    let contentId = !!params.length ? params.shift() : "";
    if (!isInteger(contentId)) {
      contentId = atob(contentId);
    } else {
      const encryptedUrl = btoa(contentId);
      newUrl = `/content/${encryptedUrl.replace(/=/g, "")}`;
    }
    promises = apiFetchContentDetailOnServer(contentId, "", store, sessionEnabled);
  } else {
    const totalContent = sessionEnabled ? 12 : 10;
    const filterObj = sessionEnabled ? { ...filter, formatsList: [4] } : filter;
    promises = apiFetchContentOnServer(filterObj, 0, totalContent, "", store, url, sessionEnabled);
  }

  // Promise.all(promises.dispatch())
  //   .then(() => {
  // Load in our HTML file from our build

  fs.readFile(path.resolve(__dirname, "../build/index.html"), "utf8", (err, htmlData) => {
    // If there's an error... serve up something nasty
    if (err) {
      console.error("Read error", err);

      return res.status(404).end();
    }

    // Create a store (with a memory history) from our current url

    // If the user has a cookie (i.e. they're signed in) - set them as the current user
    // Otherwise, we want to set the current state to be logged out, just in case this isn't the default

    const context = {};
    const modules = [];

    /*
    Here's the core funtionality of this file. We do the following in specific order (inside-out):
      1. Load the <App /> component
      2. Inside of the Frontload HOC
      3. Inside of a Redux <StaticRouter /> (since we're on the server), given a location and context to write to
      4. Inside of the store provider
      5. Inside of the React Loadable HOC to make sure we have the right scripts depending on page
      6. Render all of this sexiness
      7. Make sure that when rendering Frontload knows to get all the appropriate preloaded requests

    In English, we basically need to know what page we're dealing with, and then load all the appropriate scripts and
    data for that page. We take all that information and compute the appropriate state to send to the user. This is
    then loaded into the correct components and sent as a Promise to be handled below.
  */
    // discover.then(des => {
    promises.then(elem => {
      frontloadServerRender(() =>
        renderToString(
          <Loadable.Capture report={m => modules.push(m)}>
            <MuiThemeProvider theme={THEME}>
              <Provider store={store}>
                <StaticRouter location={req.url} context={context}>
                  <Frontload isServer={true}>
                    <Switch>
                      <Route path="/contact1" exact component={MobileContact} />
                      <Route path="/terms1" exact component={MobileTerms} />
                      <Route path="/privacy1" exact component={MobilePolicy} />
                      <Route path="/" component={Layout} />
                    </Switch>
                  </Frontload>
                </StaticRouter>
              </Provider>
            </MuiThemeProvider>
          </Loadable.Capture>
        )
      ).then(routeMarkup => {
        if (context.url) {
          // If context has a url property, then we need to handle a redirection in Redux Router
          res.writeHead(302, {
            Location: context.url
          });

          res.end();
        } else if (url.indexOf("/rm") > -1) {
          const rurl = req.query.rurl;
          res.writeHead(302, {
            Location: rurl ? rurl : "https://www.tymoff.com"
          });
          res.end();
        } else if (!elem) {
          res.writeHead(302, {
            Location: "/404"
          });

          res.end();
        } else if (newUrl) {
          res.writeHead(302, {
            Location: newUrl
          });

          res.end();
        } else {
          // Otherwise, we carry on...

          // Let's give ourself a function to load all our page-specific JS assets for code splitting
          const extractAssets = (assets, chunks) =>
            Object.keys(assets)
              .filter(asset => chunks.indexOf(asset.replace(".js", "")) > -1)
              .map(k => assets[k]);

          // Let's format those assets into pretty <script> tags
          const extraChunks = extractAssets(manifest, modules).map(c => `<script type="text/javascript" src="/${c.replace(/^\//, "")}"></script>`);

          // We need to tell Helmet to compute the right meta tags, title, and such
          const helmet = Helmet.renderStatic();
          // console.log(helmet.meta.toString())
          // NOTE: Disable if you desire
          // Let's output the title, just to see SSR is working as intended
          //console.log("THE TITLE", helmet.title.toString());
          // console.log(store.getState());
          // Pass all this nonsense into our HTML formatting function above
          const regexp = / data-react-helmet="true"/g;
          const html = injectHTML(htmlData, {
            html: helmet.htmlAttributes.toString(),
            title: helmet.title.toString().replace(regexp, ""),
            meta: helmet.meta.toString().replace(regexp, ""),
            link: helmet.link.toString(),
            body: routeMarkup,
            scripts: extraChunks,
            state: JSON.stringify(store.getState()).replace(/</g, "\\u003c")
          });

          // We have all the final HTML, let's send it to the user already!
          res.send(html);
        }
      });
    });
    // });
  });
  // })
  // .catch(next);
};
