
import { Outlet } from 'react-router-dom'
import BottomNavigation from '../components/navigation/BottomNavigation'

function MainLayout() {
  return (
    <>
      <Outlet />
      <BottomNavigation />
    </>
  )
}

export default MainLayout
