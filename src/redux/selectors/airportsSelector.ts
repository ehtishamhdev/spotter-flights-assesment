import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const selectAirportState = (state: RootState) => state.airports;

export const selectAirports = createSelector(
  selectAirportState,
  (airportState) => airportState.airports
);

export const selectIsLoading = createSelector(
  selectAirportState,
  (airportState) => airportState.isLoading
);
