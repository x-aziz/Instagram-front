import { createSlice, isRejected } from "@reduxjs/toolkit";

const initialState = {
  User: [],
  isRejected: false,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    handleData: (state, actions) => {
      state.User = actions.payload;
      state.isRejected = true;
    //   console.log(User);
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
