import { FunctionComponent } from "react";
import { FormattedMessage } from "react-intl";
import { StringsName } from "../../../strings/strings";
import { connect } from "react-redux";
import { ReduxState } from "../../../redux/ReduxState";
import { KeyValueReducerGenerator } from "../../../redux/reducers/KeyValueReducerGenerator";
import { ReduxConstants } from "../../../redux/ReduxConstants";
import { Selectors } from "../../../redux/Selectors";

const mapDispatchToProps = (dispatch) => ({
  setShowSocialMedia: (value) =>
    dispatch(
      KeyValueReducerGenerator.setKeyValue(
        ReduxConstants.Keys.showSocialMedia,
        value
      )
    ),
});

const mapStateToProps = (state: ReduxState) => ({
  showSocialMedia: Selectors.showSocialMedia(state),
});

const SearchSettingsMediaDisconnected: FunctionComponent<
  ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>
> = ({ setShowSocialMedia, showSocialMedia }) => {
  return (
    <div className="box-settings">
      <div className="box-text mr-title mr1 flex-end flex">
        <label
          htmlFor="SwitchMedia"
          className="mr-title switch-social-medial-display"
        >
          <FormattedMessage id={StringsName.DisplaySocialMedia} />
        </label>
      </div>
      <div className="box-value ml-title">
        <input
          id="SwitchMedia"
          className="switch"
          type="checkbox"
          checked={showSocialMedia}
          onChange={(event) => {
            setShowSocialMedia(event.currentTarget.checked);
          }}
        />
      </div>
    </div>
  );
};

export const SettingsMedia = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchSettingsMediaDisconnected);
