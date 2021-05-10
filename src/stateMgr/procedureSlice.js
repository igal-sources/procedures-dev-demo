import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllProcedures, getProcedure } from "../services/procedures-http.service";

export const fetchProcedures = createAsyncThunk("fetchProcedures", async () => {
  getAllProcedures().then((res) => {
    console.log("fetchProcedures.data: ", res.data);
    return res.data;
  });
});

export const procedureSlice = createSlice({
  name: "Procedures",
  initialState: {
    Procedures: [],
    loading: false,
    error: null,
  },
  reducers: {
    procedureAdded: (state, action) => {
      state.procedures.push(action.payload);
    },
    procedureUpdated: (state, action) => {
      const { procedure } = action.payload;
      const existingProcedure = state.procedures.find((proc) => proc.id === procedure.id);
      if (existingProcedure) {
        existingProcedure = procedure;
      }
    },
    procedureDeleted: (state, action) => {
      const { id } = action.payload;
      const existingProcedure = state.procedures.find((proc) => proc.id === id);
      if (existingProcedure) {
        state.procedures = state.procedures.filter((proc) => proc.id === id);
      }
    },
  },
  extraReducers: {
    [fetchProcedures.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchProcedures.fulfilled]: (state, action) => {
      state.loading = false;
      state.Procedures = [...state.Procedures, ...action.payload];
    },
    [fetchProcedures.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { procedureAdded, procedureUpdated, procedureDeleted } = procedureSlice.actions;

export default procedureSlice.reducer;
