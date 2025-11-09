# ✅ Deployment Checklist - Copy This!

Print this or keep it open while deploying.

---

## 📋 Pre-Deployment

- [ ] Code is working locally
- [ ] Backend connects to database
- [ ] Admin login works (ayoub-k10@hotmail.com / admin123)
- [ ] All npm packages installed (`npm install` in both folders)

---

## 🗄️ Database Setup

- [ ] MySQL database created
- [ ] Database schema imported (`backend/database.sql`)
- [ ] Admin account created
- [ ] Database host allows external connections
- [ ] Database credentials saved securely

---

## 🚂 Backend Deployment (Railway)

- [ ] Go to https://railway.app
- [ ] Login with GitHub
- [ ] Click "New Project"
- [ ] Select "Deploy from GitHub repo"
- [ ] Choose this repository
- [ ] Set **Root Directory: `backend`**
- [ ] Add environment variables:
  - [ ] `DB_HOST`
  - [ ] `DB_USER`
  - [ ] `DB_PASSWORD`
  - [ ] `DB_NAME`
  - [ ] `JWT_SECRET` (random string)
  - [ ] `SMTP_HOST` (smtp.gmail.com)
  - [ ] `SMTP_PORT` (587)
  - [ ] `SMTP_USER` (your Gmail)
  - [ ] `SMTP_PASSWORD` (Gmail app password)
  - [ ] `NODE_ENV` (production)
  - [ ] `FRONTEND_URL` (will add after Vercel deployment)
- [ ] Click "Deploy"
- [ ] Wait for deployment (2-3 minutes)
- [ ] Copy Railway URL: ________________

---

## 🌐 Frontend Deployment (Vercel)

- [ ] Go to https://vercel.com/new
- [ ] Login with GitHub
- [ ] Click "Import Project"
- [ ] Select this repository
- [ ] **⚠️ CRITICAL: Set Root Directory to `next-app`**
  - [ ] Click "Edit" next to Root Directory
  - [ ] Type: `next-app`
  - [ ] Click outside to save
- [ ] Framework should auto-detect as "Next.js"
- [ ] Add environment variable:
  - [ ] Name: `NEXT_PUBLIC_API_URL`
  - [ ] Value: `https://your-backend.railway.app/api`
  - [ ] (Use the Railway URL you copied above)
- [ ] Click "Deploy"
- [ ] Wait for deployment (2-3 minutes)
- [ ] Copy Vercel URL: ________________

---

## 🔄 Update CORS

- [ ] Go back to Railway dashboard
- [ ] Click on your backend project
- [ ] Go to Variables
- [ ] Update `FRONTEND_URL` to your Vercel URL
- [ ] Wait for auto-redeploy

OR manually update `backend/server.js`:
```javascript
const allowedOrigins = [
  'https://your-app.vercel.app',  // Add this line
  'http://localhost:3000',
  'http://localhost:3001'
];
```
- [ ] Commit and push changes

---

## 🧪 Testing

### Frontend Tests:
- [ ] Homepage loads: https://your-app.vercel.app
- [ ] No console errors (F12 → Console)
- [ ] Images load correctly
- [ ] Navigation works
- [ ] Blog page loads: https://your-app.vercel.app/blog
- [ ] Channels page loads: https://your-app.vercel.app/channels

### Backend API Tests:
- [ ] Health check: https://your-backend.railway.app/api/health
  - Should return: `{"status":"OK","message":"..."}`
- [ ] Settings: https://your-backend.railway.app/api/settings
  - Should return JSON with settings

### Admin Panel Tests:
- [ ] Login page loads: https://your-app.vercel.app/admin/login
- [ ] Can login with: ayoub-k10@hotmail.com / admin123
- [ ] Dashboard loads (NOT 404): https://your-app.vercel.app/admin/dashboard
- [ ] Can view blogs list
- [ ] Can create a test blog
- [ ] Can edit blog
- [ ] Can delete blog (professional modal appears)
- [ ] Can update SEO settings
- [ ] Settings save successfully
- [ ] Can logout

---

## 🔐 Security Updates

- [ ] Change admin password:
  ```bash
  node change-admin-password.js "your-email" "new-secure-password"
  ```
- [ ] Remove or secure any test accounts
- [ ] Verify JWT_SECRET is random and secure
- [ ] Check CORS only allows your domain

---

## 📊 Post-Deployment

- [ ] Update any documentation with live URLs
- [ ] Add custom domain (optional)
  - [ ] In Vercel: Settings → Domains
  - [ ] Add DNS records
- [ ] Set up monitoring (optional)
  - [ ] Vercel Analytics
  - [ ] Uptime monitoring
- [ ] Enable automatic database backups
- [ ] Test email functionality (password reset)
- [ ] Share with team/client

---

## ⚠️ Common Issues Checklist

If something doesn't work:

- [ ] **404 on dashboard?**
  - Check: `NEXT_PUBLIC_API_URL` is set in Vercel
  - Check: Root Directory is `next-app`

- [ ] **"No Next.js detected"?**
  - Fix: Set Root Directory to `next-app` in Vercel
  - Redeploy

- [ ] **"Failed to fetch"?**
  - Check: Backend is running (visit health endpoint)
  - Check: CORS allows Vercel domain
  - Check: API URL is correct (ends with `/api`)

- [ ] **Images not loading?**
  - Check: File paths are absolute
  - Check: Backend uploads folder is accessible

- [ ] **Database errors?**
  - Check: All DB environment variables are correct
  - Check: Database allows external connections
  - Check: Schema is imported

---

## 📝 URLs to Save

Write these down for future reference:

**Frontend:**
- Production: ________________
- Admin Login: ________________/admin/login

**Backend:**
- API Base: ________________/api
- Health: ________________/api/health

**Database:**
- Host: ________________
- Database Name: ________________

**Repository:**
- GitHub: https://github.com/alexelgato61-design/finnaly-works-of-iptv-website-ready-to-vercal

---

## 🎉 Deployment Complete!

- [ ] All tests pass
- [ ] Admin can login
- [ ] Dashboard works
- [ ] Blog management works
- [ ] No console errors
- [ ] Performance is good
- [ ] Mobile responsive

**Congratulations! Your IPTV website is live! 🚀**

---

## 📞 Support

If you encounter issues:
1. Check `QUICK-FIX.md`
2. Review deployment logs (Vercel/Railway)
3. Check browser console (F12)
4. Verify environment variables
5. Test backend API directly

---

**Date Deployed:** ________________
**Deployed By:** ________________
**Version:** Production Ready - Nov 2025
