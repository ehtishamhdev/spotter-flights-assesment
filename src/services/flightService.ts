import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface FetchFlightProps {
    originSkyId: string;
    destinationSkyId: string;
    originEntityId: string;
    destinationEntityId: string;
    date: string;
    returnDate: string;
}

export const fetchFlights = createAsyncThunk(
    "flights/fetchFlights",
    async ({ originSkyId, originEntityId, destinationSkyId, destinationEntityId, date, returnDate }: FetchFlightProps) => {
      const options = {
        method: "GET",
        url: `https://${import.meta.env.VITE_RAPID_API_HOST}/api/v1/flights/searchFlights`,
        params: { originEntityId, originSkyId, destinationEntityId, destinationSkyId, date, returnDate },
        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY as string,
          "X-RapidAPI-Host": import.meta.env.VITE_RAPID_API_HOST as string,
        },
      };
      const response = await axios.request(options);
      return response.data;
    }
  );    
