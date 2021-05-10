import { configureStore } from "@reduxjs/toolkit";
import proceduresReducer from "./stateMgr/procedureSlice";

export default configureStore({
  reducer: {
    Procedures: proceduresReducer,
  },
});
