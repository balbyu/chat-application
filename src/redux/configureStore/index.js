import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import setupSocket from "../../sockets";
import username from "../../utils/name";
import rootReducer from "../reducers";
import createSagaMiddleware from "redux-saga";
import handleNewMessage from "../sagas";

export default function configureStore(preloadedState) {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  const socket = setupSocket(store.dispatch, username);

  sagaMiddleware.run(handleNewMessage, { socket, username });

  return store;
}
