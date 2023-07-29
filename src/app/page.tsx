import Skeleton from "@/components/Skeleton";
import Button from "@/components/Button";

export default function Home() {
    return (
        <main className="container mx-auto">
            <div className="m-2">
                <h2>Loading xd</h2>
                <Skeleton rows={3} className="h-8"/>
                <Button style={'success'} rounded>Save Now</Button>
            </div>
        </main>
    )
}
