# 🚀 ReahBites Deployment Guide

This guide will help you deploy your ReahBites application to the internet for free!

---

## 📋 Deployment Overview

- **Frontend**: Firebase Hosting (Free, Fast CDN)
- **Backend**: Railway.app (Free tier with 500 hours/month)

---

## 🎯 Part 1: Deploy Backend to Railway

### Step 1: Create Railway Account

1. Go to https://railway.app/
2. Click **"Start a New Project"**
3. Sign up with GitHub (recommended) or email

### Step 2: Deploy Backend

1. Click **"Deploy from GitHub repo"**
2. Connect your GitHub account
3. Select your ReahBites repository
4. Railway will auto-detect it's a Node.js app

### Step 3: Configure Environment Variables

1. In Railway dashboard, click on your project
2. Go to **"Variables"** tab
3. Add these environment variables:
   ```
   PORT=5000
   TMDB_API_KEY=79531b06837fbf0a6040b32fa8fd0b52
   NODE_ENV=production
   ```

### Step 4: Set Root Directory

1. In Railway, go to **"Settings"**
2. Set **"Root Directory"** to `backend`
3. Set **"Start Command"** to `node server.js`

### Step 5: Get Your Backend URL

1. Railway will give you a URL like: `https://your-app.railway.app`
2. **Copy this URL** - you'll need it for the frontend!

---

## 🎨 Part 2: Deploy Frontend to Firebase Hosting

### Step 1: Install Firebase CLI

Open terminal and run:
```bash
npm install -g firebase-tools
```

### Step 2: Login to Firebase

```bash
firebase login
```

This will open your browser to sign in with Google.

### Step 3: Update Frontend API URL

1. Create `frontend/.env.production` file:
   ```
   REACT_APP_API_URL=https://your-app.railway.app
   ```
   Replace `your-app.railway.app` with your actual Railway URL!

### Step 4: Build the Frontend

```bash
cd frontend
npm run build
```

This creates an optimized production build in the `build` folder.

### Step 5: Initialize Firebase Hosting

```bash
firebase init hosting
```

Answer the prompts:
- **What do you want to use as your public directory?** `build`
- **Configure as a single-page app?** `Yes`
- **Set up automatic builds with GitHub?** `No` (for now)
- **Overwrite index.html?** `No`

### Step 6: Deploy to Firebase

```bash
firebase deploy --only hosting
```

### Step 7: Get Your Live URL

Firebase will give you a URL like:
```
https://reahbites.web.app
```

🎉 **Your app is now live!**

---

## 🔧 Alternative: Quick Deploy (If you don't want to use GitHub)

### Backend - Render.com (Alternative to Railway)

1. Go to https://render.com/
2. Sign up for free
3. Click **"New +"** → **"Web Service"**
4. Connect your GitHub or deploy from Git URL
5. Settings:
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
   - **Environment Variables**: Add TMDB_API_KEY
6. Click **"Create Web Service"**

### Frontend - Vercel (Alternative to Firebase)

1. Go to https://vercel.com/
2. Sign up with GitHub
3. Click **"New Project"**
4. Import your ReahBites repository
5. Settings:
   - **Framework Preset**: Create React App
   - **Root Directory**: `frontend`
   - **Environment Variables**: Add `REACT_APP_API_URL` with your backend URL
6. Click **"Deploy"**

---

## 📝 Post-Deployment Checklist

After deploying, test these features:

- [ ] Sign up / Login works
- [ ] Movies load from TMDB
- [ ] Restaurants display
- [ ] Can create reviews
- [ ] Can edit reviews
- [ ] Can delete reviews
- [ ] Profile page shows reviews
- [ ] Search works
- [ ] All pages load correctly

---

## 🐛 Troubleshooting

### Frontend can't connect to backend

**Problem**: CORS errors or "Failed to fetch"

**Solution**:
1. Make sure `REACT_APP_API_URL` in `.env.production` is correct
2. Rebuild frontend: `npm run build`
3. Redeploy: `firebase deploy --only hosting`

### Backend not responding

**Problem**: 503 or timeout errors

**Solution**:
1. Check Railway/Render logs
2. Make sure environment variables are set
3. Check that `PORT` is set correctly
4. Restart the service

### Movies not loading

**Problem**: TMDB API errors

**Solution**:
1. Verify TMDB_API_KEY is set in backend environment variables
2. Check backend logs for API errors
3. Test API key at https://www.themoviedb.org/

---

## 💰 Cost Breakdown

### Free Tier Limits:

**Railway**:
- 500 hours/month (enough for 24/7 if you have 1 service)
- $5 credit/month
- Free for hobby projects

**Firebase Hosting**:
- 10 GB storage
- 360 MB/day transfer
- Free SSL certificate
- Free for most small projects

**Render** (Alternative):
- Free tier available
- Apps sleep after 15 min of inactivity
- Wakes up on request (slower first load)

---

## 🔄 Updating Your Deployed App

### Update Backend:
1. Push changes to GitHub
2. Railway auto-deploys (if connected to GitHub)
3. Or manually redeploy in Railway dashboard

### Update Frontend:
1. Make your changes
2. Build: `npm run build`
3. Deploy: `firebase deploy --only hosting`

---

## 🎉 You're Done!

Share your live URL with friends and family!

Example URLs:
- **Frontend**: https://reahbites.web.app
- **Backend API**: https://reahbites-api.railway.app

---

## 📚 Additional Resources

- [Firebase Hosting Docs](https://firebase.google.com/docs/hosting)
- [Railway Docs](https://docs.railway.app/)
- [Render Docs](https://render.com/docs)
- [Vercel Docs](https://vercel.com/docs)

---

**Need help?** Check the troubleshooting section or refer to the platform documentation.

Happy deploying! 🚀

