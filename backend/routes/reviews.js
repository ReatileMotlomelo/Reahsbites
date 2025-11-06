const express = require('express');
const router = express.Router();
// const admin = require('firebase-admin');
// const db = admin.firestore();

// Temporary in-memory storage for reviews (replace with Firestore later)
let reviews = [
  {
    id: '1',
    userId: 'user1',
    userName: 'John Doe',
    itemId: '550', // Movie ID from TMDB
    itemType: 'movie',
    itemTitle: 'Fight Club',
    rating: 5,
    comment: 'An absolute masterpiece! Mind-bending and thought-provoking.',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: '2',
    userId: 'user2',
    userName: 'Jane Smith',
    itemId: '550',
    itemType: 'movie',
    itemTitle: 'Fight Club',
    rating: 4,
    comment: 'Great movie with an unexpected twist.',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

// GET all reviews
router.get('/', (req, res) => {
  try {
    const { itemId, itemType, userId } = req.query;
    
    let filteredReviews = reviews;
    
    if (itemId) {
      filteredReviews = filteredReviews.filter(r => r.itemId === itemId);
    }
    
    if (itemType) {
      filteredReviews = filteredReviews.filter(r => r.itemType === itemType);
    }
    
    if (userId) {
      filteredReviews = filteredReviews.filter(r => r.userId === userId);
    }
    
    res.json(filteredReviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET single review by ID
router.get('/:id', (req, res) => {
  try {
    const review = reviews.find(r => r.id === req.params.id);
    
    if (!review) {
      return res.status(404).json({ error: 'Review not found' });
    }
    
    res.json(review);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST create new review
router.post('/', (req, res) => {
  try {
    const { userId, userName, itemId, itemType, itemTitle, rating, comment } = req.body;
    
    // Validation
    if (!userId || !itemId || !itemType || !rating) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    
    if (rating < 1 || rating > 5) {
      return res.status(400).json({ error: 'Rating must be between 1 and 5' });
    }
    
    const newReview = {
      id: Date.now().toString(),
      userId,
      userName: userName || 'Anonymous',
      itemId,
      itemType,
      itemTitle,
      rating,
      comment: comment || '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    reviews.push(newReview);
    res.status(201).json(newReview);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT update review
router.put('/:id', (req, res) => {
  try {
    const reviewIndex = reviews.findIndex(r => r.id === req.params.id);
    
    if (reviewIndex === -1) {
      return res.status(404).json({ error: 'Review not found' });
    }
    
    const { rating, comment } = req.body;
    
    // Validation
    if (rating && (rating < 1 || rating > 5)) {
      return res.status(400).json({ error: 'Rating must be between 1 and 5' });
    }
    
    // Update only provided fields
    if (rating !== undefined) reviews[reviewIndex].rating = rating;
    if (comment !== undefined) reviews[reviewIndex].comment = comment;
    reviews[reviewIndex].updatedAt = new Date().toISOString();
    
    res.json(reviews[reviewIndex]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE review
router.delete('/:id', (req, res) => {
  try {
    const reviewIndex = reviews.findIndex(r => r.id === req.params.id);
    
    if (reviewIndex === -1) {
      return res.status(404).json({ error: 'Review not found' });
    }
    
    const deletedReview = reviews.splice(reviewIndex, 1)[0];
    res.json({ message: 'Review deleted successfully', review: deletedReview });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

