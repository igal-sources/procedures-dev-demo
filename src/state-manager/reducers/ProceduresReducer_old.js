

export const ProceduresReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PROCEDURE":
      return [
        ...state,
        {
          procedures: [...state.procedures, action.payload],
        },
      ];

    case "EDIT_PROCEDURE":
      const updatedProcedure = action.payload;

      const updatedProcedures = state.Procedures.map((procedure) => {
        if (procedure.id === updatedProcedure.id) {
          return updatedProcedure;
        }
        return procedure;
      });

      return {
        ...state,
        procedures: updatedProcedures,
      };

    case "REMOVE_PROCEDURE":
      return {
        ...state,
        procedures: state.procedures.filter((procedure) => procedure.id !== action.payload),
      };

    default:
      return state;
  }
};
