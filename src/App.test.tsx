import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import { Store } from "./redux/Store";

describe("HeaderLogo test", () => {
  it("mount and unmount without error", () => {
    expect(() =>
      shallow(
        <Provider store={Store}>
          <App />
        </Provider>
      ).unmount()
    ).not.toThrow();
  });
});
