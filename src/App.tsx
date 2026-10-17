import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import ExplorePage from './pages/ExplorePage'
import ItineraryPage from './pages/ItineraryPage'
import SavedPage from './pages/SavedPage'
import { Analytics } from '@vercel/analytics/react'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ExplorePage />}></Route>
          <Route path='/itinerary' element={<ItineraryPage />}></Route>
          <Route path='/saved' element={<SavedPage />}></Route>
        </Routes>
      </BrowserRouter>
      <Analytics
        beforeSend={(event) =>
          localStorage.getItem('skip-analytics') === 'true' ? null : event
        } />
    </>
  )
}

export default App
