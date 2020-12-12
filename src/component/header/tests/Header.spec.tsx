import { Header } from "../Header";
import { shallow } from "enzyme";
import { HeaderLogo } from "../HeaderLogo";
import { HeaderSetting } from "../HeaderSetting";
import { HeaderUser } from "../HeaderUser";

describe("Header test", () => {
  it("mount and unmount without error", () => {
    expect(() => shallow(<Header />).unmount()).not.toThrow();
  });

  describe("once mounted", () => {
    it("should have HeaderLogo", () => {
      const wrapper = shallow(<Header />);
      expect(wrapper.find(HeaderLogo).length).toBe(1);
    });

    it("should have HeaderUser", () => {
      const wrapper = shallow(<Header />);
      expect(wrapper.find(HeaderUser).length).toBe(1);
    });

    it("should have HeaderLogo", () => {
      const wrapper = shallow(<Header />);
      expect(wrapper.find(HeaderSetting).length).toBe(1);
    });
  });
});
