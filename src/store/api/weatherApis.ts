"use client";

import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {API_URL, OPEN_WEATHER_API_KEY} from "@/utils/api";

const weatherApis = createApi({
    reducerPath: "weather",
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
    }),
    endpoints: (builder) => {
        return {
            fetchWeather: builder.query({
                query: (searchTerm: string) => {
                    return {
                        url: "",
                        params: {
                            appid: OPEN_WEATHER_API_KEY,
                            units: "metric",
                            q: searchTerm
                        }
                    }
                }
            })
        }
    }
})

export const { useLazyFetchWeatherQuery } = weatherApis;
export {weatherApis}
