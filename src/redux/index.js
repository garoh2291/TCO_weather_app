import { configureStore } from "@reduxjs/toolkit";
import cityReducer from "./cityReducer/city-reducer";

export default configureStore({
  reducer: {
    cities: cityReducer,
  },
});
