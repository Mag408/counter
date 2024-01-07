import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counterValue: JSON.parse(localStorage.getItem("startValue")) || 0,
  maxValue: JSON.parse(localStorage.getItem("maxValue")) || 3,
  startValue: JSON.parse(localStorage.getItem("startValue")) || 0,
  settingBoolean: false,
  incBoolean: false,
  resetBoolean: false,
  counterValueShow: false,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.counterValue += 1;
      state.resetBoolean = false;
      if (state.counterValue === state.maxValue) {
        state.incBoolean = true;
      }
    },
    set: (state) => {
      state.counterValue = state.startValue;
      state.resetBoolean = true;
      state.incBoolean = false;
      state.counterValueShow = true;

      localStorage.setItem("maxValue", JSON.stringify(state.maxValue));
      localStorage.setItem("startValue", JSON.stringify(state.startValue));
    },
    reset: (state) => {
      state.resetBoolean = true;
      state.incBoolean = false;
      state.counterValue = state.startValue;
    },
    onChangeMaxValue: (state, action) => {
      state.maxValue = Number(action.payload);
      if (Number(action.payload) > state.startValue) {
        state.settingBoolean = false;
        state.incBoolean = false;
      } else {
        state.settingBoolean = true;
        state.incBoolean = true;
      }
    },
    onChangeStartValue: (state, action) => {
      state.startValue = Number(action.payload);
      state.incBoolean = true;
      state.counterValueShow = false;
      if (
        !(Number(action.payload) < state.maxValue) ||
        Number(action.payload) < 0
      ) {
        state.settingBoolean = true;
        state.incBoolean = true;
      } else {
        state.settingBoolean = false;
        state.incBoolean = false;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, set, reset, onChangeMaxValue, onChangeStartValue } =
  counterSlice.actions;

export default counterSlice.reducer;
