export const procedureReducer = (state, action) => {
  console.log("procedureReducer - state: ", state);
  switch (action.type) {
    case "FETCH_PROCEDURE_SUCCESS":
      return { procedures: action.procedures };

    case "FETCH_SELECTED_PROCEDURE_SUCCESS":
      return { selectedProcedure: action.selectedProcedure };

    case "ADD_PROCEDURE":
      return [...state, action.procedure];
    case "EDIT_PROCEDURE":
      return state.map((proc) => {
        if (proc.id === action.id) {
          return {
            ...proc,
            ...action.updates
          };
        } else {
          return proc;
        }
      });

    case "REMOVE_PROCEDURE":
      return state.filter((procedure) => procedure.id !== action.id);
    default:
      return state;
  }
};
