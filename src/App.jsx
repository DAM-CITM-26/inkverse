
import { useState } from 'react'

import Home from './pages/Home'
import UniversePage from './pages/UniversePage'
import BottomNavigation from './components/navigation/BottomNavigation'

function App() {
  const [current, setCurrent] = useState('home')
  const [selectedUniverse, setSelectedUniverse] = useState(null)

  // Navegar a un universo concreto.
  function handleNavigate(universeId) {
    setSelectedUniverse(universeId)
    setCurrent('universes')
  }

  return (
    <>
      {current === 'home' && (
        <Home onNavigate={handleNavigate} />
      )}

      {current === 'universes' && (
        <UniversePage universeId={selectedUniverse} />
      )}

      <BottomNavigation
        current={current}
        onNavigate={setCurrent}
      />
    </>
  )
}

export default App
