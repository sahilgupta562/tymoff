import React from "react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { configureStore } from "../../store";
import RootRouter from "./Root-Router";
import { BrowserRouter } from "react-router-dom";
const store = configureStore();
const persistor = persistStore(store);
const THEME = createMuiTheme({
  typography: {
    fontSize: 14
  }
});

const Root = () => {
  return (
    <MuiThemeProvider theme={THEME}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <RootRouter />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </MuiThemeProvider>
  );
};

export default Root;
