import { useState } from 'react'
import BottomNavigation from './components/reusable-components/navigation/BottomNavigation'

function App() {
  const [current, setCurrent] = useState('home')

  return (
    <>
      <main>
        <h1>Inkverse</h1>
      </main>

      <BottomNavigation current={current} onNavigate={setCurrent} />
    </>
  )
}

export default App