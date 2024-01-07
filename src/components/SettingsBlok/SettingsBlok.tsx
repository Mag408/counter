import React, { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import {
  increment,
  set,
  reset,
  onChangeMaxValue,
  onChangeStartValue,
} from "../../redux/Slices/counterSlice";
import "./SettingsBlok.css";

type SettingsPropsType = {
  maxValue: number;
  startValue: number;
  settingBoolean: boolean;
  onclickSet: () => void;
};

const SettingsBlok: React.FC<SettingsPropsType> = (props) => {
  const dispatch = useDispatch();

  const onChangeMaxValueHandler = (value: number) => {
    dispatch(onChangeMaxValue(value));
  };

  const onChangeStartValueHandler = (value: number) => {
    dispatch(onChangeStartValue(value));
  };

  return (
    <div className="settingContainer">
      <div className="settingContent">
        <div className="MaxBlok">
          <span>Max value:</span>{" "}
          <input
            className={props.settingBoolean ? "errorSetting" : ""}
            onChange={(e) => {
              onChangeMaxValueHandler(Number(e.target.value));
            }}
            value={props.maxValue}
            type="number"
          />
        </div>
        <div className="StartBlok">
          <span>Start value:</span>{" "}
          <input
            className={props.settingBoolean ? "errorSetting" : ""}
            onChange={(e) => onChangeStartValueHandler(Number(e.target.value))}
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
