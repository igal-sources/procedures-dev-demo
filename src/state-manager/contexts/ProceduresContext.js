import React, { createContext, useReducer } from "react";
import { ProceduresReducer } from "../reducers/ProceduresReducer";
import Procedures from "../../assets/mock-data/proceduresMain.json";
import * as types from "../../shared/types";

export const ProceduresContext = createContext(Procedures);

export const ProcedureContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProceduresReducer, Procedures);
  console.log("state: ", state.Procedures);

  function addProcedure(procedure) {
    dispatch({
      type: "ADD_PROCEDURE",
      payload: procedure,
    });
  }

  function editProcedure(procedure) {
    dispatch({
      type: "EDIT_PROCEDURE",
      payload: procedure,
    });
  }

  function removeProcedure(id) {
    dispatch({
      type: "REMOVE_PROCEDURE",
      payload: id,
    });
  }

  return (
    <ProceduresContext.Provider
      value={{
        Procedures: state.Procedures,
        dispatch,
      }}
    >
      {children}
    </ProceduresContext.Provider>
  );
};
