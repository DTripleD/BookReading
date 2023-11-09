import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../types/types";

axios.defaults.baseURL = "https://bookread-backend.goit.global";

export const setAuthHeader = (token: string | null) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (
    credentials: {
      name: string;
      email: string;
      password: string;
    },
    thunkAPI
  ) => {
    try {
      await axios.post("/auth/register", credentials);
      const { email, password } = credentials;
      const res = await axios.post("/auth/login", { email, password });

      setAuthHeader(res.data.accessToken);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error as Error);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials: { email: string; password: string }, thunkAPI) => {
    try {
      const res = await axios.post("/auth/login", credentials);
      setAuthHeader(res.data.accessToken);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error as Error);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  const state = thunkAPI.getState();

  const persistedToken = (state as RootState).auth.token;
  try {
    setAuthHeader(persistedToken);
    await axios.post("/auth/logout");
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue((error as Error).message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const refreshToken = (state as RootState).auth.refreshToken;
    const sid = (state as RootState).auth.sid;

    if (sid === null || !refreshToken) {
      return thunkApi.rejectWithValue("Unable to fetch user");
    }

    try {
      setAuthHeader(refreshToken);
      const { data } = await axios.post("/auth/refresh", { sid });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue((error as Error).message);
    }
  }
);
