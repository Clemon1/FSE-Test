import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "registerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://www.dev.farmwarehouse.ng/api`,
    credentials: "include",
  }),
  tagTypes: ["authSystem"],
  endpoints: (builder) => ({
    // register slice and endpoint
    addRegister: builder.mutation({
      query: (body) => ({
        url: `/users/signup`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["authSystem"],
    }),
    // login slice and endpoint

    addLogin: builder.mutation({
      query: (body) => ({
        url: `/users/login`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["authSystem"],
    }),
  }),
});

export const { useAddRegisterMutation, useAddLoginMutation } = authApi;
