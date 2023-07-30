"use client";

import {WeatherProps} from "@/types/weather-data";
import WeatherTempIcon from "@/components/WeatherTempIcon";

export default function WeatherTemp({weather}: WeatherProps) {
    return (
        <div className="flex">
            <WeatherTempIcon weather={weather} />
            <div className="flex gap-2 ml-1">
                <div className="flex font-medium text-6xl">{weather.main.temp.toFixed(0)}</div>
                <div className="flex font-light">
                    <div className="font-semibold">°C</div>
                    <div className="text-gray-400">|</div>
                    <div>°F</div>
                </div>
            </div>
        </div>
    );
}
