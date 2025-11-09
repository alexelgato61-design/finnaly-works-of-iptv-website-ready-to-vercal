# IPTV Website - Vercel Deployment Guide

## 🚀 Quick Deploy to Vercel

### Prerequisites
1. GitHub account with this repository
2. Vercel account (free tier works)
3. Backend API deployed and accessible

### Deployment Steps

#### 1. Import to Vercel
1. Go to https://vercel.com/new
2. Import your repository: `alexelgato61-design/finnaly-works-of-iptv-website-ready-to-vercal`
3. Select `next-app` as the root directory

#### 2. Configure Build Settings
- **Framework Preset:** Next.js
- **Root Directory:** `next-app`
- **Build Command:** `npm run build`
- **Output Directory:** `.next`
- **Install Command:** `npm install`

#### 3. Environment Variables (Required)

Add these in Vercel Dashboard → Settings → Environment Variables:

```env
# API Configuration
NEXT_PUBLIC_API_URL=https://your-backend-api.com/api

# Example if your backend is on Railway, Render, or another service:
# NEXT_PUBLIC_API_URL=https://iptv-backend.railway.app/api
```

**Important:** Replace `https://your-backend-api.com/api` with your actual backend URL!

#### 4. Deploy
Click "Deploy" and wait for the build to complete (usually 2-3 minutes)

---

## 🔧 Backend Deployment

Your backend needs to be deployed separately. Options:

### Option 1: Railway (Recommended - Free Tier)
1. Go to https://railway.app
2. New Project → Deploy from GitHub
3. Select the `backend` folder
4. Add environment variables (see backend/.env.example)
5. Railway will give you a URL like: `https://your-app.railway.app`
6. Use this URL in Vercel: `NEXT_PUBLIC_API_URL=https://your-app.railway.app/api`

### Option 2: Render
1. Go to https://render.com
2. New Web Service → Connect repository
3. Root directory: `backend`
4. Build command: `npm install`
5. Start command: `node server.js`
6. Add environment variables
7. Use the Render URL in Vercel

### Option 3: DigitalOcean/AWS/Your own VPS
Deploy the backend folder to your server and update the API URL accordingly.

---

## ⚙️ Required Environment Variables

### Backend (.env)
```env
# Database
DB_HOST=your-mysql-host
DB_USER=your-mysql-user
DB_PASSWORD=your-mysql-password
DB_NAME=iptv_database

# JWT
JWT_SECRET=your-super-secret-jwt-key-change-this

# Email (Gmail SMTP)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password

# Server
PORT=5000
NODE_ENV=production
FRONTEND_URL=https://your-vercel-app.vercel.app
```

### Frontend (Vercel Environment Variables)
```env
NEXT_PUBLIC_API_URL=https://your-backend-url.com/api
```

---

## 🐛 Troubleshooting

### 404 Error on Dashboard
**Problem:** Getting "404: NOT_FOUND" when accessing `/admin/dashboard`

**Solution:**
1. Make sure `NEXT_PUBLIC_API_URL` is set in Vercel environment variables
2. Verify your backend API is accessible
3. Check backend CORS allows your Vercel domain
4. Redeploy after adding environment variables

### API Connection Failed
**Problem:** "Failed to fetch" or API errors

**Solutions:**
1. Verify `NEXT_PUBLIC_API_URL` is correct (must end with `/api`)
2. Check backend is running and accessible
3. Update backend CORS to allow Vercel domain:
```javascript
// backend/server.js
const allowedOrigins = [
  'https://your-app.vercel.app',
  'http://localhost:3000'
];
```

### Images Not Loading
**Problem:** Blog images or logo not showing

**Solution:**
1. Use absolute URLs for images (not relative paths)
2. Configure image domains in `next.config.js`:
```javascript
images: {
  domains: ['your-backend-domain.com'],
}
```

---

## 📝 Post-Deployment Checklist

- [ ] Backend API is deployed and accessible
- [ ] Database is set up with tables (run backend/database.sql)
- [ ] Environment variables added to Vercel
- [ ] CORS configured in backend for Vercel domain
- [ ] Admin account created (use backend scripts)
- [ ] Test login at: `https://your-app.vercel.app/admin/login`
- [ ] Test homepage loads correctly
- [ ] Update API URL in production environment

---

## 🔐 Admin Login

Default credentials (change after first login):
- Email: ayoub-k10@hotmail.com
- Password: admin123

To reset password, run on backend:
```bash
node change-admin-password.js "email@example.com" "new-password"
```

---

## 📧 Support

If you encounter issues:
1. Check Vercel deployment logs
2. Check backend server logs
3. Verify all environment variables are set
4. Test API endpoint directly: `https://your-backend.com/api/health`

---

## 🎉 Success!

Once deployed, your IPTV website will be live at:
- Frontend: `https://your-app.vercel.app`
- Admin Panel: `https://your-app.vercel.app/admin/login`

Remember to update DNS records if using a custom domain!
