import { shallow } from "enzyme";
import { Content } from "../Content";
import { Provider } from "react-redux";
import { Store } from "../../../redux/Store";

describe("HeaderLogo test", () => {
  it("mount and unmount without error", () => {
    expect(() => {
      shallow(
        <Provider store={Store}>
          <Content />
        </Provider>
      ).unmount();
    }).not.toThrow();
  });
});
