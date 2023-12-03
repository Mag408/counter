import React, { ChangeEvent, useEffect, useState } from "react";
import "./App.css";
import SettingsBlok from "./components/SettingsBlok/SettingsBlok";
import CounterBlok from "./components/CounterBlok/CounterBlok";

function App() {
  const [counterValue, setCounterValue] = useState(0);
  const [maxValue, setMaxValue] = useState(4);
  const [startValue, setStartValue] = useState(0);

  const [settingBoolean, setSettingBoolean] = useState(false);
  const [incBoolean, setIncBoolean] = useState(false);
  const [resetBoolean, setResetBoolean] = useState(true);

  const [counterValueShow, setCounterValueShow] = useState(true);

  React.useEffect(() => {
    const maxValueStr = localStorage.getItem("maxValue");
    if (maxValueStr) {
      const newValue1 = JSON.parse(maxValueStr);
      setMaxValue(newValue1);
    }
    const startValueStr = localStorage.getItem("startValue");
    if (startValueStr) {
      const newValue2 = JSON.parse(startValueStr);
      setStartValue(newValue2);
    }
  }, []);

  React.useEffect(() => {}, [maxValue, startValue]);

  const onclickSet = () => {
    setCounterValue(startValue);
    setResetBoolean(true);
    setIncBoolean(false);
    setCounterValueShow(true);

    localStorage.setItem("maxValue", JSON.stringify(maxValue));
    localStorage.setItem("startValue", JSON.stringify(startValue));
  };

  const onclickInc = () => {
    setCounterValue(counterValue + 1);
    setResetBoolean(false);
    if (counterValue === maxValue - 1) {
      setIncBoolean(true);
    }
  };

  const onclickReset = () => {
    setResetBoolean(true);
    setIncBoolean(false);
    setCounterValue(startValue);
  };

  const onChangeMaxValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setMaxValue(Number(event.target.value));
    if (Number(event.target.value) > startValue) {
      setSettingBoolean(false);
      setIncBoolean(false);
    } else {
      setSettingBoolean(true);
      setIncBoolean(true);
    }
  };

  const onChangeStartValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setStartValue(Number(event.target.value));
    setIncBoolean(true);
    setCounterValueShow(false);
    if (
      !(Number(event.target.value) < maxValue) ||
      Number(event.target.value) < 0
    ) {
      setSettingBoolean(true);
      setIncBoolean(true);
    } else {
      setSettingBoolean(false);
      setIncBoolean(false);
    }
  };

  return (
    <div className="App">
      <SettingsBlok
        settingBoolean={settingBoolean}
        maxValue={maxValue}
        onChangeMaxValueHandler={onChangeMaxValueHandler}
        startValue={startValue}
        onChangeStartValueHandler={onChangeStartValueHandler}
        onclickSet={onclickSet}
      />
      <CounterBlok
        settingBoolean={settingBoolean}
        incBoolean={incBoolean}
        resetBoolean={resetBoolean}
        value={counterValue}
        onclickInc={onclickInc}
        onclickReset={onclickReset}
        counterValueShow={counterValueShow}
      />
    </div>
  );
}

export default App;
