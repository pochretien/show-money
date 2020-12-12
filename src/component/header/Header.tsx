import React, { FunctionComponent } from "react";
import { HeaderUser } from "./HeaderUser";
import { HeaderSetting } from "./HeaderSetting";
import { HeaderLogo } from "./HeaderLogo";

export const Header: FunctionComponent = () => (
  <div className="header">
    <HeaderLogo />
    <div className="header-info flex flex-center flex-end">
      <HeaderUser />
      <div className="separator" />
      <HeaderSetting />
    </div>
  </div>
);
