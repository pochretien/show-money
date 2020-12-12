import { Dispatch } from "redux";
import { sleep } from "../../utils";
import { ReduxConstants } from "../ReduxConstants";
import { UserState } from "../Interfaces";
import { KeyValueReducerGenerator } from "../reducers/KeyValueReducerGenerator";
import { RequestActions } from "../reducers/RequestActions";

export const UserRequest = {
  getUser: () => async (dispatch: Dispatch, getStore: any) => {
    dispatch(RequestActions.set(ReduxConstants.Requests.user));
    // With backend
    // const user: UserInterface = await AppAPI.Service.user.get("id");
    await sleep(200);
    dispatch(
      KeyValueReducerGenerator.setKeyValue<UserState>(
        ReduxConstants.Keys.user,
        {
          name: "Bob Graton",
          id: "abcd1234",
          settings: {},
        }
      )
    );
    dispatch(RequestActions.set(ReduxConstants.Requests.user, false));
  },
};
