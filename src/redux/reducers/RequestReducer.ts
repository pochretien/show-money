import moment from "moment";
import { IReduxAction } from "../Interfaces";
import { chain, identity, isUndefined } from "lodash";

export interface RequestObjectState {
  date: string; // Format "llll"
  isLoading: boolean;
  hasError: boolean;
}

export interface RequestState {
  [key: string]: RequestObjectState;
}

export const RequestActionsType = {
  set: "setRequest",
};

export const getDefaultRequestObjectState = (): RequestObjectState => ({
  date: moment().format("llll"),
  isLoading: true,
  hasError: false,
});

const set = (state: RequestState, action: IReduxAction<RequestPayload>) => ({
  ...state,
  ...{
    [action?.payload?.id ?? ""]: {
      ...getDefaultRequestObjectState(),
      ...state[action.payload.id],
      ...chain(action.payload)
        .pick(identity as any)
        .omit("id")
        .value(),
    },
  },
});

const requestReducers: Record<string, (...args: any[]) => RequestState> = {
  [RequestActionsType.set]: set,
};

export type RequestPayload = {
  id: string;
  isLoading?: boolean;
  hasError?: boolean;
};

export const requestReducer = (
  state: RequestState = {},
  action?: IReduxAction<RequestPayload>
) =>
  !isUndefined(requestReducers[action?.type ?? ""])
    ? requestReducers[action?.type ?? ""](state, action)
    : state;
