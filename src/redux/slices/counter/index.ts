import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  initialState: 0,
  name: "counter",
  reducers: {
    incrementCounter: (state) => state + 1,
    decrementCounter: (state) => {
      if (state > 0) return state - 1;
      else alert("Counter cannot be negative!!");
      return state;
    },
    resetCounter: () => 0,
  },
});

export const { decrementCounter, incrementCounter, resetCounter } =
  counterSlice.actions;

export default counterSlice.reducer;
