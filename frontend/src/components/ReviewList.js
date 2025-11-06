import React from 'react';
import './ReviewList.css';

function ReviewList({ reviews, currentUser, onEdit, onDelete }) {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`review-star ${i <= rating ? 'filled' : ''}`}>
          ★
        </span>
      );
    }
    return stars;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (reviews.length === 0) {
    return (
      <div className="no-reviews">
        <div className="no-reviews-icon">📝</div>
        <p>No reviews yet. Be the first to review!</p>
      </div>
    );
  }

  return (
    <div className="review-list">
      {reviews.map((review) => (
        <div key={review.id} className="review-item">
          <div className="review-header">
            <div className="review-user-info">
              <div className="user-avatar">
                {review.userName?.charAt(0).toUpperCase() || '?'}
              </div>
              <div>
                <div className="user-name">{review.userName || 'Anonymous'}</div>
                <div className="review-date">{formatDate(review.createdAt)}</div>
              </div>
            </div>
            
            {currentUser && currentUser.uid === review.userId && (
              <div className="review-actions">
                <button
                  className="btn-icon edit-btn"
                  onClick={() => onEdit(review)}
                  title="Edit review"
                >
                  ✏️
                </button>
                <button
                  className="btn-icon delete-btn"
                  onClick={() => onDelete(review.id)}
                  title="Delete review"
                >
                  🗑️
                </button>
              </div>
            )}
          </div>

          <div className="review-rating">
            {renderStars(review.rating)}
            <span className="rating-number">{review.rating}/5</span>
          </div>

          {review.comment && (
            <p className="review-comment">{review.comment}</p>
          )}

          {review.updatedAt !== review.createdAt && (
            <div className="review-edited">
              <small>Edited on {formatDate(review.updatedAt)}</small>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ReviewList;

