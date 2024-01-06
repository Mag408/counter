import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  maxValue: 3,
  startValue: 0,
  settingBoolean: false,
  incBoolean: false,
  resetBoolean: false,
  valueShow: false,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    set: (state) => {
      state.value -= 1;
    },
    reset: (state, action) => {
      state.value += action.payload;
    },
    onChangeMaxValueHandler: () => {},
    onChangeStartValueHandler: () => {},
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  set,
  reset,
  onChangeMaxValueHandler,
  onChangeStartValueHandler,
} = counterSlice.actions;

export default counterSlice.reducer;
