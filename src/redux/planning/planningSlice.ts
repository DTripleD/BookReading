import { createSlice } from "@reduxjs/toolkit";
import {
  addReadPages,
  currentPlanning,
  startPlanning,
} from "./planningOperations";

interface State {
  books: Array<{
    author: string;
    pagesFinished: number | null;
    pagesTotal: number | null;
    publishYear: number | null;
    title: string;
  }>;
  duration: number | null;
  endDate: string;
  startDate: string;
  pagesPerDay: number | null;
  _id: string;
  stats: Array<{
    pagesCount: number;
    time: string;
  }>;
  isLoading: boolean;
  error: unknown;
}

const initialState: State = {
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
      .addCase(currentPlanning.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(currentPlanning.fulfilled, (state, action) => {
        console.log(action.payload);
        state.books = action.payload.data.planning.books;
        state.duration = action.payload.data.planning.duration;
        state.endDate = action.payload.data.planning.endDate;
        state.startDate = action.payload.data.planning.startDate;
        state.pagesPerDay = action.payload.data.planning.pagesPerDay;
        state.stats = action.payload.data.planning.stats;
        state._id = action.payload.data.planning._id;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(currentPlanning.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(startPlanning.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(startPlanning.fulfilled, (_, action) => {
        console.log(action);
        // state.goingToRead.push(action.payload.data);
        // state.isLoading = false;
      })
      .addCase(startPlanning.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addReadPages.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addReadPages.fulfilled, (state, action) => {
        state.stats = action.payload.data.planning.stats;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addReadPages.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const planningReducer = planningSlice.reducer;
