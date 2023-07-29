
export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-4">About Weather App</h2>
            <p className="mb-4">
                Welcome to the Weather App, a simple application built with Next.js that allows you to get real-time weather information for any location around the world.
            </p>
            <p className="mb-4">
                With this app, you can quickly check the current weather conditions, temperature, humidity, and wind speed of your desired city or region. Whether you are planning a trip, going for a hike, or just curious about the weather, the Weather App has got you covered!
            </p>
            <h2 className="text-xl font-bold mb-2">How It Works</h2>
            <p className="mb-4">
                The Weather App uses the WeatherAPI to fetch weather data. When you enter a location in the search bar and click the "Search" button, the app sends a request to the WeatherAPI to get the latest weather information for that location.
            </p>
            <p className="mb-4">
                The app then displays the weather details on the screen, allowing you to stay informed about the current conditions in your chosen area.
            </p>
            <h2 className="text-xl font-bold mb-2">Try It Out!</h2>
            <p className="mb-4">
                Want to see the Weather App in action? Check out our live demo:
            </p>
            <h2 className="text-xl font-bold mb-2">Contributions</h2>
            <p className="mb-4">
                We welcome contributions to improve the Weather App. If you find any bugs, have ideas for new features, or want to make the app even better, feel free to create issues and submit pull requests on our <a href="https://github.com/wlisesrivas/weather-easy">GitHub</a> repository.
            </p>
            <p>
                Let's work together to make the Weather App the best it can be!
            </p>
        </div>
    );
};
