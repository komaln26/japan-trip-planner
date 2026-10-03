import { Link } from "react-router-dom"
import DestinationCard from "../components/DestinationCard"
import { destinations } from "../data/destinations"
import { useLocalStorage } from "../hooks/useLocalStorage"

const SavedPage = () => {
    const [savedIds, setSavedIds] = useLocalStorage<string[]>('saved-ids', [])
    const savedDestinations = destinations.filter((d) => savedIds.includes(d.id))
    const removeSaved = (id: string) => {
        setSavedIds(savedIds.filter((savedId) => savedId !== id))
    }
    return (
        <main className="mx-auto max-w-6xl p-4">
            <h1 className="text-2xl font-semibold">Saved places</h1>
            {savedDestinations.length === 0 ? (
                <p className="mt-4 text-gray-600">
                    Nothing saved yet. <Link to="/" className="underline">Explore places</Link> and tap Save.
                </p>
            ) : (
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {savedDestinations.map((d) => (
                        <DestinationCard key={d.id} destination={d} isSaved={true} onToggleSave={removeSaved} />
                    ))}
                </div>
            )}

        </main>
    )
}

export default SavedPage