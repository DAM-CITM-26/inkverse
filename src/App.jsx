
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import UniversePage from './pages/UniversePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<MainLayout />}>

          {/* Pantallas principales */}
          <Route path="/" element={<HomePage />} />
          <Route path="/discover" element={<p>Discovery</p>} />
          <Route path="/universes" element={<p>My Universes</p>} />
          <Route path="/library" element={<p>My Library</p>} />
          <Route path="/profile" element={<p>Profile</p>} />
          <Route path="/profile/notifications" element={<p>Notifications</p>} />

          {/* Pantallas de detalle */}
          <Route path="/universe/:id" element={<UniversePage />} />
          <Route path="/work/:id" element={<p>Work detail</p>} />
          <Route path="*" element={<p>Page not found</p>} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
