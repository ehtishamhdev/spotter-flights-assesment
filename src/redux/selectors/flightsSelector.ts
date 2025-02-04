import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const selectFlightsState = (state: RootState) => state.flights;

export const selectFlights = createSelector(
  selectFlightsState,
  (flightsState) => flightsState.flights
);

export const selectIsLoading = createSelector(
  selectFlightsState,
  (flightsState) => flightsState.flights
);
