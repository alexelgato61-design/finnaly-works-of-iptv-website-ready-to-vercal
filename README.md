# 🚀 IPTV Website - Complete & Ready for Vercel Deployment# 🎬 IPTV ACCESS - Premium IPTV Website with Full Content Management



## ✅ Repository Status: PRODUCTION READY[![Next.js](https://img.shields.io/badge/Next.js-15.5.6-black?style=flat-square&logo=next.js)](https://nextjs.org/)

[![Node.js](https://img.shields.io/badge/Node.js-Latest-green?style=flat-square&logo=node.js)](https://nodejs.org/)

**Last Updated:** November 9, 2025  [![MySQL](https://img.shields.io/badge/MySQL-8.0+-blue?style=flat-square&logo=mysql)](https://mysql.com/)

**Status:** ✅ All features working, ready to deploy  [![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)

**Repository:** https://github.com/alexelgato61-design/finnaly-works-of-iptv-website-ready-to-vercal

> **Professional IPTV streaming website with powerful admin dashboard, SEO optimization, and complete content management system.**

---



## 🎯 Quick Deploy (3 Steps)

## 🚀 Features## ✨ Features

### 1️⃣ Deploy Backend (Railway - Free)

```

→ Go to railway.app

→ New Project → Deploy from GitHub- **Dynamic Pricing Plans** - Multiple device options (Android, Smart TV, MAG, etc.)### Frontend (Next.js)

→ Select: backend folder

→ Add environment variables (see below)- **FAQ Management** - Admin can add/edit/delete FAQs with drag-and-drop ordering- ✅ Modern, responsive landing page

→ Copy Railway URL

```- **Logo System** - Support for both image logos (PNG, JPG, SVG, etc.) and text logos- ✅ Optimized for SEO



### 2️⃣ Deploy Frontend (Vercel - Free)- **Responsive Design** - Mobile-friendly layout with flexbox- ✅ Dynamic pricing section (1, 2, 3, 6 devices)

```

→ Go to vercel.com/new- **Admin Dashboard** - Full control over site content, settings, and plans- ✅ Channel showcases & FAQ

→ Import this repository

→ ⚠️ Set Root Directory: next-app- **WhatsApp Integration** - Direct contact via WhatsApp- ✅ Mobile-friendly design

→ Add: NEXT_PUBLIC_API_URL = https://your-backend.railway.app/api

→ Deploy- **Streaming Services Display** - Animated logos showcase

```

- **Movie Catalog** - Auto-scrolling movie posters### Backend (Node.js + Express + MySQL)

### 3️⃣ Update CORS

```javascript- ✅ RESTful API

// backend/server.js - Add your Vercel URL

const allowedOrigins = [## 📁 Project Structure- ✅ JWT authentication

  'https://your-app.vercel.app',

  'http://localhost:3000'- ✅ MySQL database

];

``````- ✅ Image upload for logos



**Done! 🎉** Your site is live!├── backend/              # Node.js + Express API- ✅ Production-ready for cPanel



---│   ├── config/          # Database configuration



## 📁 Project Structure│   ├── middleware/      # Authentication middleware### Admin Panel



```│   ├── routes/          # API endpoints- ✅ **Logo Management:** Upload and change site logo

repo/

├── backend/          # API Server (Deploy to Railway/Render)│   ├── uploads/         # User-uploaded files (logos)- ✅ **Pricing Control:** Edit all plans (name, price, features)

│   ├── server.js

│   ├── routes/│   ├── database.sql     # Database schema- ✅ **Featured Plans:** Mark plans as "Popular"

│   └── .env         # Create this with your credentials

││   └── server.js        # Express server- ✅ **Contact Info:** Update email and WhatsApp number

└── next-app/        # Frontend (Deploy to Vercel)

    ├── app/│- ✅ **Secure Login:** JWT authentication

    ├── public/

    └── package.json├── next-app/            # Next.js 15 frontend

```

│   ├── app/## 🚀 Quick Start

---

│   │   ├── components/  # React components

## 🔐 Environment Variables

│   │   ├── admin/       # Admin dashboard### 1. Setup Database

### Backend (.env)

```env│   │   └── page.jsx     # Main page

DB_HOST=your-mysql-host

DB_USER=your-username│   ├── lib/             # Utility functions```bash

DB_PASSWORD=your-password

DB_NAME=iptv_database│   ├── public/          # Static assetsmysql -u root -p

JWT_SECRET=change-this-to-random-string

SMTP_HOST=smtp.gmail.com│   └── styles/          # Global CSSCREATE DATABASE iptv_database;

SMTP_PORT=587

SMTP_USER=your-email@gmail.com│USE iptv_database;

SMTP_PASSWORD=your-gmail-app-password

NODE_ENV=production├── images/              # Project images (logos, posters, etc.)SOURCE backend/database.sql;

FRONTEND_URL=https://your-app.vercel.app

```├── START-BACKEND.bat    # Windows: Start backend server```



### Frontend (Vercel Dashboard)└── START-FRONTEND.bat   # Windows: Start frontend server

```env

NEXT_PUBLIC_API_URL=https://your-backend.railway.app/api```### 2. Backend

```



---

## 🛠️ Tech Stack```bash

## ⚠️ CRITICAL: Vercel Configuration

cd backend

**Most common error:** "No Next.js version detected"

### Backendnpm install

**Solution:**

1. In Vercel import screen- **Node.js** with Express# Edit .env with MySQL credentials

2. **Root Directory** → Click "Edit"

3. Type: `next-app`- **MySQL** databasenpm run dev

4. This is REQUIRED! Next.js is inside the next-app folder.

- **JWT** authentication```

See `QUICK-FIX.md` for detailed instructions.

- **Multer** for file uploads

---

- **bcryptjs** for password hashingRuns on: **http://localhost:5000**

## ✨ What's Included



### Frontend Features:

- ✅ Modern responsive design### Frontend### 3. Frontend

- ✅ SEO optimized (dynamic metadata)

- ✅ Blog system- **Next.js 15.5.6**

- ✅ Pricing plans

- ✅ FAQ section- **React 18**```bash

- ✅ Channel showcase

- ✅ Contact information- **CSS** (Flexbox layout)cd next-app



### Admin Panel:- Dynamic API integrationnpm install

- ✅ Authentication (JWT + httpOnly cookies)

- ✅ Dashboard overviewnpm run dev

- ✅ Blog management (CRUD)

- ✅ Professional delete modals## 📋 Prerequisites```

- ✅ SEO customization

- ✅ Settings management

- ✅ Logo upload

- ✅ FAQ management- Node.js (v18 or higher)Runs on: **http://localhost:3000**



### Technical:- MySQL Server

- ✅ Next.js 15.5.6 (SSR)

- ✅ Express.js backend- Windows OS (for .bat scripts) or modify for your OS### 4. Admin Access

- ✅ MySQL database

- ✅ CORS configured

- ✅ Security headers

- ✅ Image optimization## ⚙️ Installation- URL: **http://localhost:3000/admin/login**

- ✅ API proxy for seamless integration

- Email: `admin@site.com`

---

### 1. Clone/Download Project- Password: `admin123`

## 🗄️ Database Setup

```bash

1. **Create MySQL database** (PlanetScale, Railway, or your own)

cd "d:\download\iptv template from zero"## 📚 Documentation

2. **Import schema:**

```bash```

mysql -u username -p database_name < backend/database.sql

```- **[SETUP.md](./SETUP.md)** - Detailed setup guide



3. **Default admin credentials:**### 2. Setup Backend- **[backend/README.md](./backend/README.md)** - API docs

```

Email: ayoub-k10@hotmail.com- **[backend/DEPLOYMENT.md](./backend/DEPLOYMENT.md)** - cPanel deployment

Password: admin123

⚠️ CHANGE AFTER FIRST LOGIN!```bash

```

cd backend## 🎯 What You Can Manage

---

npm install

## 🐛 Troubleshooting

```- Logo (upload image)

### Error: "No Next.js version detected"

**Fix:** Set **Root Directory** to `next-app` in Vercel settings- Contact email & WhatsApp



### Error: "404: NOT_FOUND" on dashboardCreate `.env` file:- Pricing plans (name, price, features)

**Fix:** Add `NEXT_PUBLIC_API_URL` environment variable in Vercel

```env- Featured badges

### Error: "Failed to fetch"

**Fix:** Update CORS in backend/server.js with your Vercel domainDB_HOST=localhost- All 4 device tiers (1/2/3/6)



### See Complete Guide:DB_USER=root

- `QUICK-FIX.md` - Fast solutions

- `VERCEL-SETUP-GUIDE.md` - Detailed setupDB_PASSWORD=## 🛠️ Tech Stack

- `VERCEL-DEPLOYMENT.md` - Full deployment docs

DB_NAME=iptv_database

---

JWT_SECRET=your_super_secret_jwt_key_change_this_in_production**Frontend:** Next.js 15, React 18  

## 📚 Documentation Files

PORT=5000**Backend:** Node.js, Express, MySQL  

| File | Description |

|------|-------------|```**Auth:** JWT with httpOnly cookies

| `QUICK-FIX.md` | Quick solutions for common errors |

| `VERCEL-SETUP-GUIDE.md` | Step-by-step Vercel configuration |

| `VERCEL-DEPLOYMENT.md` | Complete deployment guide |

| `README.md` | This file |Import database:## 🌐 Deploy to cPanel



---```bash



## 🧪 Test Your Deploymentmysql -u root -p < database.sqlSee [backend/DEPLOYMENT.md](./backend/DEPLOYMENT.md) for full instructions.



After deploying, test these URLs:```



```---

✅ Homepage: https://your-app.vercel.app

✅ Admin: https://your-app.vercel.app/admin/login### 3. Setup Frontend

✅ Blog: https://your-app.vercel.app/blog

✅ Backend: https://your-backend.railway.app/api/health**Built for IPTV service providers** 🚀

```

```bash

---cd ../next-app

npm install

## 🔒 Security```



- ✅ JWT authenticationCreate `.env.local`:

- ✅ bcrypt password hashing```env

- ✅ httpOnly cookiesNEXT_PUBLIC_API_URL=http://localhost:5000

- ✅ CORS protection```

- ✅ XSS headers

- ✅ SQL injection prevention## 🚀 Running the Project



---### Option 1: Windows Batch Files (Easiest)

Double-click these files:

## 📈 Performance1. `START-BACKEND.bat` - Starts backend on port 5000

2. `START-FRONTEND.bat` - Starts frontend on port 3000

- ✅ Server-side rendering (SSR)

- ✅ Image optimization### Option 2: Manual Start

- ✅ Code splitting

- ✅ Lazy loading**Terminal 1 - Backend:**

- ✅ Caching strategies```bash

cd backend

---npm run dev

```

## 🎉 Success Checklist

**Terminal 2 - Frontend:**

- [ ] Backend deployed to Railway/Render```bash

- [ ] Database created and schema importedcd next-app

- [ ] Backend environment variables configurednpm run dev

- [ ] Frontend deployed to Vercel```

- [ ] **Root Directory set to `next-app`**

- [ ] `NEXT_PUBLIC_API_URL` environment variable added### Access:

- [ ] CORS updated with Vercel domain- **Website**: http://localhost:3000

- [ ] Homepage loads correctly- **Admin Panel**: http://localhost:3000/admin/dashboard

- [ ] Admin login works- **API**: http://localhost:5000/api

- [ ] Dashboard displays (not 404)

## 🔐 Default Admin Credentials

---

```

## 🆘 Need Help?Email: admin@site.com

Password: admin123

1. Check deployment logs (Vercel/Railway dashboard)```

2. Verify all environment variables are set

3. Test backend API directly: `https://your-backend.com/api/health`**⚠️ IMPORTANT:** Change these in production!

4. Read `QUICK-FIX.md` for common issues

5. Check browser console (F12) for errors## 📱 Admin Panel Features



---### Settings Management

- Upload/change site logo (supports PNG, JPG, SVG, GIF, WebP, BMP, ICO, TIFF)

## 🚀 Deployment Services- Toggle between image logo or text logo

- Update contact email

### Recommended for Backend:- Update WhatsApp number

- **Railway** (railway.app) - Free tier, auto-deploy

- **Render** (render.com) - Free tier, easy setup### Plans Management

- Add/edit/delete pricing plans

### Recommended for Frontend:- Set device types (Android, Smart TV, MAG, etc.)

- **Vercel** (vercel.com) - Best for Next.js, free tier- Mark plans as "featured"

- Manage display order

### Database:

- **PlanetScale** - Free MySQL, serverless### FAQ Management

- **Railway** - Includes MySQL in free tier- Add/edit/delete frequently asked questions

- Reorder FAQs with display_order

---- Dynamic rendering on main site



## 📧 Admin Access## 🎨 Customization



**Default Credentials:**### Changing Colors

```Edit `next-app/styles/globals.css`:

Email: ayoub-k10@hotmail.com```css

Password: admin123:root {

```    --accent: #86ff00;  /* Change to your brand color */

    --bg: #050505;      /* Background color */

**Change Password:**    --muted: #bdbdbd;   /* Text muted color */

```bash}

cd backend```

node change-admin-password.js "email" "new-password"

```### Adding More Pages

Create new files in `next-app/app/`:

---```

app/

## 🔄 Updates  ├── about/

  │   └── page.jsx

To update your deployed site:  └── contact/

```bash      └── page.jsx

git pull```

# Make your changes

git add .## 🗄️ Database Schema

git commit -m "Your update"

git push### Tables:

```- **admins** - Admin users with hashed passwords

- **settings** - Site configuration (logo, email, WhatsApp)

Both Vercel and Railway will auto-deploy on push.- **plans** - Pricing plans with unique constraint on (device_tab, name)

- **faqs** - FAQ items with display order

---

## 📊 API Endpoints

## 📊 What's Fixed

### Public Endpoints

- ✅ All CORS issues resolved- `GET /api/settings` - Get site settings

- ✅ Login functionality working- `GET /api/plans` - Get all pricing plans

- ✅ API proxy configured- `GET /api/faqs` - Get all FAQs

- ✅ Professional delete modals

- ✅ SEO metadata separation (admin vs frontend)### Protected Endpoints (require JWT)

- ✅ Vercel deployment configuration- `POST /api/admin/login` - Admin login

- ✅ Environment-based API routing- `PUT /api/settings` - Update settings

- `POST /api/upload` - Upload logo

---- `POST /api/plans` - Create plan

- `PUT /api/plans/:id` - Update plan

## 💻 Tech Stack- `DELETE /api/plans/:id` - Delete plan

- `POST /api/faqs` - Create FAQ

- **Frontend:** Next.js 15.5.6, React, TailwindCSS- `PUT /api/faqs/:id` - Update FAQ

- **Backend:** Node.js, Express.js- `DELETE /api/faqs/:id` - Delete FAQ

- **Database:** MySQL 8.0+

- **Authentication:** JWT with httpOnly cookies## 🐛 Troubleshooting

- **Email:** Nodemailer (Gmail SMTP)

- **Deployment:** Vercel (frontend), Railway (backend)### Backend won't start

- Check MySQL is running

---- Verify database exists: `mysql -u root -p -e "SHOW DATABASES;"`

- Check port 5000 is not in use

## 📄 License

### Frontend shows "Failed to fetch"

All rights reserved.- Ensure backend is running on port 5000

- Check CORS settings in `backend/server.js`

---- Verify `.env.local` has correct API URL



## 🎊 You're Ready!### Images not displaying

- Check `backend/uploads/` folder exists

This project is **complete, tested, and production-ready**. Just follow the 3 deployment steps above and you'll have a live IPTV website!- Verify file permissions

- Check image path in database

**Repository:** https://github.com/alexelgato61-design/finnaly-works-of-iptv-website-ready-to-vercal

## 📝 License

**Questions?** Check `QUICK-FIX.md` first!

This project is proprietary. All rights reserved.

**Good luck with your deployment! 🚀**

## 👨‍💻 Support

For issues or questions, contact via WhatsApp (configured in admin panel).

---

**Built with ❤️ for IPTV service providers**
