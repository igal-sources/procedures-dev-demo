import { getServerProcedures, createServerProcedure, updateServerProcedure, deleteServerProcedure } from "../http-common";

// export const getAllProcedures = () => {
//   return http.get("/Procedures");
// };

// export const getProcedure = (id) => {
//   return http.get(`/Procedures/${id}`);
// };

// export const createProcedure = (data) => {
//   return http.post("/Procedures", data);
// };

// export const updateProcedure = (id, data) => {
//   return http.put(`/Procedures/${id}`, data);
// };

// export const removeProcedure = (id) => {
//   return http.delete(`/Procedures/${id}`);
// };

//=========== Server Requests Methods

export const getAllServerProcedures = (callback) => {
  return getServerProcedures("", callback);
};

export const getServerProcedureById = (id, callback) => {
  return getServerProcedures(id, callback);
};

export const createProcedure = (data) => {
  return createServerProcedure(data);
};

export const updateProcedure = (data) => {
  return updateServerProcedure(data);
};

export const deleteProcedure = (data) => {
  return deleteServerProcedure(data);
};
