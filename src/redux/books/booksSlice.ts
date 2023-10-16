import { createSlice } from "@reduxjs/toolkit";
import { addBook, getBooks } from "./booksOperations";

interface State {
  name: string;
  email: string;
  goingToRead: [];
  currentlyReading: [];
  finishedReading: [];
  isLoading: boolean;
  error: unknown;
}

const initialState: State = {
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
      .addCase(getBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        console.log(action);
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.name = action.payload.goingToRead;
        state.name = action.payload.currentlyReading;
        state.name = action.payload.finishedReading;
        state.isLoading = false;
      })

      .addCase(getBooks.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(addBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addBook.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(addBook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const booksReducer = booksSlice.reducer;
