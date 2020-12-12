import { shallow } from "enzyme";
import { HeaderLogo } from "../HeaderLogo";

describe("HeaderLogo test", () => {
  it("mount and unmount without error", () => {
    expect(() => shallow(<HeaderLogo />).unmount()).not.toThrow();
  });
});
