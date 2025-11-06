import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { moviesAPI, restaurantsAPI, reviewsAPI } from '../services/api';
import { auth } from '../firebase';
import ReviewForm from '../components/ReviewForm';
import ReviewList from '../components/ReviewList';
import './ReviewDetail.css';

function ReviewDetail() {
  const { type, id } = useParams();
  const [item, setItem] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [editingReview, setEditingReview] = useState(null);

  const fetchItemDetails = async () => {
    try {
      setLoading(true);

      if (type === 'movie') {
        const response = await moviesAPI.getById(id);
        setItem(response.data);
      } else {
        const response = await restaurantsAPI.getById(id);
        setItem(response.data);
      }

      setLoading(false);
    } catch (error) {
      console.error('Error fetching item details:', error);
      setLoading(false);
    }
  };

  const fetchReviews = async () => {
    try {
      const response = await reviewsAPI.getAll({ itemId: id, itemType: type });
      setReviews(response.data || []);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    fetchItemDetails();
    fetchReviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, id]);

  const handleReviewSubmit = async (reviewData) => {
    try {
      if (editingReview) {
        await reviewsAPI.update(editingReview.id, reviewData);
      } else {
        const newReview = {
          ...reviewData,
          userId: user.uid,
          userName: user.displayName || user.email,
          itemId: id,
          itemType: type,
          itemTitle: getItemTitle(),
        };
        await reviewsAPI.create(newReview);
      }
      
      setShowReviewForm(false);
      setEditingReview(null);
      fetchReviews();
    } catch (error) {
      console.error('Error submitting review:', error);
      alert('Failed to submit review. Please try again.');
    }
  };

  const handleEditReview = (review) => {
    setEditingReview(review);
    setShowReviewForm(true);
  };

  const handleDeleteReview = async (reviewId) => {
    if (window.confirm('Are you sure you want to delete this review?')) {
      try {
        await reviewsAPI.delete(reviewId);
        fetchReviews();
      } catch (error) {
        console.error('Error deleting review:', error);
        alert('Failed to delete review. Please try again.');
      }
    }
  };

  const getItemTitle = () => {
    if (!item) return '';
    return type === 'movie' ? (item.title || item.name) : item.name;
  };

  const getImageUrl = () => {
    if (!item) return '';
    if (type === 'movie') {
      return item.backdrop_path
        ? `https://image.tmdb.org/t/p/original${item.backdrop_path}`
        : `https://image.tmdb.org/t/p/w500${item.poster_path}`;
    }
    return item.image;
  };

  const getAverageRating = () => {
    if (reviews.length === 0) return 0;
    const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
    return (sum / reviews.length).toFixed(1);
  };

  if (loading) {
    return (
      <div className="loading-spinner">
        <div className="spinner"></div>
      </div>
    );
  }

  if (!item) {
    return (
      <div className="container text-center" style={{ padding: '100px 20px' }}>
        <h2>Item not found</h2>
      </div>
    );
  }

  return (
    <div className="review-detail-page">
      {/* Hero Section */}
      <div
        className="detail-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${getImageUrl()})`,
        }}
      >
        <div className="container">
          <div className="hero-content-detail">
            <h1 className="detail-title">{getItemTitle()}</h1>
            {type === 'movie' && item.tagline && (
              <p className="detail-tagline">"{item.tagline}"</p>
            )}
            {type === 'restaurant' && item.cuisine && (
              <p className="detail-cuisine">
                <span className="cuisine-badge">{item.cuisine}</span>
                {item.location && <span className="location-badge">📍 {item.location}</span>}
              </p>
            )}
            <div className="detail-rating">
              <span className="rating-stars">⭐ {getAverageRating()}</span>
              <span className="rating-count">({reviews.length} reviews)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container detail-content">
        <div className="row">
          <div className="col-lg-8">
            {/* Overview */}
            <section className="detail-section">
              <h2 className="section-heading">Overview</h2>
              <p className="overview-text">
                {type === 'movie' ? item.overview : item.description}
              </p>
              
              {type === 'movie' && (
                <div className="movie-info">
                  {item.release_date && (
                    <div className="info-item">
                      <strong>Release Date:</strong> {new Date(item.release_date).toLocaleDateString()}
                    </div>
                  )}
                  {item.runtime && (
                    <div className="info-item">
                      <strong>Runtime:</strong> {item.runtime} minutes
                    </div>
                  )}
                  {item.genres && (
                    <div className="info-item">
                      <strong>Genres:</strong> {item.genres.map(g => g.name).join(', ')}
                    </div>
                  )}
                </div>
              )}
              
              {type === 'restaurant' && (
                <div className="restaurant-info">
                  {item.priceRange && (
                    <div className="info-item">
                      <strong>Price Range:</strong> {item.priceRange}
                    </div>
                  )}
                </div>
              )}
            </section>

            {/* Reviews Section */}
            <section className="detail-section">
              <div className="section-header-detail">
                <h2 className="section-heading">Reviews</h2>
                {user && (
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      setShowReviewForm(!showReviewForm);
                      setEditingReview(null);
                    }}
                  >
                    {showReviewForm ? 'Cancel' : '✍️ Write a Review'}
                  </button>
                )}
              </div>

              {!user && (
                <div className="login-prompt">
                  <p>Please log in to write a review</p>
                </div>
              )}

              {showReviewForm && user && (
                <ReviewForm
                  onSubmit={handleReviewSubmit}
                  initialData={editingReview}
                  onCancel={() => {
                    setShowReviewForm(false);
                    setEditingReview(null);
                  }}
                />
              )}

              <ReviewList
                reviews={reviews}
                currentUser={user}
                onEdit={handleEditReview}
                onDelete={handleDeleteReview}
              />
            </section>
          </div>

          <div className="col-lg-4">
            {/* Sidebar */}
            <div className="sidebar-card">
              <img
                src={type === 'movie' 
                  ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                  : item.image
                }
                alt={getItemTitle()}
                className="sidebar-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewDetail;

