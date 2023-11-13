import { RootState } from "../../types/types";

export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;

export const selectUser = (state: RootState) => state.auth.user;

export const selectIsLoading = (state: RootState) => state.auth.isLoading;
