import { RootState } from "../store";

export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;

export const selectUser = (state: RootState) => state.auth.user;

export const selectIsRefreshing = (state: RootState) => state.auth.isRefreshing;

// export const selectIsChanging = (state) => state.auth.isChanging;

// export const selectAuthToken = (state) => state.auth.data;
// export const selectAuthAccessToken = (state) => state.auth.accessToken;
