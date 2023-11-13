import { store } from "../redux/store";

interface User {
  name: string | null;
  email: string | null;
  id: string | null;
}

export interface AuthState {
  user: User;
  token: string | null;
  refreshToken: string | null;
  sid: string | null;
  isLoggedIn: boolean;
  isLoading: boolean;
  error: never | null;
}

export interface BookState {
  name: string;
  email: string;
  goingToRead: Array<{
    title: string;
    author: string;
    publishYear: number;
    pagesTotal: number;
    _id: string;
  }>;
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

export interface PlaningState {
  books: Array<{
    author: string;
    pagesFinished: number | null;
    pagesTotal: number | null;
    publishYear: number | null;
    title: string;
    _id: string;
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

export interface Book {
  author: string;
  pagesFinished: number;
  pagesTotal: number;
  publishYear: number;
  title: string;
  _id: string;
}

export type Props = {
  id: string;
  onClose?: () => void;
};

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
