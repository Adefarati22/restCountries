# Country Explorer 🌍
A responsive web application built with React that allows users to explore countries from around the world. It fetches data from the [REST Countries API](https://restcountries.com/), enabling users to view a list of countries, search for specific ones, filter by region, and view detailed information for each country. The application also features a theme-switcher for light and dark modes.

## Key Features

-   **Country Listing:** Displays all countries with essential information like flag, name, population, region, and capital.
-   **Detailed View:** Provides a comprehensive details page for each country, including native name, sub-region, currencies, languages, and border countries.
-   **Live Search:** Instantly search for countries by name. The search state is managed via URL query parameters (`?query=`).
-   **Region Filtering:** Filter the country list by continent (Africa, America, Asia, Europe, Oceania). The filter state is also managed via URL query parameters (`&region=`).
-   **Theme Switching:** Toggle between a light and dark theme, with the preference saved in local storage.
-   **Responsive Design:** A fully responsive layout that works on various screen sizes, from mobile to desktop.
-   **Loading States:** Utilizes skeleton loaders to provide a better user experience while data is being fetched.

## Tech Stack

-   **Framework:** React
-   **Routing:** React Router
-   **Data Fetching:** React Query & Axios
-   **Styling:** Tailwind CSS & DaisyUI
-   **Build Tool:** Vite
-   **Icons:** Remix Icon

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js and npm (or a compatible package manager) installed on your system.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/adefarati22/restCountries.git
    cd restCountries
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the root of the project and add the following variable. This application uses the REST Countries API.
    ```env
    VITE_COUNTRY_BASE_URL=https://restcountries.com
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open your browser and navigate to `http://localhost:5173` to see the application.

## Available Scripts

In the project directory, you can run:

-   `npm run dev`: Runs the app in development mode.
-   `npm run build`: Builds the app for production to the `dist` folder.
-   `npm run lint`: Lints the codebase using ESLint.
-   `npm run preview`: Serves the production build locally for previewing.

## Project Structure

The project follows a standard React application structure, organizing files by feature and type.

```
/src
├── api/          # Functions for making API requests to REST Countries API
├── components/   # Reusable UI components (Search, Filter, Loaders, ThemeController)
├── hooks/        # Custom React hooks (e.g., useSearch)
├── layout/       # Main application layout component (RootLayout)
├── pages/        # Page-level components (CardLayout, CardDetails)
├── routes/       # Application routing configuration using React Router
└── utils/        # Utility helpers and the configured Axios instance