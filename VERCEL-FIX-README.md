# Quick Fix for Vercel 404 Error

## The Problem
You're getting "404: NOT_FOUND" on `/admin/dashboard` because:
1. The API proxy wasn't configured for production
2. Environment variable `NEXT_PUBLIC_API_URL` was missing

## The Solution (Updated Code)

### ✅ Changes Made:
1. **next-app/next.config.js** - Updated proxy to use environment variable in production
2. **next-app/app/lib/config.js** - Simplified to always use `/api` (proxy handles routing)
3. **vercel.json** - Added Vercel build configuration
4. **VERCEL-DEPLOYMENT.md** - Complete deployment guide

## 🚨 IMPORTANT: Add This Environment Variable in Vercel

Go to your Vercel project:
1. **Settings** → **Environment Variables**
2. Add this variable:
   ```
   Name: NEXT_PUBLIC_API_URL
   Value: https://your-backend-url.com/api
   ```
   (Replace with your actual backend URL)

3. **Redeploy** the project

## Where to Deploy Backend?

### Option 1: Railway (Easiest - Free)
```
1. Go to railway.app
2. New Project → Deploy backend folder
3. Add environment variables (DB, JWT, SMTP)
4. Copy the Railway URL: https://xxx.railway.app
5. In Vercel, set: NEXT_PUBLIC_API_URL=https://xxx.railway.app/api
```

### Option 2: Render
```
1. Go to render.com
2. New Web Service → Select backend folder
3. Start command: node server.js
4. Copy Render URL: https://xxx.onrender.com
5. In Vercel, set: NEXT_PUBLIC_API_URL=https://xxx.onrender.com/api
```

## Backend CORS Update

Update your backend `server.js` to allow Vercel domain:

```javascript
const allowedOrigins = [
  'https://your-app.vercel.app',  // Add your Vercel URL
  'http://localhost:3000',
  'http://localhost:3001'
];
```

## Test After Fix

1. Redeploy on Vercel (after adding env var)
2. Wait for build to complete
3. Visit: `https://your-app.vercel.app/admin/login`
4. Login should work and dashboard loads

---

## All Files Updated:
- ✅ next-app/next.config.js
- ✅ next-app/app/lib/config.js
- ✅ vercel.json (new)
- ✅ VERCEL-DEPLOYMENT.md (new)

**Changes pushed to:** https://github.com/alexelgato61-design/finnaly-works-of-iptv-website-ready-to-vercal
