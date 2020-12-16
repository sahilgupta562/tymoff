import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./reducers/root-reducer";

import rootSaga from "./sagas";
export * from "./selectors";
export * from "./actions";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["auth","company"]
};

const reduxDevTool = window.__REDUX_DEVTOOLS_EXTENSION__;

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const allMiddlewares = applyMiddleware(sagaMiddleware);
  const store = createStore(persistedReducer, reduxDevTool ? compose(allMiddlewares, reduxDevTool()) : allMiddlewares);
  sagaMiddleware.run(rootSaga);
  return store;
};

export { configureStore };
