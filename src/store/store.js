import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import layoutReducer from "./layout/layoutSlice";

import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const authPersistConfig = {
  key: "auth",
  storage,
  blacklist: [],
};

const layoutPersistConfig = {
  key: "layout",
  storage,
  blacklist: [],
};

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    layout: persistReducer(layoutPersistConfig, layoutReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

  devTools: process.env.NODE_ENV === "development",
});
const persistor = persistStore(store);

// eslint-disable-next-line
export default { store, persistor };
