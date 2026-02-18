# Copilot Instructions for Football Pitch Booking System

## Project Overview
- **Frontend:** React + Vite (web), React Native (mobile app)
- **Backend:** Node.js API, Firebase (Firestore, Auth)
- **Admin:** Protected dashboard route

## Key Structure
- `src/pages/`: Main pages (Home, Booking, AdminLogin, Dashboard)
- `src/services/firebase.js`: Firebase config, Firestore, Auth, admin login utility
- `src/App.jsx`: Routing setup (react-router-dom)
- `src/styles/global.css`: Global styles

## Developer Workflows
- **Start Dev Server:** `npm run dev` (Vite)
- **Build:** `npm run build`
- **Lint:** `npm run lint`
- **Preview:** `npm run preview`
- **Firebase:** All booking and admin actions use Firestore and Auth from `firebase.js`

## Page Patterns
- **Home:** Simple welcome, navigation via URL
- **Booking:** Form posts booking to Firestore (`bookings` collection)
- **Dashboard:** Lists bookings, live updates via Firestore snapshot
- **AdminLogin:** Calls `loginAdmin` from `firebase.js` (email/password)

## Routing
- Uses `react-router-dom` v7+ with `<Routes>` and `<Route>`
- Paths: `/`, `/booking`, `/admin-login`, `/dashboard`

## Protected Routes
- Admin dashboard should be protected (currently not implemented)
- Use Firebase Auth for admin session

## Firebase Integration
- Config in `src/services/firebase.js`
- Exports `db` (Firestore) and `auth` (Auth)
- Utility: `loginAdmin(email, password)`

## Conventions
- All pages in `src/pages/` as functional components
- Styles in `src/styles/global.css`
- No custom hooks or context yet
- No TypeScript

## Examples
- Booking form: see `Booking.jsx` for Firestore write
- Dashboard: see `Dashboard.jsx` for Firestore read
- Admin login: see `AdminLogin.jsx` and `firebase.js`

## To Extend
- Add protected route for dashboard
- Implement mobile app in React Native
- Build Node.js backend API for advanced features

---

For questions or unclear patterns, check `src/pages/` and `src/services/firebase.js` for current implementations.
