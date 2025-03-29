import { configureStore } from "@reduxjs/toolkit";
import companyReducer from "./Redux/companySlice";

export const store = configureStore({
  reducer: {
    companies: companyReducer,
  },
});
