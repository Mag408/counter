// @ts-nocheck
import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, set, reset } from "./redux/Slices/counterSlice";

import SettingsBlok from "./components/SettingsBlok/SettingsBlok";
import CounterBlok from "./components/CounterBlok/CounterBlok";

function App() {
  const counterValue = useSelector((state) => state.counter.counterValue);
  const maxValue = useSelector((state) => state.counter.maxValue);
  const startValue = useSelector((state) => state.counter.startValue);

  const settingBoolean = useSelector((state) => state.counter.settingBoolean);
  const incBoolean = useSelector((state) => state.counter.incBoolean);
  const resetBoolean = useSelector((state) => state.counter.resetBoolean);

  const counterValueShow = useSelector(
    (state) => state.counter.counterValueShow
  );

  const dispatch = useDispatch();

  const onclickSet = () => {
    dispatch(set());
  };

  const onclickInc = () => {
    dispatch(increment());
  };

  const onclickReset = () => {
    dispatch(reset());
  };

  return (
    <div className="App">
      <SettingsBlok
        settingBoolean={settingBoolean}
        maxValue={maxValue}
        startValue={startValue}
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
