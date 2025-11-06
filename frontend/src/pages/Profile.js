import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { reviewsAPI } from '../services/api';
import './Profile.css';

function Profile() {
  const [user, setUser] = useState(null);
  const [userReviews, setUserReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        fetchUserReviews(currentUser.uid);
      } else {
        navigate('/login');
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const fetchUserReviews = async (userId) => {
    try {
      setLoading(true);
      const response = await reviewsAPI.getAll({ userId });
      setUserReviews(response.data || []);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching user reviews:', error);
      setLoading(false);
    }
  };

  const renderStars = (rating) => {
    return '⭐'.repeat(rating);
  };

  if (loading) {
    return (
      <div className="loading-spinner">
        <div className="spinner"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="profile-page">
      <div className="container">
        {/* Profile Header */}
        <div className="profile-header">
          <div className="profile-avatar">
            {user.displayName?.charAt(0).toUpperCase() || user.email?.charAt(0).toUpperCase()}
          </div>
          <div className="profile-info">
            <h1 className="profile-name">{user.displayName || 'User'}</h1>
            <p className="profile-email">{user.email}</p>
            <div className="profile-stats">
              <div className="stat-item">
                <span className="stat-number">{userReviews.length}</span>
                <span className="stat-label">Reviews</span>
              </div>
            </div>
          </div>
        </div>

        {/* User Reviews */}
        <div className="profile-section">
          <h2 className="section-title">My Reviews</h2>
          
          {userReviews.length === 0 ? (
            <div className="no-reviews-profile">
              <div className="no-reviews-icon">📝</div>
              <p>You haven't written any reviews yet</p>
              <button className="btn btn-primary" onClick={() => navigate('/browse')}>
                Start Browsing
              </button>
            </div>
          ) : (
            <div className="reviews-grid">
              {userReviews.map((review) => (
                <div key={review.id} className="review-card-profile">
                  <div className="review-card-header">
                    <h3 className="review-item-title">{review.itemTitle}</h3>
                    <span className="review-type-badge">
                      {review.itemType === 'movie' ? '🎬' : '🍽️'}
                    </span>
                  </div>
                  <div className="review-rating-profile">
                    {renderStars(review.rating)}
                    <span className="rating-text-profile">{review.rating}/5</span>
                  </div>
                  {review.comment && (
                    <p className="review-comment-profile">{review.comment}</p>
                  )}
                  <div className="review-date-profile">
                    {new Date(review.createdAt).toLocaleDateString()}
                  </div>
                  <button
                    className="btn btn-sm btn-outline"
                    onClick={() => navigate(`/review/${review.itemType}/${review.itemId}`)}
                  >
                    View Details
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;

