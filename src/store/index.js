import { configureStore } from "@reduxjs/toolkit";
// import logger from "redux-logger";
// import rootReducer from "../reducers/rootReducer";
import cocktailReducer from "../reducers/cocktailSlice";
// import thunk from "redux-/thunk";
const store = configureStore({
  reducer: {
    cocktails: cocktailReducer,
  },
});
export default store;
