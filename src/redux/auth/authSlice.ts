import { createSlice } from "@reduxjs/toolkit";
import { register, login, logOut, refreshUser } from "./operations";
import { AuthState } from "../../types/types";

const initialState: AuthState = {
  user: { name: null, email: null, id: null },
  token: null,
  refreshToken: null,
  sid: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.refreshToken = payload.refreshToken;
        state.user = payload.userData;
        state.token = payload.accessToken;
        state.sid = payload.sid;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, handleRejected)
      .addCase(login.pending, handleRejected)
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.refreshToken = payload.refreshToken;
        state.user = payload.userData;
        state.token = payload.accessToken;
        state.sid = payload.sid;
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, handleRejected)
      .addCase(logOut.pending, handlePending)
      .addCase(logOut.fulfilled, (state) => {
        state.isLoading = false;
        state.user = { name: null, email: null, id: null };
        state.refreshToken = null;
        state.sid = null;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, handleRejected)
      .addCase(refreshUser.pending, handlePending)
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.token = payload.newAccessToken;
        state.refreshToken = payload.newRefreshToken;
        state.sid = payload.newSid;
        state.isLoggedIn = true;
      })
      .addCase(refreshUser.rejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
