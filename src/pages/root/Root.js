import React from "react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Frontload } from "react-frontload";
import { configureStore, history } from "../../store";
import { MobileTerms, MobilePolicy, MobileContact } from "../mobile-static";
// import * as Routes from "./Routes";
import Layout from "./layout";
import { Router, Switch, Route } from "react-router-dom";
const store = configureStore();
const persistor = persistStore(store);
const THEME = createMuiTheme({
  typography: {
    fontFamily: "lato",
    fontSize: 12,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500
  }
});

const Root = () => {
  return (
    <MuiThemeProvider theme={THEME}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router history={history()}>
            <Frontload noServerRender={true}>
              <Switch>
                <Route path="/contact1" exact component={MobileContact} />
                <Route path="/terms1" exact component={MobileTerms} />
                <Route path="/privacy1" exact component={MobilePolicy} />
                <Route path="/" component={Layout} />
              </Switch>
            </Frontload>
          </Router>
        </PersistGate>
      </Provider>
    </MuiThemeProvider>
  );
};

export default Root;
