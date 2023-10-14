import axios from 'axios';

const API_KEY = '1e380c5eeff8711da34762a498fc6761';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const fetchTrendingMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
  );
  return response.data;
};

export const fetchMoviesByQuery = async (query, page = 1) => {
  const response = await axios.get(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
  );
  return response.data;
};

export const fetchMoviesById = async movieId => {
  const response = await axios.get(
    `${BASE_URL}search/movie/${movieId}?api_key=${API_KEY}`
  );
  return response.data;
};

export const fetchMoviesByCredits = async movieId => {
  const response = await axios.get(
    `${BASE_URL}search/movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return response.data;
};

export const fetchMoviesByReviews = async movieId => {
  const response = await axios.get(
    `${BASE_URL}search/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  return response.data;
};
