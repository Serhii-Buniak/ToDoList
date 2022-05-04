
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { AppDispatch } from "./action"
import AppState from "./state"

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector