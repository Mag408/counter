import React, { ChangeEvent } from "react";
import "./SettingsBlok.css";

type SettingsPropsType = {
  maxValue: number;
  startValue: number;
  onChangeMaxValueHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeStartValueHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  settingBoolean: boolean;
  onclickSet: () => void;
};

const SettingsBlok: React.FC<SettingsPropsType> = (props) => {
  return (
    <div className="settingContainer">
      <div className="settingContent">
        <div className="MaxBlok">
          <span>Max value:</span>{" "}
          <input
            className={props.settingBoolean ? "errorSetting" : ""}
            onChange={props.onChangeMaxValueHandler}
            value={props.maxValue}
            type="number"
          />
        </div>
        <div className="StartBlok">
          <span>Start value:</span>{" "}
          <input
            className={props.settingBoolean ? "errorSetting" : ""}
            onChange={props.onChangeStartValueHandler}
            value={props.startValue}
            type="number"
          />
        </div>
      </div>
      <div className="settingBottom">
        <button onClick={props.onclickSet} disabled={props.settingBoolean}>
          SET
        </button>
      </div>
    </div>
  );
};

export default SettingsBlok;
