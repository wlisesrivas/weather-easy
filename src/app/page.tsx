"use client";

import Skeleton from "@/components/Skeleton";
import Search from "@/components/Search";
import {useLazyFetchWeatherQuery} from "@/store/api/weatherApis";
import Weather from "@/components/Weather";

export default function Home() {

    const [getData, results] = useLazyFetchWeatherQuery();

    const handleSearch = async (search: string) => {
        await getData(search);
    }

    return (
        <main className="container mx-auto">
            <Search onSearch={handleSearch} />
            {results.isFetching && <Skeleton rows={3} className="m-2 h-8"/>}
            {results.data && <Weather weather={results.data} />}
            <div className="text-lg">
                Want to go to the beach today?
            </div>
        </main>
    )
}
