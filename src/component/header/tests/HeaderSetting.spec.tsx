import { shallow } from "enzyme";
import { HeaderSetting } from "../HeaderSetting";

describe("HeaderSetting test", () => {
  it("mount and unmount without error", () => {
    expect(() => shallow(<HeaderSetting />).unmount()).not.toThrow();
  });
});
