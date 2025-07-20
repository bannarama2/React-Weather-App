# 🌤️ React Weather Forecast App

A sleek, responsive weather forecast app built with **React** and **Tailwind CSS**. It allows users to search for a city and get the current weather conditions along with a 3-day forecast, powered by the [WeatherAPI](https://www.weatherapi.com/).

👤 Author

Developed by Bannie
GitHub: @bannarama2

---

## ✨ Features

- 🔍 Search for any city worldwide
- 📍 Displays current temperature, condition, humidity, and wind
- 📅 3-day weather forecast
- 🖥️ Mobile-first responsive UI
- 🎨 Styled with Tailwind CSS and custom gradients
- 🌐 Uses the WeatherAPI with real-time data fetching

---

## 🛠️ Technologies Used

- **React** (functional components and hooks)
- **Tailwind CSS**
- **WeatherAPI** (REST API)

---

## 📦 Installation

1. **Clone the repository:**

```bash
git clone https://github.com/bannarama2/React-Weather-App.git
cd your-repo-name
```

---

2. **Install dependencies:**

```bash
npm install
```

---

3. **Add your API key:**

Create a .env file in the root of your project and add:

```
REACT_APP_API_KEY=your_weatherapi_key_here
```

Your key is kept private thanks to environment variables.

---

4. **Start the app:**

Always show details

```bash
npm start
```

Then open http://localhost:3000 in your browser if npm didn't automatically open it for you.

---

## 🚀 Usage

Type a city name (e.g., "Paris") into the input.

Press Enter or click the Search button.

The app displays:

    City & country

    Current temperature in °C

    Condition description

    Humidity and wind speed

    3-day forecast temperatures


🔒 Error Handling

    Displays "City not found" if an invalid name is entered

    Shows "Error fetching response" for network/API issues

    Ignores empty submissions

🎨 Styling

The app uses Tailwind CSS for all styling, including:

    Gradient backgrounds

    Glassmorphism containers

    Rounded cards for forecast entries

    Fully mobile-optimized layout

🧱 Dependencies

Always show details
```
{
  "react": "^18.x",
  "react-dom": "^18.x",
  "react-scripts": "^5.x",
  "tailwindcss": "^3.x"
}
```

---

## 📄 License

This project is open source and available under the MIT License.
🙌 Acknowledgements

    WeatherAPI.com – Free weather data API

    Tailwind CSS – Utility-first CSS framework
