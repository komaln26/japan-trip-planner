import { Link } from "react-router-dom"
import { destinations } from "../data/destinations"
import { useLocalStorage } from "../hooks/useLocalStorage"

const DAYS = [1, 2, 3]
const SLOTS = ["Morning", "Afternoon", "Evening"]

const ItineraryPage = () => {
    const [savedIds] = useLocalStorage<string[]>('saved-ids', [])
    const savedDestinations = destinations.filter((d) => savedIds.includes(d.id))

    return (
        <main className="mx-auto max-w-6xl p-4">
            <h1 className="text-2xl font-semibold">Itinerary</h1>

            <div className="mt-3 rounded-lg border border-amber-300 bg-amber-50 p-3 text-sm text-amber-900">
                🚧 The itinerary builder is in progress. This is the planned layout; adding places and cost totals are coming next.
            </div>

            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
                {/* Day-by-day plan */}
                <section className="space-y-4 lg:col-span-2">
                    {DAYS.map((day) => (
                        <div key={day} className="rounded-lg border border-gray-200 p-4">
                            <h2 className="font-semibold">Day {day}</h2>
                            <ul className="mt-3 space-y-2">
                                {SLOTS.map((slot) => (
                                    <li key={slot} className="flex items-center justify-between rounded-md bg-gray-50 px-3 py-2 text-sm">
                                        <span className="text-gray-600">{slot}</span>
                                        <button
                                            disabled
                                            className="cursor-not-allowed rounded border border-dashed border-gray-300 px-2 py-1 text-gray-400"
                                        >
                                            + Add a place
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </section>

                {/* Side panel */}
                <aside className="space-y-4">
                    <div className="rounded-lg border border-gray-200 p-4">
                        <h2 className="font-semibold">Your saved places</h2>
                        {savedDestinations.length === 0 ? (
                            <p className="mt-2 text-sm text-gray-600">
                                Nothing saved yet. <Link to="/" className="underline">Explore places</Link> and tap Save.
                            </p>
                        ) : (
                            <ul className="mt-2 space-y-1 text-sm">
                                {savedDestinations.map((d) => (
                                    <li key={d.id} className="rounded bg-gray-50 px-3 py-2">
                                        {d.name}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <div className="rounded-lg border border-gray-200 p-4">
                        <h2 className="font-semibold">Estimated trip cost</h2>
                        <p className="mt-1 text-xs text-gray-500">Coming soon</p>
                        <dl className="mt-3 space-y-1 text-sm text-gray-400">
                            <div className="flex justify-between"><dt>Entry fees</dt><dd>¥ —</dd></div>
                            <div className="flex justify-between"><dt>Transport</dt><dd>¥ —</dd></div>
                            <div className="flex justify-between border-t pt-1"><dt>Total</dt><dd>¥ —</dd></div>
                        </dl>
                    </div>
                </aside>
            </div>
        </main>
    )
}

export default ItineraryPage