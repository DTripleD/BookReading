import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setAuthHeader } from "../auth/operations";

export const currentPlanning = createAsyncThunk(
  "planning/currentPlanning",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as { auth: { token: string } };
    setAuthHeader(state.auth.token);
    try {
      const res = await axios.get("/planning");
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);

export const startPlanning = createAsyncThunk(
  "planning/startPlanning",
  async (
    credentials: {
      startDate: string;
      endDate: string;
      books: string[];
    },
    thunkAPI
  ) => {
    const state = thunkAPI.getState() as { auth: { token: string } };
    setAuthHeader(state.auth.token);
    try {
      const res = await axios.post("/planning", credentials);

      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);

export const addReadPages = createAsyncThunk(
  "planning/addReadPages",
  async (
    credentials: {
      pages: number;
    },
    thunkAPI
  ) => {
    const state = thunkAPI.getState() as { auth: { token: string } };
    setAuthHeader(state.auth.token);
    try {
      const res = await axios.patch("/planning", credentials);

      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);
