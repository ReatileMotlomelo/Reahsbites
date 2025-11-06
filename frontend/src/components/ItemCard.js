import React from 'react';
import { Link } from 'react-router-dom';
import './ItemCard.css';

function ItemCard({ item, type }) {
  const getImageUrl = () => {
    if (type === 'movie') {
      return item.poster_path
        ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
        : 'https://via.placeholder.com/500x750?text=No+Image';
    } else {
      return item.image || 'https://via.placeholder.com/500x750?text=No+Image';
    }
  };

  const getTitle = () => {
    return type === 'movie' ? item.title || item.name : item.name;
  };

  const getRating = () => {
    if (type === 'movie') {
      return item.vote_average ? (item.vote_average / 2).toFixed(1) : 'N/A';
    } else {
      return item.rating || 'N/A';
    }
  };

  const getDescription = () => {
    if (type === 'movie') {
      return item.overview?.substring(0, 120) + '...' || 'No description available';
    } else {
      return item.description?.substring(0, 120) + '...' || 'No description available';
    }
  };

  return (
    <div className="col-md-4 col-lg-3 mb-4">
      <Link to={`/review/${type}/${item.id}`} className="item-card-link">
        <div className="card item-card">
          <div className="card-img-wrapper">
            <img
              src={getImageUrl()}
              className="card-img-top"
              alt={getTitle()}
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/500x750?text=No+Image';
              }}
            />
            <div className="rating-badge">
              <span className="star">⭐</span>
              <span className="rating-value">{getRating()}</span>
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title">{getTitle()}</h5>
            {type === 'restaurant' && item.cuisine && (
              <p className="cuisine-tag">{item.cuisine}</p>
            )}
            {type === 'movie' && item.release_date && (
              <p className="release-date">
                {new Date(item.release_date).getFullYear()}
              </p>
            )}
            <p className="card-text">{getDescription()}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ItemCard;

