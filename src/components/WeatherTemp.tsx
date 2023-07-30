"use client";

import {useState} from "react";
import {WeatherProps} from "@/types/weather-data";
import WeatherTempIcon from "@/components/WeatherTempIcon";
import classNames from "classnames";

export default function WeatherTemp({weather}: WeatherProps) {
    const [tempType, setTempType] = useState<'C' | 'F'>('C');

    const celsiusClasses = classNames('cursor-pointer', {'font-semibold': tempType === 'C'});
    const fahrenheitClasses = classNames('cursor-pointer', {'font-semibold': tempType === 'F'});

    let temperature: number = +weather.main.temp.toFixed(0);
    if (tempType === 'F') {
        temperature = +((temperature * 9/5) + 32).toFixed(0);
    }

    const changeTempType = (degreeType: 'C' | 'F'): void => {
        setTempType(degreeType);
    }

    return (
        <div className="flex">
            <WeatherTempIcon weather={weather}/>
            <div className="flex gap-2 ml-1">
                <div className="flex font-medium text-6xl">{temperature}</div>
                <div className="flex font-light">
                    <div className={celsiusClasses}
                         onClick={() => changeTempType('C')}>°C</div>
                    <div className="text-gray-400">|</div>
                    <div className={fahrenheitClasses}
                         onClick={() => changeTempType('F')}>°F</div>
                </div>
            </div>
        </div>
    );
}
