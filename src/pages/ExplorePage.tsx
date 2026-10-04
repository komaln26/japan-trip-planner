import { useState } from "react"
import FilterPill from "../components/FilterPill"
import DestinationCard from "../components/DestinationCard"
import { destinations } from "../data/destinations"
import { useLocalStorage } from "../hooks/useLocalStorage"

const ExplorePage = () => {

    const [savedIds, setSavedIds] = useLocalStorage<string[]>('saved-ids', [])
    const [selectedCity, setSelectedCity] = useState('All')
    const [query, setQuery] = useState('')
    const cities = ['All', 'Shizuoka', 'Hiroshima', 'Nagoya']
    const visibleDestinations = destinations.filter(
        (d) =>
            (selectedCity === 'All' || d.city === selectedCity) &&
            d.name.toLowerCase().includes(query.toLowerCase())
    )
    const toggleSave = (id: string) => {
        if (savedIds.includes(id)) {
            setSavedIds(savedIds.filter((savedId) => savedId !== id))
        } else {
            setSavedIds([...savedIds, id])
        }
    }

    return (
        <main className="mx-auto max-w-6xl p-4">
            <label htmlFor="search" className="sr-only">
                Search places
            </label>
            <input
                id="search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search places"
                className="mb-3 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
            />
            <div className="flex flex-wrap gap-2">
                {cities.map((city) => (
                    <FilterPill key={city} label={city} isActive={selectedCity === city} onClick={() => setSelectedCity(city)} />
                ))}

            </div>
            {visibleDestinations.length === 0 && (
                <p className="mt-4 text-gray-600">No places match your search</p>
            )}
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {visibleDestinations.map((d) => (
                    <DestinationCard key={d.id} destination={d} isSaved={savedIds.includes(d.id)} onToggleSave={toggleSave} />
                ))}
            </div>
        </main>
    )
}

export default ExplorePage