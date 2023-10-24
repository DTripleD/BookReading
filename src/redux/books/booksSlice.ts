import { createSlice } from "@reduxjs/toolkit";
import { addBook, getBooks } from "./booksOperations";

interface State {
  name: string;
  email: string;
  goingToRead: [
    {
      title: string;
      author: string;
      publishYear: number;
      pagesTotal: number;
      _id: string;
    }
  ];
  currentlyReading: [];
  finishedReading: [];
  isLoading: boolean;
  error: unknown;
}

const initialState: State = {
  name: "",
  email: "",
  goingToRead: [
    {
      title: "",
      pagesTotal: 0,
      publishYear: 0,
      author: "",
      _id: "",
    },
  ],
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
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.goingToRead = action.payload.goingToRead;
        state.currentlyReading = action.payload.currentlyReading;
        state.finishedReading = action.payload.finishedReading;
        state.isLoading = false;
      })
      .addCase(getBooks.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(addBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.goingToRead.push(action.payload.data);
        state.isLoading = false;
      })
      .addCase(addBook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const booksReducer = booksSlice.reducer;
