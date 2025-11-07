const express = require('express');
const router = express.Router();
const axios = require('axios');

const TMDB_API_KEY = process.env.TMDB_API_KEY || 'demo_key';
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

// Debug: Log API key status (first 5 chars only for security)
console.log('TMDB API Key loaded:', TMDB_API_KEY ? `${TMDB_API_KEY.substring(0, 5)}...` : 'NOT SET');

// GET popular movies
router.get('/popular', async (req, res) => {
  try {
    const page = req.query.page || 1;
    const response = await axios.get(`${TMDB_BASE_URL}/movie/popular`, {
      params: {
        api_key: TMDB_API_KEY,
        page
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching popular movies:', error.message);
    console.error('Error details:', error.response?.data || error);
    res.status(500).json({ error: 'Failed to fetch popular movies' });
  }
});

// GET trending movies
router.get('/trending', async (req, res) => {
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/trending/movie/week`, {
      params: {
        api_key: TMDB_API_KEY
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching trending movies:', error.message);
    res.status(500).json({ error: 'Failed to fetch trending movies' });
  }
});

// GET top rated movies
router.get('/top-rated', async (req, res) => {
  try {
    const page = req.query.page || 1;
    const response = await axios.get(`${TMDB_BASE_URL}/movie/top_rated`, {
      params: {
        api_key: TMDB_API_KEY,
        page
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching top rated movies:', error.message);
    res.status(500).json({ error: 'Failed to fetch top rated movies' });
  }
});

// GET movie by ID
router.get('/:id', async (req, res) => {
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/movie/${req.params.id}`, {
      params: {
        api_key: TMDB_API_KEY
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching movie details:', error.message);
    res.status(500).json({ error: 'Failed to fetch movie details' });
  }
});

// SEARCH movies
router.get('/search/query', async (req, res) => {
  try {
    const query = req.query.q;
    if (!query) {
      return res.status(400).json({ error: 'Search query is required' });
    }
    
    const response = await axios.get(`${TMDB_BASE_URL}/search/movie`, {
      params: {
        api_key: TMDB_API_KEY,
        query
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error searching movies:', error.message);
    res.status(500).json({ error: 'Failed to search movies' });
  }
});

module.exports = router;

