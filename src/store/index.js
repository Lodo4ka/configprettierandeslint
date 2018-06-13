import { createStore } from "redux";
import RootReducer from "./reducers";

const initialState = {
  users: []
};
const store = createStore(
  RootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
