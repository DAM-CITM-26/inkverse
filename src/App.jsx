
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import UniversePage from './pages/UniversePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Páginas con navegación inferior */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />

          {/* Rutas pendientes de implementar */}
          <Route path="/discover" element={<p>Discovery</p>} />
          <Route path="/universes" element={<p>My Universes</p>} />
          <Route path="/library" element={<p>My Library</p>} />
          <Route path="/profile" element={<p>Profile</p>} />
          <Route path="/profile/notifications" element={<p>Notifications</p>} />
        </Route>

        {/* Detalles */}
        <Route path="/universe/:id" element={<UniversePage />} />
        <Route path="/work/:id" element={<p>Work detail</p>} />

        {/* Ruta desconocida */}
        <Route path="*" element={<p>Page not found</p>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
