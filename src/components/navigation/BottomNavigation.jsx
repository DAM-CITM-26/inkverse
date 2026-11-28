
import { NavLink } from 'react-router-dom'

import NavigationIcon from './NavigationIcon'
import HomeIcon from '../../assets/icons/home-icon.svg?react'
import DiscoveryIcon from '../../assets/icons/discover-icon.svg?react'
import LibraryIcon from '../../assets/icons/library-icon.svg?react'
import ProfileIcon from '../../assets/icons/profile-icon.svg?react'
import UniverseIcon from '../../assets/icons/universe-icon.svg?react'

/**
 * Los cinco destinos principales de navegación.
 */
const DESTINATIONS = [
  { id: 'home', label: 'Inicio', path: '/', icon: <HomeIcon /> },
  { id: 'discovery', label: 'Explorar', path: '/discover', icon: <DiscoveryIcon /> },
  { id: 'universes', label: 'Universos', path: '/universes', icon: <UniverseIcon /> },
  { id: 'library', label: 'Biblioteca', path: '/library', icon: <LibraryIcon className="icon-fill" /> },
  { id: 'profile', label: 'Perfil', path: '/profile', icon: <ProfileIcon className="icon-fill" /> },
]

/**
 * Barra de navegación principal con cinco destinos.
 * NavLink gestiona automáticamente la navegación y el estado activo.
 */
export default function BottomNavigation() {
  return (
    <nav className="pestanas" aria-label="Navegación principal">
      {DESTINATIONS.map(({ id, label, path, icon }) => (
        <NavLink
          key={id}
          to={path}
          end={path === '/'}
          className={({ isActive }) => isActive ? 'nav-link-activo' : 'nav-link'}
          aria-label={label}
        >
          {({ isActive }) => (
            <NavigationIcon
              icon={icon}
              label={label}
              selected={isActive}
            />
          )}
        </NavLink>
      ))}
    </nav>
  )
}
