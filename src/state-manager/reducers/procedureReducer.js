import {
  LIST_PROCEDURES,
  ADD_PROCEDURE,
  UPDATE_PROCEDURE,
  DELETE_PROCEDURE,
} from "../../shared/types";

let initialState = {
  Procedures: [],
};

const procedureReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case LIST_PROCEDURES:
      return {
        ...state,
        Procedures: action.payload,
      };
    case ADD_PROCEDURE:
      return {
        ...state,
        Procedures: [...state.procedures, action.payload],
      };
    case UPDATE_PROCEDURE:
      let update = state.Procedures.Procedures.map((procedure) =>
        procedure.id === action.payload.id ? action.payload : procedure
      );
      return {
        ...state,
        Procedures: update,
      };
    case DELETE_PROCEDURE:
      let filtered = state.procedures.filter(({ id, ...rest }) => id !== action.payload.id);
      return {
        ...state,
        Procedures: filtered,
      };

    default:
      return state;
  }
};

export default procedureReducer;
