import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

export default function WeatherApp() {
    const [weatherinfo, setWeatherinfo] = useState({
        city: "Hyderabad",
        weather: "Rain",
        description: "scattered clouds",
        humidity: 74,
        feelslike: 31.71,
        temp: 28.23,
        temp_max: 28.23,
        temp_min: 27.73,
    });

    // Function to update weather info
    const updateinfo = (newInfo) => {
        setWeatherinfo(newInfo);
    };

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Weather App</h1>
            {/* Passing the updateinfo function to SearchBox as updateInfo prop */}
            <SearchBox updateInfo={updateinfo} />
            <InfoBox info={weatherinfo} />
        </div>
    );
}
