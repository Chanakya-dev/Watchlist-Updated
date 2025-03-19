import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    api_key: import.meta.env.VITE_TMDB_API_KEY, 
  },
});

export const getPopularMovies = () => api.get('/movie/popular');
export const getTrendingMovies = () => api.get('/trending/movie/day');

export default api;
