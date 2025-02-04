import React, { useEffect, useCallback } from "react";
import { useFormik } from "formik";
import {
  Container,
  TextField,
  Button,
  MenuItem,
  Box,
  IconButton,
  InputAdornment,
  CircularProgress,
} from "@mui/material";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import EventIcon from "@mui/icons-material/Event";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch } from "../redux/store";
import { fetchNearByAirports } from "../services/airportService";
import { selectAirports } from "../redux/selectors/airportsSelector";
import { AirportData } from "../shared/types";
import { fetchFlights } from "../services/flightService";
import { validationSchema } from "../schemas/flightSchema";

const FLIGHT_INITIAL_STATE = { entityId: "", skyId: "", airportName: "" };
const FROM_INITIAL_VALUE = {
  from: "",
  to: "",
  departure: "",
  returnDate: "",
}

export const FlightSearchBar: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const airports = useSelector(selectAirports);

  const findAirport = useCallback(
    (id: string): AirportData => {
      return (
        airports.find((airport) => airport.entityId === id) || FLIGHT_INITIAL_STATE
      );
    },
    [airports]
  );

  useEffect(() => {
    dispatch(fetchNearByAirports({ lat: "30.375320", lng: "69.345116" }));
  }, [dispatch]);

  
  const formik = useFormik({
    enableReinitialize: true,
    validateOnMount: true,
    initialValues: FROM_INITIAL_VALUE,
    validationSchema,
    onSubmit: (values) => {
      const fromAirport = findAirport(values.from);
      const toAirport = findAirport(values.to);

      dispatch(
        fetchFlights({
          originSkyId: fromAirport.skyId,
          originEntityId: fromAirport.entityId,
          destinationSkyId: toAirport.skyId,
          destinationEntityId: toAirport.entityId,
          date: values.departure,
          returnDate: values.returnDate,
        })
      ).finally(() => {formik.setSubmitting(false)});
    },
  });

  const swapLocations = () => {
    const temp = formik.values.from;
    formik.setFieldValue("from", formik.values.to);
    formik.setFieldValue("to", temp);
    formik.validateForm();
  };

  return (
    <Container maxWidth="md" sx={{ textAlign: "center" }}>
      <form onSubmit={formik.handleSubmit}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            p: 3,
            paddingBottom: 0,
            borderRadius: 2,
            boxShadow: 3,
            bgcolor: "background.paper",
          }}
        >
          <Box
            display="flex"
            gap={2}
            alignItems="center"
            sx={{
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <TextField
              select
              fullWidth
              label="From"
              name="from"
              value={formik.values.from}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.from && Boolean(formik.errors.from)}
              helperText={formik.touched.from && formik.errors.from}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FlightTakeoffIcon />
                  </InputAdornment>
                ),
              }}
            >
              {airports.map((airport) => (
                <MenuItem key={airport.skyId} value={airport.entityId}>
                  {airport.airportName}
                </MenuItem>
              ))}
            </TextField>

            <IconButton
              onClick={swapLocations}
              sx={{
                transform: { xs: "rotate(90deg)", sm: "rotate(0deg)" },
                transition: "transform 0.3s",
              }}
            >
              <SwapHorizIcon />
            </IconButton>

            <TextField
              select
              fullWidth
              label="To"
              name="to"
              value={formik.values.to}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.to && Boolean(formik.errors.to)}
              helperText={formik.touched.to && formik.errors.to}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FlightLandIcon />
                  </InputAdornment>
                ),
              }}
            >
              {airports.map((airport) => (
                <MenuItem key={airport.skyId} value={airport.entityId}>
                  {airport.airportName}
                </MenuItem>
              ))}
            </TextField>
          </Box>

          <Box
            display="flex"
            gap={2}
            sx={{
              mt: 2,
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <TextField
              fullWidth
              label="Departure Date"
              type="date"
              name="departure"
              value={formik.values.departure}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.departure && Boolean(formik.errors.departure)}
              helperText={formik.touched.departure && formik.errors.departure}
              InputLabelProps={{ shrink: true }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EventIcon />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              fullWidth
              label="Return Date"
              type="date"
              name="returnDate"
              value={formik.values.returnDate}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.returnDate && Boolean(formik.errors.returnDate)}
              helperText={formik.touched.returnDate && formik.errors.returnDate}
              InputLabelProps={{ shrink: true }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EventIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              startIcon={formik.isSubmitting ? <CircularProgress size={24} /> : <SearchIcon />}
              disabled={formik.isSubmitting}
              sx={{
              position: "relative",
              width: "max-content",
              alignSelf: "center",
              borderRadius: 20,
              padding: "5px 10px",
              top: "20px",
              bgcolor: formik.isSubmitting ? "grey.500" : "primary.main",
              "&:disabled": {
                bgcolor: "#6eafc4",
              },
              }}
            >
              {formik.isSubmitting ? "Fetching Flights" : "Search"}
            </Button>
        </Box>
      </form>
    </Container>
  );
};
