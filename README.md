
# Country Explorer 🌍

A tiny React app to browse countries and view details — fast, with skeleton loaders and URL-driven search/filter.

Highlights
- Search & filter (URL params: `?query=` `&region=`)
- Country details page (`/country/:cca3`)
- React Query + Axios for data, Tailwind for UI

Quick start
```bash
npm install
npm run dev
```


Quick tips
- Blank detail page? Ensure you list out the reqquired fields
- API 400 about `fields`? The app requests minimal fields in `src/api/Country.js` — make sure env is set.


