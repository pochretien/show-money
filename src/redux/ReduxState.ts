import { StockState, UserState } from "./Interfaces";
import { RequestState } from "./reducers/RequestReducer";

export interface ReduxState {
  user: UserState;
  stock: StockState;
  requests: RequestState;
  showSocialMedia: boolean;
  searchDate: Date;
  searchSymbol: string;
}
