import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { theme } from "./slices";

const themePersistConfig = {
  key: "theme",
  storage,
  whitelist: ["theme"],
};

const store = configureStore({
  reducer: {
    theme: persistReducer<ReturnType<typeof theme>>(themePersistConfig, theme),
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);

export default store;
