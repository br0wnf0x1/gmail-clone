import { configureStore } from "@reduxjs/toolkit";
import mailReducer from "../features/mailSlice";
import userReducer from "../features/userSlice";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import persistCombineReducers from "redux-persist/lib/persistCombineReducers";

const persistConfig = {
  key: "root",
  storage,
  // blacklist: ["user"],
};

const persistedReducer = persistCombineReducers(persistConfig, {
  mail: mailReducer,
  user: userReducer,
});

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
