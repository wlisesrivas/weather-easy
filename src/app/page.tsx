"use client";

import Skeleton from "@/components/Skeleton";
import Search from "@/components/Search";
import {useLazyFetchWeatherQuery} from "@/store/api/weatherApis";
import Weather from "@/components/Weather";
import FunnyText from "@/components/FunnyText";

export default function Home() {

    const [getData, results] = useLazyFetchWeatherQuery();

    const handleSearch = async (search: string) => {
        await getData(search);
    }

    let content;
    if (results.isFetching) {
        content = <Skeleton rows={1} className="m-2 h-52"/>;
    } else if (results.error) {
        content = <div className="text-red-700">Error trying to fetch data, see logs for more details.</div>;
        console.error(results);
    } else if (results.data) {
        content = <Weather weather={results.data} />;
    } else {
        content = <FunnyText />
    }

    return (
        <main className="container mx-auto">
            <Search onSearch={handleSearch} />
            {content}
        </main>
    )
}
