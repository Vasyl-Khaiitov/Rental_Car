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
import favoritesCarSlice from "./favoriteCar/slice";
import carSlice from "./car/slice";
import brandsSlice from "./brands/slice";

const favoritesPersistConfig = {
  key: "favorites",
  storage,
  whitelist: ["items"],
};

export const store = configureStore({
  reducer: {
    cars: carSlice,
    favoriteCar: persistReducer(favoritesPersistConfig, favoritesCarSlice),
    brands: brandsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
