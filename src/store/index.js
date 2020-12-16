import { applyMiddleware, compose, createStore } from "redux";
import { routerMiddleware } from "react-router-redux";
import { createBrowserHistory, createMemoryHistory } from "history";
import createSagaMiddleware from "redux-saga";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./reducers/root-reducer";

import rootSaga from "./sagas";
export * from "./selectors";
export * from "./actions";

// A nice helper to tell us if we're on the server
const isServer = !(typeof window !== "undefined" && window.document && window.document.createElement);

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["auth", "discover", "setting"]
};

const history = (url = "/") => {
  return isServer
    ? createMemoryHistory({
        initialEntries: [url]
      })
    : createBrowserHistory();
};
// const initialState = !isServer ? window.__PRELOADED_STATE__ : {};

// if (!isServer) {
//   delete window.__PRELOADED_STATE__;
// }

const enhancers = [];
// Dev tools are helpful
if (!isServer) {
  const reduxDevTool = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === "function") {
    enhancers.push(reduxDevTool());
  }
}

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [routerMiddleware(history()), sagaMiddleware];
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const allMiddlewares = applyMiddleware(...middlewares);
  const store = createStore(persistedReducer, !!enhancers.length ? compose(allMiddlewares, ...enhancers) : allMiddlewares);
  sagaMiddleware.run(rootSaga);
  return store;
};

export { configureStore, history, isServer };
