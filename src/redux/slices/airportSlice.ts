import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { AirportData } from "../../shared/types";
import baseService from "../../services/baseService";

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

export const fetchNearByAirports = createAsyncThunk(
  "flights/fetchAirports",
  async ({ lat, lng }: { lat: string; lng: string }) => {
    const response = await baseService.get('/getNearByAirports', { params: { lat, lng } });
    return response.data;
  }
);    

export default airportSlice.reducer;
