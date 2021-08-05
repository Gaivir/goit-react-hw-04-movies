import axios from 'axios';

axios.defaults.baseURL = `https://api.themoviedb.org/3`;
const API_KEY = `681186281f0908c0103f6be4e5dcc22b`;

const getTrendingMovie = async () => {
  const res = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return res.data.results;
};

const getMovieDetails = async id => {
  const res = await axios.get(`/movie/${id}?api_key=${API_KEY}`);
  return res.data;
};

const getMovieCast = async movieId => {
  const res = await axios.get(`/movie/${movieId}/credits?api_key=${API_KEY}`);
  return res.data.cast;
};

const getMovieRewiews = async movie_id => {
  const res = await axios.get(`/movie/${movie_id}/reviews?api_key=${API_KEY}&language=en-U`);
  return res.data.results;
};

const fetchShowSearch = async string => {
  const res = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${string}`,
  );
  return res.data.results;
};


export default {
  getTrendingMovie,
  getMovieDetails,
  getMovieCast,
  getMovieRewiews,
  fetchShowSearch,
};