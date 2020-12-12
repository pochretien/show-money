import { ReduxState } from "../../redux/ReduxState";
import { FunctionComponent } from "react";
import { RequestSelectors } from "../../redux/request/RequestSelectors";
import { connect } from "react-redux";
import { map } from "lodash";
import {
  Recommendation,
  Sign,
} from "../../services/resource/stock/StockInterface";
import { FormattedMessage } from "react-intl";
import { StringsName } from "../../strings/strings";
import moment from "moment";
import { ReactSVG } from "react-svg";
import increase from "./../../svg/increase.svg";
import decrease from "./../../svg/decrease.svg";
import * as classNames from "classnames";

const mapStateToProps = (state: ReduxState) => ({
  stock: RequestSelectors.stock(state),
});

export const ContentDisconnected: FunctionComponent<
  ReturnType<typeof mapStateToProps>
> = ({ stock }) => {
  if (!stock?.recommendation?.length) {
    return (
      <div className="content flex center-content flex-auto center-self">
        No Data
      </div>
    );
  }
  return (
    <div className="content">
      <table className="table">
        <thead>
          <tr>
            <th className="bold">
              <FormattedMessage id={StringsName.Date} />
            </th>
            <th className="bold">
              <FormattedMessage id={StringsName.Price} />
            </th>
            <th className="bold">
              <FormattedMessage id={StringsName.Buying} />
            </th>
            <th className="bold">
              <FormattedMessage id={StringsName.Holding} />
            </th>
            <th className="bold">
              <FormattedMessage id={StringsName.Selling} />
            </th>
          </tr>
        </thead>
        <tbody>
          {map(stock.recommendation, (recommendation: Recommendation) => (
            <tr key={recommendation.date}>
              <td>{moment(recommendation.date).format("MMMM Do YYYY")}</td>
              <td>
                <FormattedMessage
                  id={StringsName.PriceSign}
                  values={{
                    price: recommendation.price,
                  }}
                />
              </td>
              <td>
                <FormattedMessage
                  id={StringsName.Percentage}
                  values={{ value: recommendation.buying.value }}
                />
                <ReactSVG
                  src={
                    recommendation.buying.sign === Sign.up ? increase : decrease
                  }
                  className={classNames("icon mod-lg ml", {
                    "fill-turquoise": recommendation.buying.sign === Sign.up,
                    "fill-red": recommendation.buying.sign === Sign.down,
                  })}
                />
              </td>
              <td>
                <FormattedMessage
                  id={StringsName.Percentage}
                  values={{ value: recommendation.holding.value }}
                />
                <ReactSVG
                  src={
                    recommendation.holding.sign === Sign.up
                      ? increase
                      : decrease
                  }
                  className={classNames("icon mod-lg ml", {
                    "fill-turquoise": recommendation.holding.sign === Sign.up,
                    "fill-red": recommendation.holding.sign === Sign.down,
                  })}
                />
              </td>
              <td>
                <FormattedMessage
                  id={StringsName.Percentage}
                  values={{ value: recommendation.selling.value }}
                />
                <ReactSVG
                  src={
                    recommendation.selling.sign === Sign.up
                      ? increase
                      : decrease
                  }
                  className={classNames("icon mod-lg ml", {
                    "fill-turquoise": recommendation.selling.sign === Sign.up,
                    "fill-red": recommendation.selling.sign === Sign.down,
                  })}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const Content = connect(mapStateToProps)(ContentDisconnected);
