export const formatCost = (cost: number): string => {
    if (cost === 0) {
        return 'Free'
    }
    return `¥${cost.toLocaleString('ja-JP')}`
}

export const formatDuration = (hours: number): string => {
    return hours === 1 ? '1 hr' : `${hours} hrs`
}