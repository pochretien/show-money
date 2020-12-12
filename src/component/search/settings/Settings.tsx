import React, { FunctionComponent } from "react";
import { FormattedMessage } from "react-intl";
import { SettingsAlgorithm } from "./SettingsAlgorithm";
import { SettingsDate } from "./SettingsDate";
import { SettingsMedia } from "./SettingsMedia";
import { StringsName } from "../../../strings/strings";

export const Settings: FunctionComponent = () => {
  return (
    <div className="search-settings">
      <div className="search-settings-title bold center large-font mb-title">
        <FormattedMessage id={StringsName.Settings} />
      </div>
      <div className="search-settings-content flex space-around flex-column flex-center">
        <SettingsDate />
        <SettingsAlgorithm />
        <SettingsMedia />
      </div>
    </div>
  );
};
