import { createStore } from "redux";
import reducer from "./state-manager/reducers";
const store = createStore(reducer);

export default store;