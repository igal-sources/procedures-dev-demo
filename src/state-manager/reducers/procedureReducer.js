import {
  LIST_PROCEDURES,
  ADD_PROCEDURE,
  UPDATE_PROCEDURE,
  DELETE_PROCEDURE,
  initializeProcedure,
} from "../../shared/types";

let initialState = {
  lists: [],
};

const procedureReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_PROCEDURES:
      return {
        ...state,
        lists: action.payload,
      };
    case ADD_PROCEDURE:
      return {
        ...state,
        lists: [...state.lists, action.payload],
      };
    case UPDATE_PROCEDURE:
      let update = state.lists.map((list) =>
        list.id === action.payload.id ? action.payload : list
      );
      return {
        ...state,
        lists: update,
      };
    case DELETE_PROCEDURE:
      let filtered = state.lists.filter(({ id, ...rest }) => id !== action.payload.id);
      return {
        ...state,
        lists: filtered,
      };

    default:
      return state;
  }
};

export default procedureReducer;
