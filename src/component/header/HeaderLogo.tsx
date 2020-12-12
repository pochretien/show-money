import React, { FunctionComponent } from "react";
import { ReactSVG } from "react-svg";
import logo from "./../../svg/logo.svg";
import { FormattedMessage } from "react-intl";
import { StringsName } from "../../strings/strings";

export const HeaderLogo: FunctionComponent = () => (
  <div className="header-logo flex center-align">
    <ReactSVG src={logo} className="logo center-self icon" />
    <div className="separator" />
    <div className="logo-name bold">
      <FormattedMessage id={StringsName.Name} />
    </div>
  </div>
);
