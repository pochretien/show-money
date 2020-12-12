import { chain, map } from "lodash";
import { humanize } from "underscore.string";
import { FunctionComponent } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { AlgorithmName } from "../../../services/resource/stock/StockInterface";
import { FormattedMessage } from "react-intl";
import { StringsName } from "../../../strings/strings";

export const SettingsAlgorithm: FunctionComponent = () => {
  const values: string[] = chain(AlgorithmName)
    .keys()
    .map((value: string) => humanize(value))
    .value();
  return (
    <div className="box-settings">
      <div className="box-text center-self mr-title flex-end flex">
        <FormattedMessage id={StringsName.Algorithm} />
      </div>
      <div
        id="Dropdown"
        className="box-value ml-title form-group border-purple"
      >
        <Dropdown
          className="setting-dropdown border-purple"
          controlClassName="form-field setting-dropdown border-purple"
          options={values}
          value={values?.[0]}
          placeholder="Select an option"
        />
      </div>
    </div>
  );
};
