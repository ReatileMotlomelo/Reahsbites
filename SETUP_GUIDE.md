# ReahBites Setup Guide 🚀

This guide will help you set up and run the ReahBites Movie & Restaurant Review Platform on your local machine.

## Prerequisites

Before you begin, make sure you have the following installed:
- Node.js (v14 or higher)
- npm (comes with Node.js)
- A Firebase account (free tier is sufficient)
- A TMDB API key (free)

## Step 1: Get Your API Keys

### TMDB API Key
1. Go to [The Movie Database (TMDB)](https://www.themoviedb.org/)
2. Create a free account
3. Go to Settings → API
4. Request an API key (choose "Developer" option)
5. Fill out the form and you'll receive your API key

### Firebase Setup
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable Authentication:
   - Go to Authentication → Sign-in method
   - Enable "Email/Password" provider
4. Create a Firestore Database:
   - Go to Firestore Database
   - Create database (start in test mode for development)
5. Get your Firebase config:
   - Go to Project Settings → General
   - Scroll down to "Your apps"
   - Click on the web icon (</>)
   - Copy the config object

## Step 2: Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create a `.env` file (copy from `.env.example`):
   ```bash
   cp .env.example .env
   ```

3. Edit the `.env` file and add your credentials:
   ```
   PORT=5000
   TMDB_API_KEY=your_tmdb_api_key_here
   FIREBASE_PROJECT_ID=your_firebase_project_id
   FIREBASE_PRIVATE_KEY=your_firebase_private_key
   FIREBASE_CLIENT_EMAIL=your_firebase_client_email
   ```

   **Note:** For Firebase Admin SDK, you'll need to:
   - Go to Firebase Console → Project Settings → Service Accounts
   - Click "Generate new private key"
   - Download the JSON file
   - Extract the values for `project_id`, `private_key`, and `client_email`

4. The dependencies are already installed. If you need to reinstall:
   ```bash
   npm install
   ```

5. Start the backend server:
   ```bash
   npm run dev
   ```

   The server should start on `http://localhost:5000`

## Step 3: Frontend Setup

1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. The dependencies are already installed. If you need to reinstall:
   ```bash
   npm install
   ```

3. Update Firebase configuration:
   - Open `frontend/src/firebase.js`
   - Replace the placeholder values with your Firebase config:
   ```javascript
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_STORAGE_BUCKET",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID"
   };
   ```

4. Start the frontend development server:
   ```bash
   npm start
   ```

   The app should open automatically at `http://localhost:3000`

## Step 4: Test the Application

1. **Create an account:**
   - Click "Sign Up" in the navigation
   - Fill in your details
   - Create your account

2. **Browse movies:**
   - Click "Browse" → "Movies"
   - You should see popular movies from TMDB

3. **Browse restaurants:**
   - Click "Browse" → "Restaurants"
   - You should see the mock restaurant data

4. **Write a review:**
   - Click on any movie or restaurant
   - Click "Write a Review"
   - Rate and write your review
   - Submit

5. **View your profile:**
   - Click on "Profile" in the navigation
   - See all your reviews

## Troubleshooting

### Backend Issues

**Error: TMDB API not working**
- Make sure your TMDB API key is correct in `.env`
- Check if the API key is active (it may take a few minutes after creation)

**Error: Firebase Admin not initialized**
- Make sure you've uncommented the Firebase initialization code in `backend/server.js`
- Verify your Firebase credentials in `.env`

### Frontend Issues

**Error: Firebase not configured**
- Check `frontend/src/firebase.js` has correct credentials
- Make sure you've enabled Email/Password authentication in Firebase Console

**Error: Cannot connect to backend**
- Make sure the backend server is running on port 5000
- Check if `REACT_APP_API_URL` is set correctly (default: http://localhost:5000/api)

**CORS errors**
- The backend already has CORS enabled
- Make sure both frontend and backend are running

## Project Structure

```
ReahBites/
├── frontend/                 # React frontend
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   │   ├── Navbar.js
│   │   │   ├── Footer.js
│   │   │   ├── ItemCard.js
│   │   │   ├── ReviewForm.js
│   │   │   └── ReviewList.js
│   │   ├── pages/           # Page components
│   │   │   ├── Home.js
│   │   │   ├── Browse.js
│   │   │   ├── ReviewDetail.js
│   │   │   ├── Profile.js
│   │   │   ├── About.js
│   │   │   ├── Login.js
│   │   │   └── Signup.js
│   │   ├── services/        # API services
│   │   │   └── api.js
│   │   ├── firebase.js      # Firebase config
│   │   ├── App.js           # Main app component
│   │   └── index.js         # Entry point
│   └── package.json
├── backend/                 # Node.js backend
│   ├── routes/             # API routes
│   │   ├── movies.js
│   │   ├── restaurants.js
│   │   └── reviews.js
│   ├── server.js           # Express server
│   ├── .env                # Environment variables
│   └── package.json
└── README.md
```

## Features Implemented

✅ User Authentication (Sign up, Login, Logout)
✅ Browse Movies (from TMDB API)
✅ Browse Restaurants (mock data)
✅ Create Reviews
✅ Read Reviews
✅ Update Reviews
✅ Delete Reviews
✅ User Profile with review history
✅ Search functionality
✅ Responsive design
✅ Pinkish matte color palette
✅ Smooth animations and hover effects

## Next Steps (Optional Enhancements)

- [ ] Integrate real restaurant API (Yelp Fusion API)
- [ ] Add user favorites/bookmarks
- [ ] Implement review likes/helpful votes
- [ ] Add image upload for reviews
- [ ] Implement pagination for browse pages
- [ ] Add sorting options (by rating, date, etc.)
- [ ] Deploy to Firebase Hosting
- [ ] Set up Firebase Functions for backend

## Support

If you encounter any issues:
1. Check the console for error messages
2. Verify all API keys are correct
3. Make sure both servers are running
4. Check Firebase Console for authentication/database issues

Happy reviewing! 🎬🍽️

