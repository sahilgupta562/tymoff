import express from "express";
import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { StaticRouter as Router } from 'react-router'
// import App from './App'
import reducers from '../src/reducers/reducers';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import ReduxThunk from 'redux-thunk';
import { serverHelper, renderAsync } from 'redux-async-render';
import promiseMiddleware from 'redux-promise';
import asyncAwait from 'redux-async-await';
import minify from 'express-minify';
import compression from 'compression';
import Express from 'express';
import { Server } from 'http';
//import PageServices from './services/page-services';
import fs from 'fs';
import { Frontload, frontloadServerRender } from 'react-frontload';

import AppRoutes from './../src/appRoutes';
import { Helmet } from 'react-helmet';
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import Loadable from 'react-loadable';
import manifest from '../livetymoff/asset-manifest.json';
import headerContainer from "../src/containers/headerContainer";
import { store, history } from '../src/store';
import { renderRoutes, matchRoutes } from "react-router-config"
import { ROUTES } from './../src/routes/routes';

const path = require('path');
const options = {
    root: path.join(__dirname, ''),
    // headers: {
    //     'Content-Type': 'text/plain;charset=UTF-8',
    // }
};
// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;
/* START HACK */
if (typeof window === 'undefined') {
    //const { window } = new JSDOM('');
    //const { document } = (new JSDOM('')).window;
    //global.window = window; // Temporarily define window for server-side
    //global.document = document;
    // global.localStorage = require('localStorage');
}
/* END HACK */

const app = Express();

const server = new Server(app);
const extractAssets = (assets, chunks) => Object.keys(assets)
    .filter(asset => chunks.indexOf(asset.replace('.js', '')) > -1)
    .map(k => assets[k]);

function cacheControl(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Cache-Control', 'max-age=86400000');
    next();
}
app.use(compression());
app.use(minify());


app.use('/static', cacheControl, Express.static(path.join(__dirname, '..', 'livetymoff', '/static'), { maxAge: 86400000 }));
app.use('/assets', cacheControl, Express.static(path.join(__dirname, '..', 'livetymoff', '/assets'), { maxAge: 86400000 }));

// const finalCreateStore = compose(
//     serverHelper
// )(createStore);


// function configureStore(initialState) {
//     return finalCreateStore(reducers, initialState);
// }

//const index = fs.readFileSync(__dirname + '/index.html', 'utf8');
const filePath = path.resolve(__dirname, '..', 'tymoff_new', 'index.html');
const index = fs.readFileSync(filePath, 'utf8');
const modules = [];
const extraChunks = extractAssets(manifest, modules)
    .map(c => `<script type="text/javascript" src="/${c}"></script>`);
// app.use((req, res) => {
//     const { url } = req;
//     const promises = matchRoutes(ROUTES, url).map(({ route, match }) => {
//         return store.dispatch(route.loadData({ filterObj: store.getState().filterObj, page: 0 }))
//     })
// })

function handleRender(req, res, next) {

    //let pageServices = new PageServices(req.url);
    // const baseLink = "yourwebsite.com";
    //  let metas = {"title":"title","desc":"desc","keywords":"k,e,y,w,o,r,d,s","canonical":req.protocol + '://' + baseLink + req.originalUrl};
    const context = {};
    const { url } = req;
    if (!url.includes("content")) {
        const promises = matchRoutes(ROUTES, url).map(({ route, match }) => {
            return store.dispatch(route.loadData({ filterObj: store.getState().home.filterObj, page: 0 }))
        })

        console.log("Url of webstie is" + url);
        // const middleware = [ReduxThunk, promiseMiddleware, asyncAwait];
        // const store = configureStore(applyMiddleware(...middleware));
        // const persistConfig = {
        //     key: "root",
        //     storage
        // };
        // const persistedReducer = persistReducer(persistConfig, reducers);
        // let store = createStore(persistedReducer);
        // let persistor = persistStore(store);

        // pageServices.getData(store.dispatch).then((result) => {

        //const renderFn = 
        let statusCode = 200;
        //console.log(renderFn);

        // renderAsync(renderFn).then(rendered => {
        //  frontloadServerRender((renderfn) => {
        Promise.all(promises).then(() => {
            // console.log(store.getState());
            const content = renderToString(
                <Loadable.Capture report={m => modules.push(m)}>
                    <Provider store={store}>
                        <Router location={req.baseUrl} context={context}>
                            <Frontload isServer={true}>
                                <AppRoutes />
                            </Frontload>
                        </Router>
                    </Provider>
                </Loadable.Capture>
            );
            // }).then(routeMarkup =>
            res.status(statusCode).send(
                index.replace('<div id="app"></div>', `<div id="app" class="dd">${content}</div>`)
                    .replace('</body>', extraChunks.join('') + '</body>')
                    // .replace('<!-- CONTENT -->', rendered)
                    // .replace('##CANONICAL##', metas.canonical)
                    // .replace('##DESC##', metas.desc)
                    // .replace('##KEYWORDS##', metas.keywords)
                    // .replace('##TITLE##', metas.title)
                    //.replace('"-- STORES --"', JSON.stringify(store.getState()))
                    .replace('"__SERVER_REDUX_STATE__"', JSON.stringify(store.getState()).replace(/</g, '\\u003c')),

            )
            //  ).catch(next);

            //  }).catch(next);

        }).catch(next);
    }

}

app.get('/', handleRender);


app.get('/robots.txt', (req, res) => (
    res.status(200).sendFile('robots.txt', options)
));

app.get('/sitemap.xml', (req, res) => (
    res.status(200).sendFile('sitemap.xml', options)
));
app.get('/logo-icon.png', (req, res) => (
    res.status(200).sendFile('logo-icon.png', options)
));


app.get('**', handleRender);
// app.use(
//     express.static(path.resolve(__dirname, '..', 'build'), { maxAge: '30d' })
// );

const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';
server.listen(port, (err) => {
    if (err) {
        return console.error(err);
    }
    return console.info(
        `
      Server running on http://localhost:${port} [${env}]
      Universal rendering: ${process.env.UNIVERSAL ? 'enabled' : 'disabled'}
    `);
});
