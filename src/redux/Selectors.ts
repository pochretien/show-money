import { ReduxState } from "./ReduxState";

export const Selectors = {
  showSocialMedia: (state: ReduxState) => state.showSocialMedia,
  searchDate: (state: ReduxState) => state.searchDate,
};
