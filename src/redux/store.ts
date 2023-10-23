import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./auth/authSlice";
import { useDispatch } from "react-redux";
import { booksReducer } from "./books/booksSlice";
import { planningReducer } from "./planning/planningSlice";

const authPersistConfig = {
  key: "auth",
  storage,
  // whitelist: ["user"],
};

const booksPersistConfig = {
  key: "books",
  storage,
  // whitelist: ["user"],
};

const planningPersistConfig = {
  key: "planning",
  storage,
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    books: persistReducer(booksPersistConfig, booksReducer),
    planning: persistReducer(planningPersistConfig, planningReducer),
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
