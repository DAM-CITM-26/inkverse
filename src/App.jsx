import { useState } from 'react'
import Home from './pages/Home'
import BottomNavigation from './components/navigation/BottomNavigation'

function App() {
  const [current, setCurrent] = useState('home')

  return (
    <>
      <Home />
      <BottomNavigation current={current} onNavigate={setCurrent} />
    </>
  )
}

export default App