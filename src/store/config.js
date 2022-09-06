import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer-and-action";

export const store = configureStore({
  reducer,
});
