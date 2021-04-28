import React, { createContext, useReducer, useEffect } from "react";
import { procedureReducer } from "../reducers/procedureReducer";
import { getAllProcedures } from "../../services/procedures-http.service";

export const ProcedureContext = createContext();

const ProcedureContextProvider = (props) => {
  const [procedures, dispatch] = useReducer(procedureReducer, [], () => {
    const localData = localStorage.getItem("Procedures");
    //console.log('localData: ', localData);
    return localData ? JSON.parse(localData) : [];
  });

  const fetchData = () => {
    getAllProcedures().then((res) => {
      return res.data;
      // setProcedures(res.data);
      // setSelectedProcedure(res.data[0]);
    });
  };

  useEffect(() => {
    fetchData();
    //localStorage.setItem("Procedures", JSON.stringify(procedures));
  }, [procedures]);
  return (
    <ProcedureContext.Provider value={{ procedures, dispatch }}>
      {props.children}
    </ProcedureContext.Provider>
  );
};

export default ProcedureContextProvider;
