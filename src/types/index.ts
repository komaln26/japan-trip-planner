export interface Destination {
    id: string;
    name: string;
    city: string;
    region: string;
    description: string;
    imageUrl: string;
    category: string;
    estimatedCost: number;
    estimatedDuration: number;
}

export interface ItineraryItem {
    id: string;
    destinationId: string;
    day: number;
    time: string;
}

export interface SavedPlace {
    destinationId: string;
    savedAt: string;
}