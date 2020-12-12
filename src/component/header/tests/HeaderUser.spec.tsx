import { shallow } from "enzyme";
import { HeaderUser } from "../HeaderUser";
import { Provider } from "react-redux";
import { Store } from "../../../redux/Store";

describe("HeaderUser test", () => {
  it("mount and unmount without error", () => {
    expect(() =>
      shallow(
        <Provider store={Store}>
          <HeaderUser />
        </Provider>
      )
    ).not.toThrow();
  });
});
