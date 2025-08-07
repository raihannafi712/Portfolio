# Copilot Instructions for AI Agents

## Project Overview
This is a React + Vite project using Tailwind CSS for styling and ESLint for linting. The codebase is minimal and follows standard conventions for Vite-based React apps. The main entry point is `src/main.jsx`, which renders the `App` component from `src/App.jsx`.

## Architecture & Key Files
- **Entry Point:** `src/main.jsx` mounts the React app to the DOM element with id `root` in `index.html`.
- **Main Component:** `src/App.jsx` is the root React component. All UI logic starts here.
- **Styling:**
  - Tailwind CSS is configured via `tailwind.config.js` and used in `src/index.css`.
  - Additional styles are in `src/App.css`.
- **Assets:** Static assets (e.g., logos) are in `src/assets/` and `public/`.
- **Build & Dev:** Vite configuration is in `vite.config.js`. PostCSS and Tailwind are configured in `postcss.config.js` and `tailwind.config.js`.

## Developer Workflows
- **Start Dev Server:** `npm run dev` (or `yarn dev`) launches Vite with HMR.
- **Build for Production:** `npm run build` creates a production build in `dist/`.
- **Preview Production Build:** `npm run preview` serves the built app locally.
- **Linting:** `npm run lint` runs ESLint with custom config in `eslint.config.js`.

## Conventions & Patterns
- **React StrictMode** is used in `src/main.jsx` for highlighting potential problems.
- **Component Files:** All React components are in `src/` and use `.jsx` extension.
- **Imports:** Asset imports use relative paths (e.g., `./assets/react.svg`). Public assets use `/vite.svg`.
- **ESLint Rules:**
  - Unused variables starting with uppercase or underscore are ignored (`varsIgnorePattern: '^[A-Z_]'`).
  - Linting ignores the `dist/` directory.
- **Tailwind Usage:** All global styles are imported via `@tailwind` directives in `src/index.css`.

## Integration Points
- **Vite Plugins:** Uses `@vitejs/plugin-react` for React Fast Refresh.
- **PostCSS Plugins:** Uses `tailwindcss` and `autoprefixer`.
- **No TypeScript:** The project is currently JavaScript-only, but can be expanded to TypeScript as described in the README.

## Examples
- To add a new component, create a `.jsx` file in `src/` and import it in `App.jsx`.
- To add global styles, edit `src/index.css`.
- To add a new asset, place it in `src/assets/` and import it using a relative path.

## References
- See `README.md` for links to official Vite and React plugin documentation.
- See `eslint.config.js` for custom linting rules and plugin usage.
- See `tailwind.config.js` for content scanning and theme extension.

---

**If any conventions or workflows are unclear, ask the user for clarification before making changes.**
