import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "0",
    name: "Harry Potter",
  },
  {
    id: "1",
    name: "Hermione Granger",
  },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const SelectedAllUsers = (state) => state.users;
export default usersSlice.reducer;
