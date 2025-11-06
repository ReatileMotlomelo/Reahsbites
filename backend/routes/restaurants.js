const express = require('express');
const router = express.Router();

// Mock restaurant data (since Yelp API requires business approval)
// In production, you would integrate with Yelp Fusion API or similar
const mockRestaurants = [
  {
    id: 'rest1',
    name: 'The Pink Bistro',
    cuisine: 'French',
    location: 'New York, NY',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500',
    rating: 4.5,
    priceRange: '$$$',
    description: 'Elegant French dining with a modern twist'
  },
  {
    id: 'rest2',
    name: 'Sakura Sushi House',
    cuisine: 'Japanese',
    location: 'Los Angeles, CA',
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=500',
    rating: 4.8,
    priceRange: '$$',
    description: 'Authentic Japanese sushi and cuisine'
  },
  {
    id: 'rest3',
    name: 'Bella Italia',
    cuisine: 'Italian',
    location: 'Chicago, IL',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500',
    rating: 4.3,
    priceRange: '$$',
    description: 'Traditional Italian recipes passed down through generations'
  },
  {
    id: 'rest4',
    name: 'Spice Garden',
    cuisine: 'Indian',
    location: 'San Francisco, CA',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500',
    rating: 4.6,
    priceRange: '$$',
    description: 'Aromatic Indian dishes with authentic spices'
  },
  {
    id: 'rest5',
    name: 'The Burger Joint',
    cuisine: 'American',
    location: 'Austin, TX',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500',
    rating: 4.4,
    priceRange: '$',
    description: 'Gourmet burgers and classic American comfort food'
  },
  {
    id: 'rest6',
    name: 'Dragon Palace',
    cuisine: 'Chinese',
    location: 'Seattle, WA',
    image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=500',
    rating: 4.2,
    priceRange: '$$',
    description: 'Authentic Chinese cuisine in an elegant setting'
  },
  {
    id: 'rest7',
    name: 'Taco Fiesta',
    cuisine: 'Mexican',
    location: 'Miami, FL',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500',
    rating: 4.7,
    priceRange: '$',
    description: 'Fresh and flavorful Mexican street food'
  },
  {
    id: 'rest8',
    name: 'Mediterranean Breeze',
    cuisine: 'Mediterranean',
    location: 'Boston, MA',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=500',
    rating: 4.5,
    priceRange: '$$$',
    description: 'Fresh Mediterranean flavors from Greece and beyond'
  }
];

// GET all restaurants
router.get('/', (req, res) => {
  try {
    const { cuisine, location } = req.query;
    let filteredRestaurants = mockRestaurants;
    
    if (cuisine) {
      filteredRestaurants = filteredRestaurants.filter(
        r => r.cuisine.toLowerCase() === cuisine.toLowerCase()
      );
    }
    
    if (location) {
      filteredRestaurants = filteredRestaurants.filter(
        r => r.location.toLowerCase().includes(location.toLowerCase())
      );
    }
    
    res.json({ results: filteredRestaurants, total: filteredRestaurants.length });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET restaurant by ID
router.get('/:id', (req, res) => {
  try {
    const restaurant = mockRestaurants.find(r => r.id === req.params.id);
    
    if (!restaurant) {
      return res.status(404).json({ error: 'Restaurant not found' });
    }
    
    res.json(restaurant);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// SEARCH restaurants
router.get('/search/query', (req, res) => {
  try {
    const query = req.query.q?.toLowerCase();
    
    if (!query) {
      return res.status(400).json({ error: 'Search query is required' });
    }
    
    const results = mockRestaurants.filter(r => 
      r.name.toLowerCase().includes(query) ||
      r.cuisine.toLowerCase().includes(query) ||
      r.description.toLowerCase().includes(query)
    );
    
    res.json({ results, total: results.length });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

