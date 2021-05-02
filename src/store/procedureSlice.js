// import { createSlice } from "@reduxjs/toolkit";

// export const procedureSlice = createSlice({
//   name: "user",
//   initialState: {
//     Procedures: [
//       {
//         id: 1,
//         name: "Adam",
//         username: "West",
//       },
//       {
//         id: 2,
//         name: "Peter",
//         username: "Griffen",
//       },
//     ],
//     loading: false,
//     error: null,
//   },
//   reducers: {
//     getProcedures: (state, action) => {
//       state.users = action.payload;
//     },
//     createProcedure: (state, action) => {
//       state.users.unshift(action.payload);
//     },
//     deleteProcedures: (state, action) => {
//       state.users = state.users.filter((user) => user.id !== action.payload.id);
//     },
//   },
// });

// // Action creators are generated for each case reducer function
// export const { createUser, deleteUser, getUser } = userSlice.actions;

// export default userSlice.reducer;
