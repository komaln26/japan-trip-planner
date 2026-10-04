
interface FilterPillProps {
    label: string
    isActive: boolean
    onClick: () => void
}


const FilterPill = ({ label, isActive, onClick }: FilterPillProps) => {
    return (
        <button type="button" onClick={onClick} aria-pressed={isActive}
            className={`rounded-full border px-4 py-1.5 text-sm
                 ${isActive
                    ? 'border-teal-700 bg-teal-700 text-white'
                    : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
                }`}
        >{label}</button>
    )
}

export default FilterPill