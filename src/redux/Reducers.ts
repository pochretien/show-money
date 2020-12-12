import { combineReducers } from "redux";
import { StockState, UserState } from "./Interfaces";
import { ReduxConstants } from "./ReduxConstants";
import { KeyValueReducerGenerator } from "./reducers/KeyValueReducerGenerator";
import { ReduxState } from "./ReduxState";
import { requestReducer } from "./reducers/RequestReducer";
import moment from "moment";

export const Reducers = combineReducers<ReduxState>({
  stock: KeyValueReducerGenerator.generator<StockState>(
    ReduxConstants.Keys.stock
  ),
  user: KeyValueReducerGenerator.generator<UserState>(
    ReduxConstants.Keys.user,
    {
      id: "",
      name: "",
      settings: {},
    }
  ),
  showSocialMedia: KeyValueReducerGenerator.generator<boolean>(
    ReduxConstants.Keys.showSocialMedia,
    true
  ),
  searchDate: KeyValueReducerGenerator.generator<Date>(
    ReduxConstants.Keys.searchDate,
    moment().toDate()
  ),
  searchSymbol: KeyValueReducerGenerator.generator<string>(
    ReduxConstants.Keys.searchSymbol,
    ""
  ),
  requests: requestReducer,
});
