import { createStore } from "redux";
import reducer from "../state-manager/reducers/procedureReducer";
const store = createStore(reducer);

export default store;
