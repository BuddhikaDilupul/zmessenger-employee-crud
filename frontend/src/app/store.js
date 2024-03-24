import { combineReducers, configureStore } from "@reduxjs/toolkit";
import alertReducer from "./features/AlertSlice";

const reducer = combineReducers({
  alert: alertReducer,
});

const store = configureStore({
  reducer: reducer,
});

export const RootState = store.getState;
export const AppDispatch = store.dispatch;

export default store;
