import React, { useState, useEffect } from 'react';
import './ReviewForm.css';

function ReviewForm({ onSubmit, initialData, onCancel }) {
  const [rating, setRating] = useState(initialData?.rating || 5);
  const [comment, setComment] = useState(initialData?.comment || '');
  const [hoveredRating, setHoveredRating] = useState(0);

  useEffect(() => {
    if (initialData) {
      setRating(initialData.rating);
      setComment(initialData.comment);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (rating < 1 || rating > 5) {
      alert('Please select a rating between 1 and 5');
      return;
    }

    onSubmit({ rating, comment });
    
    // Reset form if not editing
    if (!initialData) {
      setRating(5);
      setComment('');
    }
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`star ${i <= (hoveredRating || rating) ? 'filled' : ''}`}
          onClick={() => setRating(i)}
          onMouseEnter={() => setHoveredRating(i)}
          onMouseLeave={() => setHoveredRating(0)}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="review-form-container">
      <form onSubmit={handleSubmit} className="review-form">
        <div className="form-group">
          <label className="form-label">Your Rating</label>
          <div className="star-rating">
            {renderStars()}
            <span className="rating-text">{rating} / 5</span>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Your Review</label>
          <textarea
            className="form-control review-textarea"
            rows="5"
            placeholder="Share your thoughts..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            {initialData ? 'Update Review' : 'Submit Review'}
          </button>
          {onCancel && (
            <button type="button" className="btn btn-secondary ms-2" onClick={onCancel}>
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default ReviewForm;

