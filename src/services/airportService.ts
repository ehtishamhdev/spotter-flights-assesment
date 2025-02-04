import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchNearByAirports = createAsyncThunk(
    "flights/fetchAirports",
    async ({ lat, lng }: { lat: string; lng: string }) => {
      const options = {
        method: "GET",
        url: `https://${import.meta.env.VITE_RAPID_API_HOST}/api/v1/flights/getNearByAirports?lat=${lat}&lng=${lng}`,
        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY as string,
          "X-RapidAPI-Host": import.meta.env.VITE_RAPID_API_HOST as string,
        },
      };
      const response = await axios.request(options);
      return response.data;
    }
  );    