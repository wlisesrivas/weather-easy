import {WeatherProps} from "@/types/weather-data";
import Image from "next/image";

export default function WeatherTempIcon({weather}: WeatherProps) {

    // Weather conditions
    // https://openweathermap.org/weather-conditions
    // const weatherIcon = weather.weather[0].main.toLowerCase();
    const weatherIcon = weather.weather[0].icon;
    const iconURL = `/img/${weatherIcon}.png`;

    return (
        <div className="flex flex-col">
            <Image className="-mt-4"
                   src={iconURL}
                   alt={weatherIcon}
                   blurDataURL={iconURL}
                   width={92}
                   height={92}
                   placeholder="blur" />
        </div>
    );
}
