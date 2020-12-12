import { applyMiddleware, createStore } from "redux";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";
import { IDispatch } from "./Interfaces";
import { ReduxState } from "./ReduxState";
import { Reducers } from "./Reducers";

const middlewares = [thunk, promise];

export const Store = createStore(
  Reducers,
  applyMiddleware<IDispatch<ReduxState>>(...middlewares)
);
