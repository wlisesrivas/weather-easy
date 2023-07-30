import React from 'react';
import {WeatherProps} from "@/types/weather-data";
import WeatherTemp from "@/components/WeatherTemp";

export default function Weather({weather}: WeatherProps) {

    const today = new Date();

    const descriptions = weather.weather.map((item) => {
        return <div key={item.id} className="text-sm text-gray-500">{item.main} ({item.description})</div>
    })

    return (
        <div className="m-2 border border-gray-200 p-4 rounded rounded-b">
            <div className="mb-5 text-sm text-gray-500">
                Results for <b>{weather.name}, {weather.sys.country}</b>
            </div>
            <div className="flex justify-around">
                <WeatherTemp weather={weather} />
                <div className="flex justify-center">
                    <div className="flex flex-col">
                        <div className="font-bold text-xl">Weather</div>
                        <div className="text-sm text-gray-500">{today.toDateString()}</div>
                        {descriptions}
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-around mt-6">
                <div className="flex flex-col items-center">
                    <div className="font-medium text-sm">Wind</div>
                    <div className="text-sm text-gray-500">{weather.wind.speed} km/h</div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="font-medium text-sm">Humidity</div>
                    <div className="text-sm text-gray-500">{weather.main.humidity}%</div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="font-medium text-sm">Visibility</div>
                    <div className="text-sm text-gray-500">{weather.visibility / 1000}km</div>
                </div>
            </div>
        </div>
    );
}
