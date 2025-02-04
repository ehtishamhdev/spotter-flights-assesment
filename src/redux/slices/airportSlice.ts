import { createSlice } from "@reduxjs/toolkit";

import { fetchNearByAirports } from "../../services/airportService";
import { AirportData } from "../../shared/types";

interface AirportState {
  airports: AirportData[],
  isLoading: boolean,
}

const initialState: AirportState = {
  airports: [],
  isLoading: false,
};

const airportSlice = createSlice({
  name: "airports",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNearByAirports.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchNearByAirports.fulfilled, (state, action) => {
        state.isLoading = false;
        const airports: AirportData[] = [];
        if (action.payload?.data?.nearby) {
            action.payload?.data.nearby.forEach((airport: { navigation: { entityId: string, relevantFlightParams: { flightPlaceType: string, skyId: string } }, presentation: { title: string } }) => {
                if (airport.navigation?.relevantFlightParams?.flightPlaceType === "AIRPORT") {
                    airports.push({
                        entityId: airport.navigation.entityId,
                        skyId: airport.navigation.relevantFlightParams.skyId,
                        airportName: airport.presentation.title.trim(),
                    });
                }
            });
        }
    
        state.airports = airports;
      })
      .addCase(fetchNearByAirports.rejected, (state) => {
        state.isLoading = false;
      });
  },
});


export default airportSlice.reducer;
