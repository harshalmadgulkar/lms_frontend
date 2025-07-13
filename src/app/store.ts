import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/features/authSlice.ts";

export const appStore = configureStore({
	reducer: {
		// Add your reducers here
		auth: authReducer,
	},
});
