import http from "../http-common";
import { getProcedures } from "../http-common";

export const getAllProcedures = () => {
  return http.get("/Procedures");
};

export const getAllServerProcedures = () => {
  return getProcedures();
};

export const getProcedure = (id) => {
  return http.get(`/Procedures/${id}`);
};

export const createProcedure = (data) => {
  return http.post("/Procedures", data);
};

export const updateProcedure = (id, data) => {
  return http.put(`/Procedures/${id}`, data);
};

export const removeProcedure = (id) => {
  return http.delete(`/Procedures/${id}`);
};
