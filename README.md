# Countries of the World — React Router

Completed project for **Lab Activity 07**. The app uses React Router for client-side navigation across its pages and includes a catch-all 404 route.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

The Home page renders inside the shared Layout, and the navigation links switch pages without a full-page reload.

## Current State

- `main.jsx` — wraps the app in `<BrowserRouter>`
- `App.jsx` — defines the route table with a layout route and catch-all 404
- `Layout.jsx` — renders nested pages with `<Outlet />` and uses `<Link>` navigation
- Pages — `HomePage`, `CountriesPage`, `BucketListPage`, `AboutPage`, `NotFoundPage` all exist with full content
- `NotFoundPage` — styled 404 route with working links

## Stack

- React 19
- Vite 6
- Tailwind CSS 4 (via `@tailwindcss/vite`)
- DaisyUI 5

## Lab 07 Requirements Completed

- Install `react-router`
- Wrap the app in `<BrowserRouter>`
- Build a route table with `<Routes>` + `<Route>`
- Refactor `Layout` to a layout route with `<Outlet />`
- Convert `<a href>` → `<Link>` for client-side navigation
- Add a catch-all `path="*"` for the 404 page
- Fix the two JSX bugs in `NotFoundPage`

See `Lab Activity 07_ Countries of the World with React Router.md` for the full task list.
