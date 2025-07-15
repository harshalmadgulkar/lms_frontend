import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { userLoggedIn } from "../authSlice";

const USER_API = "http://localhost:8080/api/v1/user/";

export const authApi = createApi({
	reducerPath: "authApi",
	baseQuery: fetchBaseQuery({ baseUrl: USER_API, credentials: "include" }),
	endpoints: (builder) => ({
		registerUser: builder.mutation({
			query: (inputData) => ({
				url: "register",
				method: "POST",
				body: inputData,
			}),
		}),
		loginUser: builder.mutation({
			query: (inputData) => ({
				url: "login",
				method: "POST",
				body: inputData,
			}),
			async onQueryStarted(_, { queryFulfilled, dispatch }) {
				try {
					const result = await queryFulfilled;
					dispatch(userLoggedIn(result.data.user));
				} catch (error) {
					console.log(error);
				}
			},
		}),
	}),
});

export const { useRegisterUserMutation, useLoginUserMutation } = authApi;
