import { createSlice } from "@reduxjs/toolkit";
import { addBook, addReview, deleteBook, getBooks } from "./booksOperations";
import { BookState } from "../../types/types";

const initialState: BookState = {
  name: "",
  email: "",
  goingToRead: [],
  currentlyReading: [],
  finishedReading: [],
  isLoading: false,
  error: null,
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.fulfilled, (state, action) => {
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.goingToRead = action.payload.goingToRead;
        state.currentlyReading = action.payload.currentlyReading;
        state.finishedReading = action.payload.finishedReading;
        state.isLoading = false;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.goingToRead.push(action.payload);
        state.isLoading = false;
      })
      .addCase(addReview.fulfilled, (state, action) => {
        state.finishedReading = state.finishedReading.map((book) =>
          book._id === action.payload.data._id ? action.payload.data : book
        );
        state.isLoading = false;
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.finishedReading = state.finishedReading.filter(
          (book) => book._id !== action.payload.data._id
        );
        state.isLoading = false;
      })
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const booksReducer = booksSlice.reducer;
