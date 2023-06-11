import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import headerStates from "../Layout/Header/storeState";

export const store = configureStore({
  reducer: {
    header: headerStates,
  },
  middleware: [thunk],
});
