import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice.js";
// import bookReducer from "../features/book/bookSlice.js";

import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};
const rootreducer = combineReducers({
  auth: authSlice,
});

const persistedReducer = persistReducer(persistConfig, rootreducer);
export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
