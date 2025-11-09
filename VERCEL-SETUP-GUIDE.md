# CRITICAL: Vercel Configuration Settings

## ⚠️ IMPORTANT: Set Root Directory in Vercel Dashboard

When importing this project to Vercel, you **MUST** configure these settings:

### Required Settings:

1. **Root Directory:** `next-app`
   - This is the most important setting!
   - Without this, Vercel won't find package.json and Next.js

2. **Framework Preset:** Next.js

3. **Build Command:** `npm run build` (default)

4. **Output Directory:** `.next` (default)

5. **Install Command:** `npm install` (default)

---

## Step-by-Step Vercel Setup:

### 1. Import Project
- Go to https://vercel.com/new
- Import: `alexelgato61-design/finnaly-works-of-iptv-website-ready-to-vercal`

### 2. Configure Settings (BEFORE deploying)
Click on **"Edit"** next to Root Directory:
```
Root Directory: next-app
```

### 3. Add Environment Variables
```
NEXT_PUBLIC_API_URL=https://your-backend-url.com/api
```

### 4. Deploy
Click "Deploy" button

---

## Why This Is Needed:

Your project structure:
```
repo-root/
├── backend/           ← Backend code (not deployed to Vercel)
├── next-app/          ← Frontend code (THIS is what Vercel needs)
│   ├── package.json   ← Next.js dependencies are here
│   ├── next.config.js
│   └── app/
└── vercel.json        ← Not needed if Root Directory is set
```

Vercel needs to know that the Next.js app is in the `next-app` subfolder, not the root.

---

## If You Already Deployed Without Setting Root Directory:

### Fix in Vercel Dashboard:
1. Go to your project on Vercel
2. **Settings** → **General**
3. Scroll to **Build & Development Settings**
4. **Root Directory:** Change to `next-app`
5. Click **Save**
6. Go to **Deployments** tab
7. Click **"..."** on latest deployment → **Redeploy**

---

## Alternative: Use Vercel CLI

If you prefer command line:

```bash
cd next-app
vercel
# Follow prompts, it will auto-detect Next.js
```

---

## Backend Deployment (Separate)

Remember: Backend must be deployed separately!

**Railway:**
```bash
railway login
railway init
railway up
# Copy the URL and use in NEXT_PUBLIC_API_URL
```

**Render:**
- Create new Web Service
- Connect repository
- Root Directory: `backend`
- Build Command: `npm install`
- Start Command: `node server.js`

---

## Environment Variables Needed:

### Frontend (Vercel):
```env
NEXT_PUBLIC_API_URL=https://your-backend.railway.app/api
```

### Backend (Railway/Render):
```env
DB_HOST=your-mysql-host
DB_USER=your-mysql-user
DB_PASSWORD=your-password
DB_NAME=iptv_database
JWT_SECRET=your-secret-key
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
NODE_ENV=production
FRONTEND_URL=https://your-app.vercel.app
```

---

## ✅ Deployment Checklist:

- [ ] Backend deployed to Railway/Render
- [ ] Database created and accessible
- [ ] Backend environment variables set
- [ ] Vercel project created
- [ ] **Root Directory set to `next-app`** ⚠️
- [ ] `NEXT_PUBLIC_API_URL` added to Vercel
- [ ] First deployment successful
- [ ] Admin login works
- [ ] Dashboard loads without 404

---

## Common Errors:

### "No Next.js version detected"
**Cause:** Root Directory not set to `next-app`
**Fix:** Settings → Root Directory → `next-app` → Redeploy

### "404: NOT_FOUND" on dashboard
**Cause:** Missing `NEXT_PUBLIC_API_URL` environment variable
**Fix:** Settings → Environment Variables → Add variable → Redeploy

### "Failed to fetch" errors
**Cause:** Backend not accessible or CORS not configured
**Fix:** Check backend URL, update CORS in backend/server.js

---

Need help? Check the logs:
- Vercel: Deployments → Click deployment → View Function Logs
- Backend: Railway/Render dashboard → Logs tab
