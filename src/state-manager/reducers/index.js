import { combineReducers } from "redux";
import procedureReducer from "./procedureReducer";
export default combineReducers({
  procedures: procedureReducer,
});
