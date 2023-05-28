import axios from 'axios';

const searchApi = axios.create({
  baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
  params: {
    limit: 5,
    language: 'es',
    access_token: 'pk.eyJ1IjoicmF5d2F5ZGF5IiwiYSI6ImNrb2Q4bW9jZzJqaGIyb3MyNXQxMmxnYjAifQ.iClpR862aSTbYa8aDRwvpg',
  }
});

export default searchApi;