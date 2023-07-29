import Image from 'next/image'
import Skeleton from "@/components/Skeleton";

export default function Home() {
    return (
        <main className="container mx-auto">
            <div className="m-2">
                <h2>Loading xd</h2>
                <Skeleton rows={3} className="h-8"/>
            </div>
        </main>
    )
}
