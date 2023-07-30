"use client";

import {useState} from "react";
import Button from "@/components/Button";

export default function Search({onSearch}: {onSearch: (search: string) => void}) {

    const [search, setSearch] = useState<string>("");

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        onSearch(search);
        setSearch("");
    }

    return (
        <form onSubmit={handleSubmit} className="flex items-center">
            <input className="p-4 w-full m-2 border border-gray-200 rounded"
                   value={search}
                   onChange={(e) => setSearch(e.target.value)}
                   placeholder="Type location here" />
            <Button style={'success'}
                    disabled={search.length < 3}
                    className="flex"
                    type={'submit'} rounded>Submit</Button>
        </form>
    );
}
