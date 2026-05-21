# LayoutUser Migration Report

## Summary

The PlainAdmin `index.html` template is now split into an Inertia-friendly structure:

- `LayoutUser.jsx` owns the shared admin shell.
- `Home.jsx` owns the dashboard page content from `index.html`.
- `/` renders the new Home dashboard page through Inertia.

## Changed Files

- `resources/js/Layouts/LayoutUser.jsx`
  - Rebuilt as the PlainAdmin sidebar, overlay, header, profile menu, breadcrumb, content slot, footer, and scroll-top shell.
  - Replaced the template's direct DOM script with React state/effects for sidebar and header scroll state.

- `resources/js/Pages/Home.jsx`
  - Added the dashboard body from `index.html`.
  - Initializes Chart.js, jsVectorMap, and FullCalendar from `useEffect`.
  - Cleans up charts/map/calendar on unmount so Inertia navigation does not leave duplicate instances.

- `app/Http/Controllers/PostController.php`
  - Changed the `/` index response to render `Home` as the ecommerce dashboard route.

- `resources/js/app.jsx`
  - Uses `LayoutUser` for `Home`.
  - Imports Bootstrap's bundle once for dropdown and collapse behavior.

- `resources/views/app.blade.php`
  - Loads PlainAdmin CSS and favicon from `/assets`.

- `resources/css/app.css`
  - Converted the starter Tailwind `@apply` rules into plain scoped CSS.
  - Scoped old guest styles under `.guest-layout` so they do not override PlainAdmin classes.

- `vite.config.js`
  - Registered `@tailwindcss/vite` so Tailwind utilities are generated correctly.

- `public/assets`
  - Added PlainAdmin CSS, fonts, and images from the HTML template.

## Notes

- The route `/` now shows the PlainAdmin ecommerce dashboard. The old posts list is no longer the home page.
- The large dashboard HTML is currently migrated as static markup in `Home.jsx`; this is good for preserving the template quickly. The next best cleanup is to split it into React components such as `StatsCards`, `SalesCharts`, `TopProductsTable`, and `SalesHistoryTable`.
- Menu links that pointed to static HTML files are placeholders until matching Laravel routes/pages exist.

## Verification

`npm run build` passes successfully.

The only remaining build warning is Vite's large bundle warning, caused by dashboard libraries like Chart.js, FullCalendar, and jsVectorMap being included in the main bundle.
