export interface AirportData {
    entityId: string;
    skyId: string;
    airportName: string;
}

export interface FlightCardProps {
    flight: {
      id: string;
      price: string;
      origin: string;
      destination: string;
      departure: string;
      arrival: string;
      duration: number;
      stops: number;
      airline: {
        name: string;
        logo: string;
      };
    };
  }

export interface FlightData {
    id: string;
    price: string;
    origin: string;
    destination: string;
    departure: string;
    arrival: string;
    duration: number;
    stops: number;
    airline: {
      name: string;
      logo: string;
    };
  }

interface FlightSearchLeg {
    origin: { displayCode: string };
    destination: { displayCode: string };
    departure: string;
    arrival: string;
    durationInMinutes: number;
    stopCount: number;
    carriers: { marketing: { name: string; logoUrl: string }[] };
}

export interface FlightSearchData {
    id: string;
    price: { formatted: string };
    legs: FlightSearchLeg[];
}

export interface FetchFlightProps {
  originSkyId: string;
  destinationSkyId: string;
  originEntityId: string;
  destinationEntityId: string;
  date: string;
  returnDate: string;
}