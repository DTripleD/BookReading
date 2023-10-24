import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
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

export const store = configureStore({
  reducer: {
    auth: persistReducer<ReturnType<typeof authReducer>>(
      authPersistConfig,
      authReducer
    ),
    books: booksReducer,
    planning: planningReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
