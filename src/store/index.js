import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducer";
import rootSaga from "./saga";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = createLogger();
const saga = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(logger, saga))
);

saga.run(rootSaga);
