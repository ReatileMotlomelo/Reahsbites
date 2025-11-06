import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { moviesAPI, restaurantsAPI } from '../services/api';
import ItemCard from '../components/ItemCard';
import './Home.css';

function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [topRestaurants, setTopRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHomeData();
  }, []);

  const fetchHomeData = async () => {
    try {
      setLoading(true);
      
      // Fetch trending movies
      const moviesResponse = await moviesAPI.getTrending();
      setTrendingMovies(moviesResponse.data.results?.slice(0, 4) || []);
      
      // Fetch top restaurants
      const restaurantsResponse = await restaurantsAPI.getAll();
      const sortedRestaurants = restaurantsResponse.data.results
        ?.sort((a, b) => b.rating - a.rating)
        .slice(0, 4) || [];
      setTopRestaurants(sortedRestaurants);
      
      setLoading(false);
    } catch (error) {
      console.error('Error fetching home data:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="loading-spinner">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to ReahBites</h1>
          <p className="hero-subtitle">
            Discover, Review, and Share Your Favorite Movies & Restaurants
          </p>
          <div className="hero-buttons">
            <Link to="/browse/movies">
              <button className="btn btn-primary btn-lg">
                🎬 Browse Movies
              </button>
            </Link>
            <Link to="/browse/restaurants">
              <button className="btn btn-secondary btn-lg ms-3">
                🍽️ Browse Restaurants
              </button>
            </Link>
          </div>
        </div>
        <div className="hero-decoration">
          <div className="floating-emoji emoji-1">🍿</div>
          <div className="floating-emoji emoji-2">🎥</div>
          <div className="floating-emoji emoji-3">🍕</div>
          <div className="floating-emoji emoji-4">⭐</div>
        </div>
      </section>

      {/* Trending Movies Section */}
      <section className="content-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">🔥 Trending Movies</h2>
            <Link to="/browse/movies" className="view-all-link">
              View All →
            </Link>
          </div>
          <div className="row">
            {trendingMovies.map((movie) => (
              <ItemCard key={movie.id} item={movie} type="movie" />
            ))}
          </div>
        </div>
      </section>

      {/* Top Restaurants Section */}
      <section className="content-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">⭐ Top Rated Restaurants</h2>
            <Link to="/browse/restaurants" className="view-all-link">
              View All →
            </Link>
          </div>
          <div className="row">
            {topRestaurants.map((restaurant) => (
              <ItemCard key={restaurant.id} item={restaurant} type="restaurant" />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title text-center mb-5">Why Choose ReahBites?</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="feature-card">
                <div className="feature-icon">📝</div>
                <h3>Easy Reviews</h3>
                <p>Share your thoughts and experiences with our simple review system</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="feature-card">
                <div className="feature-icon">🔍</div>
                <h3>Smart Search</h3>
                <p>Find exactly what you're looking for with our powerful search</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="feature-card">
                <div className="feature-icon">👥</div>
                <h3>Community</h3>
                <p>Join a community of food and movie enthusiasts</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

