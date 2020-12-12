import React, { FunctionComponent } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { KeyValueReducerGenerator } from "../../../redux/reducers/KeyValueReducerGenerator";
import { ReduxConstants } from "../../../redux/ReduxConstants";
import { ReduxState } from "../../../redux/ReduxState";
import { connect } from "react-redux";
import { StockRequest } from "../../../redux/request/StockRequest";
import { FormattedMessage } from "react-intl";
import { StringsName } from "../../../strings/strings";
import { Selectors } from "../../../redux/Selectors";

const mapDispatchToProps = (dispatch) => ({
  fetchStock: () => dispatch(StockRequest.get()),
  setSearchDate: (value) =>
    dispatch(
      KeyValueReducerGenerator.setKeyValue(
        ReduxConstants.Keys.searchDate,
        value
      )
    ),
});

const mapStateToProps = (state: ReduxState) => ({
  searchDate: Selectors.searchDate(state),
});

const SearchSettingsDateDisconnected: FunctionComponent<
  ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapStateToProps>
> = ({ setSearchDate, searchDate, fetchStock }) => {
  return (
    <div className="box-settings">
      <div className="box-text center-self mr-title mr1 flex-end flex">
        <FormattedMessage id={StringsName.StartingDate} />
      </div>
      <div className="box-value ml-title date-picker-setting">
        <DatePicker
          className="form-group date-picker-setting"
          customInput={<input className="form-field date-picker-setting" />}
          selected={searchDate || moment().toDate()}
          placeholderText="Select starting date"
          onChange={(date) => {
            if (moment(date).diff(searchDate, "days")) {
              setSearchDate(date);
              fetchStock();
            }
          }}
          todayButton="Today"
          withPortal
        />
      </div>
    </div>
  );
};

export const SettingsDate = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchSettingsDateDisconnected);
