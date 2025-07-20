# 🌤️ React Weather Forecast App

A sleek, responsive weather forecast app built with **React** and **Tailwind CSS**. It allows users to search for a city and get the current weather conditions along with a 3-day forecast, powered by the [WeatherAPI](https://www.weatherapi.com/).

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

## 📁 Project Structure


src/
├── App.js          # Main app logic
├── Forecast.js     # Component for 3-day forecast
└── Search.js       # Input field and search button

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

{
  "react": "^18.x",
  "react-dom": "^18.x",
  "react-scripts": "^5.x",
  "tailwindcss": "^3.x"
}

    Install Tailwind using this guide if it's not already configured.

📄 License

This project is open source and available under the MIT License.
🙌 Acknowledgements

    WeatherAPI.com – Free weather data API

    Tailwind CSS – Utility-first CSS framework

👤 Author

Developed by Bannie
GitHub: @bannarama2

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
