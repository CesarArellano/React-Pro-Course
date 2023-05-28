import axios from 'axios';

const directionsApi = axios.create({
  baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
  params: {
    alternatives: false,
    geometries: 'geojson',
    overview: 'simplified',
    steps: false,
    language: 'es',
    access_token: 'pk.eyJ1IjoicmF5d2F5ZGF5IiwiYSI6ImNrb2Q4bW9jZzJqaGIyb3MyNXQxMmxnYjAifQ.iClpR862aSTbYa8aDRwvpg',
  }
});

export default directionsApi;