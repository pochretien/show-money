import React, { FunctionComponent } from "react";
import { ReactSVG } from "react-svg";
import setting from "../../svg/settings.svg";

export const HeaderSetting: FunctionComponent = () => (
  <div className="header-setting flex flex-center center-content">
    <ReactSVG src={setting} className="icon mod-2x fill-turquoise" />
  </div>
);
