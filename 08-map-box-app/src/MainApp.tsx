import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

import { PlacesProvider } from "./context"
import { HomeScreen } from "./screens/HomeScreen"

import './styles.css';
import { MapProvider } from './context/map/MapProvider';

mapboxgl.accessToken = 'pk.eyJ1IjoicmF5d2F5ZGF5IiwiYSI6ImNrcmZtZmk3ZDB3a2QycGxqMWJoZHJ3N3oifQ.i7a_5fZjpsDEuZvc-pivgQ';

export const MainApp = () => {
  return (
    <PlacesProvider>
      <MapProvider>
        <HomeScreen />
      </MapProvider>
    </PlacesProvider>
  )
}
