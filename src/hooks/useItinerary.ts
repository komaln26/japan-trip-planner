import { useLocalStorage } from "./useLocalStorage";
import type { ItineraryItem } from "../types";

export function useItinerary() {
    const [items, setItems] = useLocalStorage<ItineraryItem[]>('itinerary', [])
    const addItem = (destinationId: string, day: number) => {
        const newItem = { id: crypto.randomUUID(), destinationId, day, time: '' }
        setItems([...items, newItem])
    }
    const removeItem = (id: string) => {
        setItems(items.filter((item) => item.id !== id))
    }

    const moveItem = (id: string, day: number) => {
        setItems(items.map((item) => (item.id === id ? { ...item, day } : item)))
    }

    return { items, addItem, removeItem, moveItem }
}