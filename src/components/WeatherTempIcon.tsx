import {WeatherProps} from "@/types/weather-data";
import Image from "next/image";

export default function WeatherTempIcon({weather}: WeatherProps) {

    // Weather conditions
    // https://openweathermap.org/weather-conditions
    // const weatherIcon = weather.weather[0].main.toLowerCase();
    const weatherIcon = weather.weather[0].icon;
    const iconURL = `https://openweathermap.org/img/wn/${weatherIcon}@4x.png`;

    return (
        <div className="flex flex-col">
            <Image src={iconURL} width={100} height={100} alt={weatherIcon} />
        </div>
    );
}
