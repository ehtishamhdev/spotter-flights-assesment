import { createSlice } from "@reduxjs/toolkit";

import { fetchFlights } from "../../services/flightService";
import { FlightData, FlightSearchData } from "../../shared/types";

interface FlightState {
  flights: FlightData[] | null;
  isFetching: boolean;
}

const initialState: FlightState = {
  flights: null,
  isFetching: false,
};

const flightsSlice = createSlice({
  name: "flights",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFlights.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(fetchFlights.fulfilled, (state, action) => {
        state.isFetching = false;
        state.flights = action.payload?.data.itineraries.map(
          (itinerary: FlightSearchData) => ({
            id: itinerary.id,
            price: itinerary.price.formatted,
            origin: itinerary.legs[0].origin.displayCode,
            destination: itinerary.legs[0].destination.displayCode,
            departure: itinerary.legs[0].departure,
            arrival: itinerary.legs[0].arrival,
            duration: itinerary.legs[0].durationInMinutes,
            stops: itinerary.legs[0].stopCount,
            airline: {
              name: itinerary.legs[0].carriers.marketing[0].name,
              logo: itinerary.legs[0].carriers.marketing[0].logoUrl,
            },
          })
        );
      })
      .addCase(fetchFlights.rejected, (state) => {
        state.isFetching = false;
      });
  },
});

export default flightsSlice.reducer;
