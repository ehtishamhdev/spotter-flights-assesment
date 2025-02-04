import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import { selectFlights } from "../redux/selectors/flightsSelector";
import { Typography } from "@mui/material";
import { FlightSearchBar } from "./FlightsSearchBar";
import { FlightCard } from "./FlightCard";
import { Mapbox } from "./MapBox";


export const Dashboard: React.FC = () => {
  const flights = useSelector(selectFlights);

  return (
      <Container>
        <Box
          sx={{
            backgroundImage:
              "url(https://www.gstatic.com/travel-frontend/animation/hero/flights_nc_4.svg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "20vh",
            width: "100%",
          }}
        />
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            fontFamily:
              '"Google Sans Display", Roboto, "Helvetica Neue", Arial, sans-serif',
            fontSize: "56px",
            fontWeight: 400,
            letterSpacing: "0px",
            lineHeight: "64px",
            color: "var(--te8f1ea4d4928be48)",
            textAlign: "center",
          }}
        >
          Flights
        </Typography>
        <Box py={4}>
          <FlightSearchBar />
          {flights?.length ? (
            <Container maxWidth="md">
              <Typography
                variant="h4"
                fontWeight="bold"
                textAlign="center"
                mt={5}
              >
                Available Flights
              </Typography>
              {flights.map((flight) => (
                <FlightCard key={`flight${flight.id}`} flight={flight} />
              ))}
            </Container>
          ) : (
            <Mapbox />
          )}
        </Box>
      </Container>
  );
}
