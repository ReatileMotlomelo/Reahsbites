# ReahBites 🍿🍽️

A modern Movie & Restaurant Review Platform where users can browse, rate, and review their favorite movies and restaurants.

## Features

- 🎬 **Movie Reviews**: Browse popular movies from TMDB and share your thoughts
- 🍴 **Restaurant Reviews**: Discover and review restaurants
- ⭐ **Rating System**: Rate movies and restaurants on a 1-5 star scale
- 👤 **User Authentication**: Secure sign up and login with Firebase Auth
- 📝 **CRUD Operations**: Create, read, update, and delete your reviews
- 🔍 **Search & Filter**: Find movies and restaurants easily
- 📱 **Responsive Design**: Beautiful UI with soft pinkish matte color palette
- ✨ **Smooth Animations**: Engaging hover effects and transitions

## Tech Stack

### Frontend
- React
- React Router
- Bootstrap
- CSS3 with custom animations
- Firebase Authentication

### Backend
- Node.js
- Express
- Firebase Firestore
- TMDB API (The Movie Database)

## Project Structure

```
ReahBites/
├── frontend/          # React frontend application
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── services/      # API services
│   │   └── styles/        # CSS files
│   └── public/
├── backend/           # Node.js backend API
│   ├── routes/        # API routes
│   ├── server.js      # Express server
│   └── package.json
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Firebase account
- TMDB API key

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ReahBites
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```

3. **Configure Environment Variables**
   - Copy `.env.example` to `.env`
   - Add your TMDB API key
   - Add your Firebase credentials

4. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   ```

5. **Firebase Configuration**
   - Create a Firebase project
   - Enable Authentication (Email/Password)
   - Create a Firestore database
   - Add your Firebase config to the frontend

### Running the Application

**Option 1: Quick Start (Windows)**
```bash
start.bat
```
This will start both backend and frontend servers automatically.

**Option 2: Manual Start**

1. **Start the Backend Server**
   ```bash
   cd backend
   npm run dev
   ```
   Server runs on `http://localhost:5000`

2. **Start the Frontend** (in a new terminal)
   ```bash
   cd frontend
   npm start
   ```
   App runs on `http://localhost:3000`

For detailed setup instructions, see [SETUP_GUIDE.md](SETUP_GUIDE.md)

## API Endpoints

### Reviews
- `GET /api/reviews` - Get all reviews
- `GET /api/reviews/:id` - Get review by ID
- `POST /api/reviews` - Create new review
- `PUT /api/reviews/:id` - Update review
- `DELETE /api/reviews/:id` - Delete review

### Movies
- `GET /api/movies/popular` - Get popular movies
- `GET /api/movies/trending` - Get trending movies
- `GET /api/movies/top-rated` - Get top rated movies
- `GET /api/movies/:id` - Get movie details
- `GET /api/movies/search/query?q=` - Search movies

### Restaurants
- `GET /api/restaurants` - Get all restaurants
- `GET /api/restaurants/:id` - Get restaurant by ID
- `GET /api/restaurants/search/query?q=` - Search restaurants

## Pages

1. **Home** - Overview with trending content
2. **Browse** - Explore movies and restaurants
3. **Review** - Detailed view with reviews
4. **Profile** - User reviews and settings
5. **About** - Platform information

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Acknowledgments

- Movie data provided by [The Movie Database (TMDB)](https://www.themoviedb.org/)
- Icons and images from Unsplash
- Built with ❤️ for food and movie lovers

