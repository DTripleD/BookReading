import { createSlice } from "@reduxjs/toolkit";
import { register, login, logOut, refreshUser } from "./operations";
import { handlePending, handleRejected } from "../books/booksSlice";
import { AuthState } from "../../types/types";

const initialState: AuthState = {
  user: { name: null, email: null, id: null },
  token: null,
  refreshToken: null,
  sid: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.refreshToken = payload.refreshToken;
        state.user = payload.userData;
        state.token = payload.accessToken;
        state.sid = payload.sid;
        state.isLoggedIn = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.refreshToken = payload.refreshToken;
        state.user = payload.userData;
        state.token = payload.accessToken;
        state.sid = payload.sid;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = { name: null, email: null, id: null };
        state.refreshToken = null;
        state.sid = null;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.token = payload.newAccessToken;
        state.refreshToken = payload.newRefreshToken;
        state.sid = payload.newSid;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addMatcher((action) => action.type.endsWith("/pending"), handlePending)
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        handleRejected
      );
  },
});

export const authReducer = authSlice.reducer;
