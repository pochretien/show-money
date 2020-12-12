import { Settings } from "../Settings";
import { shallow } from "enzyme";

describe("Settings test", () => {
  it("mount and unmount without error", () => {
    expect(() => shallow(<Settings />).unmount()).not.toThrow();
  });
});
