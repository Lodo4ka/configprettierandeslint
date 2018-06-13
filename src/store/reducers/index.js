import { combineReducers } from "redux";
import userReducer from "./userReducer.js";

const RootReducer = combineReducers({
  users: userReducer
  // another reducerhere,
});

export default RootReducer;
