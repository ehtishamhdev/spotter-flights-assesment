import { Container } from '@mui/material';
import Map from 'react-map-gl';


export const Mapbox = () => {
  return (
    <Container maxWidth="md" sx={{ textAlign: "center", mt: 6 }}>
      <Map
      initialViewState={{
        longitude: 74.3587,
        latitude: 31.5204,
        zoom: 5,
      }}
      style={{ width: "100%", height: 400, borderRadius: 2 }}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
    >
    </Map>
    </Container>
  );
};

