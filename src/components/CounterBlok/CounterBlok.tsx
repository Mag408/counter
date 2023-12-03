import React from "react";
import "./CounterBlok.css";

type CounterPropsType = {
  value: number;
  onclickInc: () => void;
  incBoolean: boolean;
  resetBoolean: boolean;
  onclickReset: () => void;
  counterValueShow: boolean;
  settingBoolean: boolean;
};

const CounterBlok: React.FC<CounterPropsType> = (props) => {
  return (
    <div className="counterContainer">
      <div className="counterContent">
        <div className="counterValue">
          <span className={!props.incBoolean ? "" : "errorCounter"}>
            {props.settingBoolean ? (
              <span>Incorrect value!</span>
            ) : props.counterValueShow ? (
              props.value
            ) : (
              <span>press 'set'</span>
            )}
          </span>
        </div>
      </div>
      <div className="counterBottom">
        <button disabled={props.incBoolean} onClick={props.onclickInc}>
          inc
        </button>
        <button disabled={props.resetBoolean} onClick={props.onclickReset}>
          reset
        </button>
      </div>
    </div>
  );
};

export default CounterBlok;
