import { IReduxAction } from "../Interfaces";

const setKeyValue = <T>(
  type: string,
  value: T
): IReduxAction<{ value?: T }> => ({
  type,
  payload: { value },
});

const generator = <T>(actionType: string, defaultState = {} as T) => (
  state = defaultState,
  action: IReduxAction<{ value?: any }>
): T => {
  if (actionType === action.type && action.payload) {
    return action.payload.value;
  }

  return state;
};

export const KeyValueReducerGenerator = {
  generator,
  setKeyValue,
};
