import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import ExplorePage from './pages/ExplorePage'
import ItineraryPage from './pages/ItineraryPage'
import SavedPage from './pages/SavedPage'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ExplorePage />}></Route>
        <Route path='/itinerary' element={<ItineraryPage />}></Route>
        <Route path='/saved' element={<SavedPage />}></Route>
      </Routes>
    </BrowserRouter >
  )
}

export default App
