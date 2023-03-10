import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppState } from "../core/appState";
import type { AppDispatch } from "./store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
// export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
