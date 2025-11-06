import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Movies API
export const moviesAPI = {
  getPopular: (page = 1) => api.get(`/movies/popular?page=${page}`),
  getTrending: () => api.get('/movies/trending'),
  getTopRated: (page = 1) => api.get(`/movies/top-rated?page=${page}`),
  getById: (id) => api.get(`/movies/${id}`),
  search: (query) => api.get(`/movies/search/query?q=${query}`),
};

// Restaurants API
export const restaurantsAPI = {
  getAll: (filters = {}) => {
    const params = new URLSearchParams(filters);
    return api.get(`/restaurants?${params}`);
  },
  getById: (id) => api.get(`/restaurants/${id}`),
  search: (query) => api.get(`/restaurants/search/query?q=${query}`),
};

// Reviews API
export const reviewsAPI = {
  getAll: (filters = {}) => {
    const params = new URLSearchParams(filters);
    return api.get(`/reviews?${params}`);
  },
  getById: (id) => api.get(`/reviews/${id}`),
  create: (reviewData) => api.post('/reviews', reviewData),
  update: (id, reviewData) => api.put(`/reviews/${id}`, reviewData),
  delete: (id) => api.delete(`/reviews/${id}`),
};

export default api;

