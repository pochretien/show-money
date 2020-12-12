import React, { FunctionComponent } from "react";
import { ReactSVG } from "react-svg";
import userProfile from "../../svg/user-profile.svg";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import { StringsName } from "../../strings/strings";
import { ReduxState } from "../../redux/ReduxState";
import { RequestSelectors } from "../../redux/request/RequestSelectors";

const mapStateToProps = (state: ReduxState) => ({
  name: RequestSelectors.userName(state),
});
const HeaderUserDisconnected: FunctionComponent<
  ReturnType<typeof mapStateToProps>
> = ({ name }) => (
  <div className="header-user-info">
    <span className="header-user-text text-blick-pink">
      <FormattedMessage id={StringsName.UserHeader} values={{ name }} />
    </span>
    <ReactSVG src={userProfile} className="icon mod-2x fill-turquoise" />
  </div>
);

export const HeaderUser = connect(mapStateToProps)(HeaderUserDisconnected);
