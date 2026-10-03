import type { Destination } from "../types"
import { formatCost, formatDuration } from "../utils/calculateCost"
import { categoryColours } from "../utils/categoryStyles"

interface DestinationCardProps {
    destination: Destination
    isSaved: boolean;
    onToggleSave: (id: string) => void;
}

const DestinationCard = ({ destination, isSaved, onToggleSave }: DestinationCardProps) => {
    const category = destination.category.charAt(0).toUpperCase() + destination.category.slice(1)
    const colour = categoryColours[destination.category]
    return (
        <article className="overflow-hidden rounded-xl border border-gray-200 bg-white">
            <div className={`relative h-28 ${colour}`}>
                <button className={`absolute top-3 right-3 rounded-full ${isSaved ? 'bg-amber-300' : 'bg-white/90'} px-3 py-1 text-xs font-medium`} type="button" onClick={() => onToggleSave(destination.id)}>{isSaved ? 'Saved' : 'Save'}</button>
                <span className="absolute bottom-3 right-3 rounded-full bg-white/90 px-2.5 py-0.5 text-xs font-medium text-gray-700">{category}</span>
            </div>
            <div className="p-4">
                <h3 className="text-lg font-semibold">{destination.name}</h3>
                <p className="text-sm text-gray-500">{destination.city} · {destination.region}</p>
                <p className="mt-2 line-clamp-3 text-sm text-gray-600">{destination.description}</p>
                <footer className="mt-3 flex justify-between border-t pt-3 text-sm">
                    <span className="font-medium">{formatCost(destination.estimatedCost)}</span>
                    <span className="text-gray-500">{formatDuration(destination.estimatedDuration)}</span>
                </footer>
            </div>
        </article>
    )
}

export default DestinationCard