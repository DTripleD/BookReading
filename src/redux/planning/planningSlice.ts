import { createSlice } from "@reduxjs/toolkit";
import {
  addReadPages,
  currentPlanning,
  startPlanning,
} from "./planningOperations";
import { handlePending, handleRejected } from "../books/booksSlice";
import { PlaningState } from "../../types/types";

const initialState: PlaningState = {
  books: [],
  duration: null,
  endDate: "",
  pagesPerDay: null,
  startDate: "",
  _id: "",
  stats: [],
  isLoading: false,
  error: null,
};

const planningSlice = createSlice({
  name: "planning",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(currentPlanning.fulfilled, (state, { payload }) => {
        state.books = payload.data.planning.books;
        state.duration = payload.data.planning.duration;
        state.endDate = payload.data.planning.endDate;
        state.startDate = payload.data.planning.startDate;
        state.pagesPerDay = payload.data.planning.pagesPerDay;
        state.stats = payload.data.planning.stats;
        state._id = payload.data.planning._id;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(startPlanning.fulfilled, (state, { payload }) => {
        state.books = payload.data.books;
        state.duration = payload.data.duration;
        state.endDate = payload.data.endDate;
        state.startDate = payload.data.startDate;
        state.pagesPerDay = payload.data.pagesPerDay;
        state.stats = payload.data.stats;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addReadPages.fulfilled, (state, { payload }) => {
        state.books = state.books.map((book) =>
          book._id === payload.data.book._id ? payload.data.book : book
        );
        state.stats = payload.data.planning.stats;
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher((action) => action.type.endsWith("/pending"), handlePending)
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        handleRejected
      );
  },
});

export const planningReducer = planningSlice.reducer;
