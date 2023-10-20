import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setAuthHeader } from "../auth/operations";
import { RootState } from "../store";

export const getBooks = createAsyncThunk(
  "books/getBooks",
  async (_, thunkAPI) => {
    const state: RootState = thunkAPI.getState();
    setAuthHeader(state.auth.token);
    try {
      const res = await axios.get("/user/books");

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);

export const addBook = createAsyncThunk(
  "books/addBook",
  async (
    credentials: {
      title: string;
      author: string;
      publishYear: number;
      pagesTotal: number;
    },
    thunkAPI
  ) => {
    const state: RootState = thunkAPI.getState();
    setAuthHeader(state.auth.token);
    console.log(credentials);
    try {
      const res = await axios.post("/book", credentials);

      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);

export const currentPlanning = createAsyncThunk(
  "books/currentPlanning",
  async (_, thunkAPI) => {
    const state: RootState = thunkAPI.getState();
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
  "books/startPlanning",
  async (
    credentials: {
      startDate: string;
      endDate: string;
      books: string[];
    },
    thunkAPI
  ) => {
    const state: RootState = thunkAPI.getState();
    setAuthHeader(state.auth.token);
    try {
      const res = await axios.post("/planning", credentials);

      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);
