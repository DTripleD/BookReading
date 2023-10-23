import { createSlice } from "@reduxjs/toolkit";
import {
  addReadPages,
  currentPlanning,
  startPlanning,
} from "./planningOperations";

interface State {
  books: Array<{
    author: string;
    pagesFinished: number;
    pagesTotal: number;
    publishYear: number;
    title: string;
  }>;
  duration: number;
  endDate: string;
  startDate: string;
  pagesPerDay: number;
  _id: string;
  isLoading: boolean;
  error: unknown;
}

const initialState: State = {
  books: [],
  duration: 0,
  endDate: "",
  pagesPerDay: 0,
  startDate: "",
  _id: "",
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
        console.log(action.payload.data.planning);
        state = {
          ...action.payload.data.planning,
          isLoading: false,
          error: null,
        };
      })
      .addCase(currentPlanning.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(startPlanning.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(startPlanning.fulfilled, (state, action) => {
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
        console.log(action);
        // state.goingToRead.push(action.payload.data);
        // state.isLoading = false;
      })
      .addCase(addReadPages.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const planningReducer = planningSlice.reducer;
