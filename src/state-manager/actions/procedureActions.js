import {
  LIST_PROCEDURES,
  ADD_PROCEDURE,
  UPDATE_PROCEDURE,
  DELETE_PROCEDURE,
} from "../../shared/types";

//import Procedures from "../../assets/mock-data/proceduresMain.json";
import { listArray } from "../../shared/data";

export const getItems = () => {
  return {
    type: LIST_PROCEDURES,
    payload: listArray,
  };
};
export const addItem = (item) => {
  return {
    type: ADD_PROCEDURE,
    payload: item,
  };
};
export const updateItem = (item) => {
  return {
    type: UPDATE_PROCEDURE,
    payload: item,
  };
};
export const deleteItem = (item) => {
  return {
    type: DELETE_PROCEDURE,
    payload: item,
  };
};
