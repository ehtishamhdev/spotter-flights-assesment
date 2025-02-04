import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Grid,
  Avatar,
  Box,
} from "@mui/material";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

import { FlightCardProps } from "../shared/types";

export const FlightCard: React.FC<FlightCardProps> = ({ flight }) => {
  return (
    <Card variant="outlined" sx={{ marginBottom: 2, borderRadius: 3 }}>
      <CardContent>
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={3} sm={1}>
            <Avatar
              src={flight.airline.logo}
              alt={flight.airline.name}
              sx={{ width: 56, height: 56 }}
            />
          </Grid>

          <Grid item xs={7}>
            <Typography variant="h6" fontWeight="bold">
              {flight.airline.name}
            </Typography>
            <Box display="flex" alignItems="center">
              <FlightTakeoffIcon color="primary" />
              <Typography sx={{ ml: 1 }}>
                {flight.origin} → {flight.destination}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <AccessTimeIcon color="action" />
              <Typography sx={{ ml: 1 }}>
                {new Date(flight.departure).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}{" "}
                -{" "}
                {new Date(flight.arrival).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </Typography>
            </Box>
            <Typography color="textSecondary">
              Duration: {Math.floor(flight.duration / 60)}h {flight.duration % 60}m
            </Typography>
            <Typography color={flight.stops === 0 ? "green" : "orange"}>
              {flight.stops === 0 ? "Direct" : `${flight.stops} Stop(s)`}
            </Typography>
          </Grid>

          <Grid item xs={3} textAlign="right">
            <Typography variant="h6" fontWeight="bold">
              <AttachMoneyIcon fontSize="small" />
              {flight.price}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>

      <CardActions>
        <Button variant="contained" color="primary" fullWidth>
          Book Now
        </Button>
      </CardActions>
    </Card>
  );
};

