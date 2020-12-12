import { ReduxState } from "../ReduxState";

// To use later when we implement the loading
export const RequestSelector = {
  isLoading: (state: ReduxState, id: string) => state.requests[id]?.isLoading,
  hasError: (state: ReduxState, id: string) => state.requests[id]?.hasError,
  lastRequest: (state: ReduxState, id: string) => state.requests[id]?.date,
};
