import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getBooks = createAsyncThunk(
  "books/getAll",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/user/books");

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);

export const addBook = createAsyncThunk("books/add", async (_, thunkAPI) => {
  try {
    const res = await axios.post("/book");

    return res;
  } catch (error) {
    return thunkAPI.rejectWithValue((error as Error).message);
  }
});
