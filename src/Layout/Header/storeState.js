import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  drawer: false,
};

export const headerStates = createSlice({
  name: "header",
  initialState,
  reducers: {
    setDrawer: (state, action) => {
      state.drawer = !state.drawer;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDrawer } = headerStates.actions;


export default headerStates.reducer;
