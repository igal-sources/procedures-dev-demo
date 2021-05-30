import { getServerProcedures, createServerProcedure, updateServerProcedure, deleteServerProcedure } from "../http-common";

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
