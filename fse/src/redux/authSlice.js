import { createSlice } from "@reduxjs/toolkit";

const userStorage = localStorage.getItem("userDetail");
const initialState = {
  user: userStorage ? JSON.parse(userStorage) : null,
};

export const authenticateSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authenticate: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("userFSE", JSON.stringify(state.user));
    },
    logOut: (state) => {
      state.user = null;
      localStorage.removeItem("userDetail");
    },
  },
});

export const { authenticate, logOut } = authenticateSlice.actions;
export const currentUser = (state) => state.auth.user;

export default authenticateSlice.reducer;
