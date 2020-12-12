import React, { Dispatch, FunctionComponent } from "react";
import { StockRequest } from "../../redux/request/StockRequest";
import { connect } from "react-redux";
import { debounce } from "lodash";
import { KeyValueReducerGenerator } from "../../redux/reducers/KeyValueReducerGenerator";
import { ReduxConstants } from "../../redux/ReduxConstants";
import { FormattedMessage } from "react-intl";
import { StringsName } from "../../strings/strings";

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  fetchStock: () => dispatch(StockRequest.get()),
  setSearchSymbol: (symbol: string) =>
    dispatch(
      KeyValueReducerGenerator.setKeyValue(
        ReduxConstants.Keys.searchSymbol,
        symbol
      )
    ),
});

const SearchBoxDisconnected: FunctionComponent<
  ReturnType<typeof mapDispatchToProps>
> = ({ fetchStock, setSearchSymbol }) => {
  const onChange = debounce(() => {
    if (value?.length === 3) {
      setSearchSymbol(value);
      fetchStock();
    }
  }, 200);
  let value;
  return (
    <div className="search-box flex flex-center center-content">
      <div className="form-group">
        <input
          className="form-field"
          name="search"
          type="text"
          placeholder="Symbol"
          maxLength={3}
          onChange={(event) => {
            value = event?.currentTarget?.value;
            onChange();
          }}
        />
        <span>
          <FormattedMessage id={StringsName.Search} />
        </span>
      </div>
    </div>
  );
};

export const SearchBox = connect(
  undefined,
  mapDispatchToProps
)(SearchBoxDisconnected);
