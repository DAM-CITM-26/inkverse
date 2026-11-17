
import { useState } from 'react'

import Home from './pages/home'
import UniversePage from './pages/UniversePage'
import BottomNavigation from './components/navigation/BottomNavigation'

function App() {
  const [current, setCurrent] = useState('home')

  return (
    <>
      {current === 'home' && <Home />}

      {current === 'universes' && <UniversePage />}

      <BottomNavigation
        current={current}
        onNavigate={setCurrent}
      />
    </>
  )
}

export default App
