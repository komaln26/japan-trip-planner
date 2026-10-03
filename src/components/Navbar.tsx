import { NavLink } from "react-router-dom"

const Navbar = () => {
    const linkClass = ({ isActive }: { isActive: boolean }) => isActive ? 'font-semibold text-teal-700 underline' : 'text-gray-600 hover:text-gray-900'
    return (
        <header className="border-b border-gray-200 bg-white">
            <nav aria-label="Main" className="mx-auto flex max-w-6xl items-center justify-between p-4">
                <span className="text-lg font-semibold">Japan Trip Planner</span>
                <ul className="flex gap-4">
                    <li>
                        <NavLink to="/" end className={linkClass}>Explore</NavLink>
                    </li>
                    <li>
                        <NavLink to="/saved" className={linkClass}>Saved</NavLink>
                    </li>
                    <li>
                        <NavLink to="/itinerary" className={linkClass}>Itinerary</NavLink>
                    </li>
                </ul>

            </nav>

        </header>
    )
}

export default Navbar