import { shallow } from "enzyme";
import { Provider } from "react-redux";
import { Store } from "../../../../redux/Store";
import { SearchInfoSocialMedia } from "../SearchInfoSocialMedia";

describe("SearchInfoSocialMedia test", () => {
  it("mount and unmount without error", () => {
    expect(() => {
      shallow(
        <Provider store={Store}>
          <SearchInfoSocialMedia />
        </Provider>
      ).unmount();
    }).not.toThrow();
  });
});
