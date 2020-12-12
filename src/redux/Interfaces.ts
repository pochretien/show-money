import { ThunkDispatch } from "redux-thunk";
import { ReduxState } from "./ReduxState";
import { Action } from "redux";
import { StockInterface } from "../services/resource/stock/StockInterface";
import { UserInterface } from "../services/resource/user/UserInterface";

// State, can be move later in a file, right now I have the same interface than my mock but if not, I have theses interfaces
export interface StockState extends StockInterface {}
export interface UserState extends UserInterface {}

// Tools
export interface IReduxAction<T = Record<string, unknown>> extends Action {
  type: string;
  payload: T;
}

export declare type IDispatch<
  S extends ReduxState = ReduxState
> = ThunkDispatch<S, any, IReduxAction<any>>;
