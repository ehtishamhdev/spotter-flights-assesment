import { configureStore } from "@reduxjs/toolkit";
import flightsReducer from "./slices/flightsSlice";
import airportReducer from "./slices/airportSlice";

export const store = configureStore({
  reducer: {
    flights: flightsReducer,
    airports: airportReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
