import React, { FunctionComponent, Fragment } from "react";
import classNames from "classnames";
import { connect } from "react-redux";
import { map } from "lodash";
import { ReactSVG } from "react-svg";
import { FormattedMessage } from "react-intl";
import { ReduxState } from "../../../redux/ReduxState";
import { RequestSelectors } from "../../../redux/request/RequestSelectors";
import { StringsName } from "../../../strings/strings";
import { SocialMedialSvg } from "../../../svg/SvgConstants";
import { defaultMedia } from "../../../services/resource/stock/StockInterface";
import { Selectors } from "../../../redux/Selectors";

// Add selector for showSocial
const mapStateToProps = (state: ReduxState, ownProps) => ({
  showSocialMedia: Selectors.showSocialMedia(state),
  socialMedial: RequestSelectors.socialMedial(state),
});
const SearchInfoSocialMediaDisconnected: FunctionComponent<
  ReturnType<typeof mapStateToProps>
> = ({ socialMedial, showSocialMedia }) => {
  return (
    <div
      className={classNames("search-info-social", {
        hidden: !showSocialMedia,
      })}
    >
      <div className="center search-info-social-title large-font bold mb-title">
        <FormattedMessage id={StringsName.SocialMedial} />
      </div>
      <div className="search-info-social-text">
        <div className="search-info-l flex flex-column align-ends">
          {map(
            socialMedial?.media ?? defaultMedia,
            (value: any, key: string) => {
              return (
                <div key={key} className="media-icon-container flex-end flex">
                  <ReactSVG
                    key={value}
                    src={SocialMedialSvg[key]}
                    className="icon mod-normal media-icon"
                  />
                </div>
              );
            }
          )}
        </div>
        <div className="search-info-r">
          {map(
            socialMedial?.media ?? defaultMedia,
            (value: any, key: string) => {
              return (
                <div key={key} className="media-count">
                  {value}
                </div>
              );
            }
          )}
        </div>
      </div>
      <div className="search-info-social-total">
        <div className="search-info-social-l media-icon-container flex-end flex bold">
          <FormattedMessage id={StringsName.Total} />
        </div>
        <div className="media-count search-info-social-r bold">
          {socialMedial?.totalCount ?? 0}
        </div>
      </div>
    </div>
  );
};

export const SearchInfoSocialMedia = connect(mapStateToProps)(
  SearchInfoSocialMediaDisconnected
);
