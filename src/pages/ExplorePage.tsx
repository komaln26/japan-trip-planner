import DestinationCard from "../components/DestinationCard"
import { destinations } from "../data/destinations"
import { useLocalStorage } from "../hooks/useLocalStorage"

const ExplorePage = () => {

    const [savedIds, setSavedIds] = useLocalStorage<string[]>('saved-ids', [])
    const toggleSave = (id: string) => {
        if (savedIds.includes(id)) {
            setSavedIds(savedIds.filter((savedId) => savedId !== id))
        } else {
            setSavedIds([...savedIds, id])
        }
    }

    return (
        <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((d) => (
                <DestinationCard key={d.id} destination={d} isSaved={savedIds.includes(d.id)} onToggleSave={toggleSave} />
            ))}
        </div>
    )
}

export default ExplorePage