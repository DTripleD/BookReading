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
    try {
      const res = await axios.post("/book", credentials);

      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);

export const addReview = createAsyncThunk(
  "books/addReview",
  async (
    credentials: { rating: number | null; feedback: string; id: string },
    thunkAPI
  ) => {
    const state: RootState = thunkAPI.getState();
    setAuthHeader(state.auth.token);
    const { rating, feedback, id } = credentials;
    try {
      const res = await axios.patch(`/book/review/${id}`, {
        rating,
        feedback,
      });

      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);

export const deleteBook = createAsyncThunk(
  "books/deleteBook",
  async (id: string, thunkAPI) => {
    const state = thunkAPI.getState();
    setAuthHeader(state.auth.token);
    try {
      const res = await axios.delete(`/book/${id}`);

      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);
