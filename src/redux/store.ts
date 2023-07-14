import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./reducer";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: appReducer,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
