# Ndatimana Yves - Portfolio

A modern, responsive portfolio website built with React.js and Tailwind CSS.

## Tech Stack

- **React.js** - UI framework
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **Node.js/Express** - Backend API (MySQL)
- **Netlify** - Frontend hosting

## Local Setup

### Frontend
```bash
cd frontend-react
npm install
npm run dev
```
Open: `http://localhost:5173`

### Backend
```bash
npm install
npm run dev
```
Open: `http://localhost:3000` (API)

## Build Frontend
```bash
npm run build
```
Outputs to `frontend-dist/`.

## Deploy to Netlify (Frontend Static) - Recommended Manual CLI

1. Install Netlify CLI:
   ```
   npm install -g netlify-cli
   ```

2. Login:
   ```
   netlify login
   ```

3. Build (if not done):
   ```
   npm run build
   ```

4. Deploy production (no Git clone needed):
   ```
   netlify deploy --prod --dir=frontend-dist
   ```
   Site live immediately!

**Git Integration (netlify init):** For auto-deploys on git push. If 'Host key verification failed':
- Repo: https://github.com/ndatimanayves2/portfolio.git (public HTTPS).
- No submodules (.gitmodules absent).
- Fix: Netlify dashboard > Site settings > Build & deploy > Continuous Deployment > Repository > Reconnect GitHub account.
- Or use manual deploy above (bypasses Git).

Netlify uses `netlify.toml`: build `npm run build`, publish `frontend-dist`.

**Note**: Backend deploy separate (Railway/Render for Node/MySQL). Update vite.config.js proxy or add VITE_API_URL env for prod API base (e.g., vite.config.js base or import.meta.env).

## Backend Note
Deploy backend separately. Update frontend API calls for production URL.

