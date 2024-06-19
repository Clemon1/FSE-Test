import { configureStore } from "@reduxjs/toolkit";
import { authenticateSlice } from "./redux/authSlice";
import { authApi } from "./redux/RTK-Query/auth";

export const store = configureStore({
  reducer: {
    auth: authenticateSlice,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([authApi.middleware]),
});
