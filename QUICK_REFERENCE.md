# 🚀 ReahBites - Quick Reference Guide

## 📋 Daily Commands

### **Start the App**
```bash
# Option 1: Use the batch file (Windows)
start.bat

# Option 2: Manual start
# Terminal 1 - Backend
cd backend
node server.js

# Terminal 2 - Frontend
cd frontend
npm start
```

### **Stop the App**
- Press `Ctrl + C` in both terminals
- Or close the terminal windows

---

## 🌐 URLs

- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:5000
- **API Docs:** http://localhost:5000/api

---

## 🔑 Environment Variables

### **Backend** (`backend/.env`)
```env
PORT=5000
TMDB_API_KEY=79531b06837fbf0a6040b32fa8fd0b52
```

### **Frontend** (Firebase config in `frontend/src/firebase.js`)
Already configured with your Firebase credentials.

---

## 📡 API Endpoints

### **Movies**
- `GET /api/movies/popular` - Popular movies
- `GET /api/movies/trending` - Trending movies
- `GET /api/movies/top-rated` - Top rated movies
- `GET /api/movies/:id` - Movie details
- `GET /api/movies/search?query=term` - Search movies

### **Restaurants**
- `GET /api/restaurants` - All restaurants
- `GET /api/restaurants/:id` - Restaurant details
- `GET /api/restaurants/search?query=term` - Search restaurants

### **Reviews**
- `GET /api/reviews?itemId=123&type=movie` - Get reviews
- `POST /api/reviews` - Create review
- `PUT /api/reviews/:id` - Update review
- `DELETE /api/reviews/:id` - Delete review

---

## 🎨 New UI Components

### **Toast Notifications**
```javascript
import Toast from './components/Toast';

<Toast
  message="Success!"
  type="success"  // success, error, info, warning
  onClose={() => setToast(null)}
/>
```

### **Loading Skeletons**
```javascript
import LoadingSkeleton from './components/LoadingSkeleton';

<LoadingSkeleton type="card" count={6} />
// Types: card, list, detail
```

### **Error Messages**
```javascript
import ErrorMessage from './components/ErrorMessage';

<ErrorMessage
  message="Something went wrong"
  type="error"
  onRetry={retryFunction}
/>
```

---

## 🚀 Deployment

### **Quick Deploy**
```bash
# 1. Build frontend
cd frontend
npm run build

# 2. Deploy to Firebase
firebase deploy --only hosting
```

**Full instructions:** See `DEPLOYMENT_GUIDE.md`

---

## 🐛 Troubleshooting

### **Port Already in Use**
```bash
# Kill process on port 5000 (backend)
npx kill-port 5000

# Kill process on port 3000 (frontend)
npx kill-port 3000
```

### **Firebase Auth Not Working**
- Check `frontend/src/firebase.js` has correct config
- Verify Firebase Authentication is enabled in console

### **Movies Not Loading**
- Check TMDB API key in `backend/.env`
- Verify backend is running on port 5000
- Check browser console for errors

### **CORS Errors**
- Make sure backend is running
- Check `backend/server.js` has CORS enabled
- Verify frontend is calling correct API URL

---

## 📁 Important Files

### **Configuration**
- `backend/.env` - Backend environment variables
- `frontend/src/firebase.js` - Firebase config
- `frontend/package.json` - Frontend dependencies
- `backend/package.json` - Backend dependencies

### **Main Components**
- `frontend/src/App.js` - Main app component
- `frontend/src/components/Navbar.js` - Navigation
- `frontend/src/pages/Browse.js` - Browse page
- `backend/server.js` - Backend server

### **Documentation**
- `README.md` - Project overview
- `SETUP_GUIDE.md` - Setup instructions
- `DEPLOYMENT_GUIDE.md` - Deployment guide
- `UI_IMPROVEMENTS.md` - UI components guide
- `COMPLETION_SUMMARY.md` - Project summary

---

## 🎯 Common Tasks

### **Add a New Page**
1. Create `frontend/src/pages/NewPage.js`
2. Create `frontend/src/pages/NewPage.css`
3. Add route in `frontend/src/App.js`
4. Add link in `frontend/src/components/Navbar.js`

### **Add a New API Endpoint**
1. Create route in `backend/routes/`
2. Import in `backend/server.js`
3. Use in `backend/server.js`: `app.use('/api/endpoint', route)`

### **Update Styles**
- Global styles: `frontend/src/App.css`
- Component styles: `frontend/src/components/ComponentName.css`
- Page styles: `frontend/src/pages/PageName.css`

---

## 🔄 Git Commands

### **Save Your Work**
```bash
git add .
git commit -m "Your message"
git push
```

### **Create a Branch**
```bash
git checkout -b feature-name
```

### **Merge Changes**
```bash
git checkout main
git merge feature-name
```

---

## 📊 Testing Checklist

- [ ] Sign up with new account
- [ ] Log in with existing account
- [ ] Browse movies (should see TMDB data)
- [ ] Browse restaurants (should see 8 restaurants)
- [ ] Search for movies
- [ ] Search for restaurants
- [ ] Click on a movie/restaurant
- [ ] Write a review
- [ ] Edit your review
- [ ] Delete your review
- [ ] View your profile
- [ ] Log out

---

## 💡 Quick Tips

### **Faster Development**
- Use React DevTools browser extension
- Enable hot reload (already configured)
- Use browser console for debugging

### **Code Quality**
- Run `npm run build` to check for errors
- Fix ESLint warnings as they appear
- Keep components small and focused

### **Performance**
- Optimize images before uploading
- Use lazy loading for routes
- Minimize API calls

---

## 📞 Need Help?

### **Check These First:**
1. Is backend running? (Terminal 1)
2. Is frontend running? (Terminal 2)
3. Any errors in browser console?
4. Any errors in terminal?

### **Common Solutions:**
- Restart both servers
- Clear browser cache
- Check environment variables
- Verify API keys are correct

---

## 🎉 Quick Wins

### **Impress Your Friends:**
1. Deploy to Firebase (10 min)
2. Share the live URL
3. Show off the smooth animations
4. Demonstrate the review system

### **Portfolio Ready:**
1. Add screenshots to README
2. Deploy online
3. Add to GitHub
4. Write a blog post about it

---

## 📚 Learn More

### **React**
- [React Docs](https://react.dev/)
- [React Router](https://reactrouter.com/)

### **Firebase**
- [Firebase Docs](https://firebase.google.com/docs)
- [Firebase Auth](https://firebase.google.com/docs/auth)

### **APIs**
- [TMDB API](https://www.themoviedb.org/documentation/api)
- [Express.js](https://expressjs.com/)

---

**Keep this file handy for quick reference!** 📌

*Last updated: 2024*

