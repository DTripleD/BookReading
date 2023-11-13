import { RootState } from "../../types/types";

export const userBooks = (state: RootState) => state.books;

export const selectIsLoading = (state: RootState) => state.books.isLoading;
