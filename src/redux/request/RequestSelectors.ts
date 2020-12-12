import { ReduxState } from "../ReduxState";
import { SocialMedia } from "../../services/resource/stock/StockInterface";
import { StockState, UserState } from "../Interfaces";

export const RequestSelectors = {
  stock: (state: ReduxState): StockState => state.stock,
  socialMedial: (state: ReduxState): SocialMedia => state.stock.socialMedial,
  user: (state: ReduxState): UserState => state.user,
  userName: (state: ReduxState): string => state.user?.name ?? "",
};
