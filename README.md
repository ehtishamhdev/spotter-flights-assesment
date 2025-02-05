# ✈️ Flights App  

A **Google Flights clone** built with **React (MUI, TypeScript), Redux, Axios, and Mapbox** for searching and displaying flights dynamically.

---

## 📌 Features  
✅ **Search for Flights**: Users can search for available flights based on departure, destination, and date.  
✅ **Dynamic Flight Listings**: Fetch and display flight details dynamically from an API.  
✅ **Material UI Design**: A modern, responsive UI built using Material-UI components.  
✅ **Redux Toolkit Integration**: Manages state for flight searches and airport data.  
✅ **Formik + Yup Validations**: Ensures valid search inputs before fetching flights.  
✅ **Swap Departure & Destination**: Users can swap "From" and "To" locations seamlessly.  
✅ **Mapbox Integration**: Displays flight routes and airports visually.  
✅ **Axios API Calls**: Fetches real-time flight data from **RapidAPI (SkyScraper)**.  
✅ **Loading Indicator**: Shows a spinner while fetching data.  

---

## 🚀 Tech Stack  
| **Technology**  | **Usage** |  
|---------------|----------|  
| React.js (TypeScript) | Frontend framework |  
| Material UI (MUI) | UI components & styling |  
| Redux Toolkit | State management |  
| Axios | API calls |  
| Formik + Yup | Form validation |  
| Mapbox GL | Interactive maps |  

---

## 📂 Folder Structure  

```md
📦 flights-app
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📜 FlightCard.tsx        # UI component for individual flights
 ┃ ┃ ┣ 📜 FlightsList.tsx       # Fetch & display all flights
 ┃ ┃ ┣ 📜 FlightSearchBar.tsx   # Search UI (From-To, Date, Swap)
 ┃ ┃ ┣ 📜 MapBox.tsx            # Map to display airports location
 ┃ ┣ 📂 redux
 ┃ ┃ ┣ 📂 slices
 ┃ ┃ ┃ ┣ 📜 airportSlice.ts      # Manages airport state
 ┃ ┃ ┃ ┣ 📜 flightSlice.ts       # Manages flights state
 ┃ ┃ ┣ 📂 selectors
 ┃ ┃ ┃ ┣ 📜 airportsSelector.ts  # Selects airport data from state
 ┃ ┃ ┃ ┣ 📜 flightsSelector.ts   # Selects flight data from state
 ┃ ┃ ┣ 📜 store.ts                 # Redux store configuration
 ┃ ┣ 📂 services
 ┃ ┃ ┣ 📜 airportService.ts      # Fetches airport data from API
 ┃ ┃ ┣ 📜 flightService.ts       # Fetches flights from API
 ┃ ┣ 📂 shared
 ┃ ┃ ┣ 📜 types.ts               # Holds all shared type definitions
 ┃ ┣ 📜 App.tsx                  # Main application component
 ┃ ┣ 📜 main.tsx                 # Entry point
 ┣ 📜 .env                        # API keys (ignored in .gitignore)
 ┣ 📜 README.md
 ┣ 📜 package.json
 ┣ 📜 tsconfig.json
 ┗ 📜 .gitignore
```

# ✈️ Flights App - Setup & Installation Guide

## 📌 Prerequisites  
Before you start, ensure you have the following installed:  
- **Node.js** (v16 or later) - [Download Here](https://nodejs.org/)  
- **yarn**
- **Git** - [Download Here](https://git-scm.com/)  

---

## 📥 1️⃣ Clone the Repository  
```sh
git clone https://github.com/your-username/flights-app.git
cd flights-app
```

## 📦 2️⃣ Install Dependencies
Run the following command to install all dependencies:
```sh
yarn
```

## ⚙️ 3️⃣ Configure Environment Variables
Create a .env file in the root directory and add the following:
```sh
REACT_APP_RAPIDAPI_KEY=your-rapidapi-key
REACT_APP_MAPBOX_ACCESS_TOKEN=your-mapbox-token
```

## ▶️ 4️⃣ Start the Development Server
Run the following command:
```sh
yarn dev
```
🌍 The app will be available at [http://localhost:5173](http://localhost:5173/) 🚀.
