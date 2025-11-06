import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { moviesAPI, restaurantsAPI } from '../services/api';
import ItemCard from '../components/ItemCard';
import './Browse.css';

function Browse() {
  const { type } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState(type || 'movies');

  const fetchItems = async () => {
    try {
      setLoading(true);

      if (activeTab === 'movies') {
        const response = await moviesAPI.getPopular();
        setItems(response.data.results || []);
      } else {
        const response = await restaurantsAPI.getAll();
        setItems(response.data.results || []);
      }

      setLoading(false);
    } catch (error) {
      console.error('Error fetching items:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (type) {
      setActiveTab(type);
    }
  }, [type]);

  useEffect(() => {
    fetchItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      fetchItems();
      return;
    }

    try {
      setLoading(true);
      
      if (activeTab === 'movies') {
        const response = await moviesAPI.search(searchQuery);
        setItems(response.data.results || []);
      } else {
        const response = await restaurantsAPI.search(searchQuery);
        setItems(response.data.results || []);
      }
      
      setLoading(false);
    } catch (error) {
      console.error('Error searching:', error);
      setLoading(false);
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSearchQuery('');
  };

  return (
    <div className="browse-page">
      <div className="container">
        {/* Header */}
        <div className="browse-header">
          <h1 className="page-title">Browse {activeTab === 'movies' ? 'Movies' : 'Restaurants'}</h1>
          <p className="page-subtitle">
            Discover amazing {activeTab === 'movies' ? 'movies' : 'restaurants'} and share your reviews
          </p>
        </div>

        {/* Tabs */}
        <div className="browse-tabs">
          <button
            className={`tab-button ${activeTab === 'movies' ? 'active' : ''}`}
            onClick={() => handleTabChange('movies')}
          >
            🎬 Movies
          </button>
          <button
            className={`tab-button ${activeTab === 'restaurants' ? 'active' : ''}`}
            onClick={() => handleTabChange('restaurants')}
          >
            🍽️ Restaurants
          </button>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="search-form">
          <div className="search-input-group">
            <input
              type="text"
              className="search-input"
              placeholder={`Search ${activeTab}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="btn btn-primary search-button">
              🔍 Search
            </button>
          </div>
        </form>

        {/* Results */}
        {loading ? (
          <div className="loading-spinner">
            <div className="spinner"></div>
          </div>
        ) : (
          <>
            <div className="results-info">
              <p>{items.length} {activeTab} found</p>
            </div>
            <div className="row">
              {items.length > 0 ? (
                items.map((item) => (
                  <ItemCard key={item.id} item={item} type={activeTab === 'movies' ? 'movie' : 'restaurant'} />
                ))
              ) : (
                <div className="no-results">
                  <div className="no-results-icon">😕</div>
                  <h3>No results found</h3>
                  <p>Try adjusting your search or browse all {activeTab}</p>
                  <button className="btn btn-primary" onClick={fetchItems}>
                    Show All
                  </button>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Browse;

