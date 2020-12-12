import { IReduxAction } from "../Interfaces";
import { RequestActionsType, RequestPayload } from "./RequestReducer";

export const RequestActions = {
  set: (
    id: string,
    isLoading?: boolean,
    hasError?: boolean
  ): IReduxAction<RequestPayload> => ({
    type: RequestActionsType.set,
    payload: {
      id,
      isLoading,
      hasError,
    },
  }),
};
