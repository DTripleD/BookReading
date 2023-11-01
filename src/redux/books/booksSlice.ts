import { createSlice } from "@reduxjs/toolkit";
import { addBook, addReview, getBooks } from "./booksOperations";

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
  finishedReading: Array<{
    author: string;
    feedback: string;
    pagesFinished: number;
    pagesTotal: number;
    publishYear: number;
    rating: number;
    title: string;
    _id: string;
  }>;
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
  finishedReading: [
    {
      author: "ClearingForm",
      feedback: "Da",
      pagesFinished: 123,
      pagesTotal: 123,
      publishYear: 1234,
      rating: 4,
      title: "ClearingForm",
      _id: "653a841820464d1828469659",
    },
  ],
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
      })
      .addCase(addReview.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addReview.fulfilled, (state, action) => {
        state.finishedReading = state.finishedReading.map((book) =>
          book._id === action.payload.data._id ? action.payload.data : book
        );
        state.isLoading = false;
      })
      .addCase(addReview.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const booksReducer = booksSlice.reducer;
