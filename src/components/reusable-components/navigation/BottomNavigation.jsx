import NavigationIcon from './NavigationIcon';
import HomeIcon from '../../../assets/icons/home-icon.svg?react';
import DiscoveryIcon from '../../../assets/icons/discover-icon.svg?react';
import LibraryIcon from '../../../assets/icons/library-icon.svg?react';
import ProfileIcon from '../../../assets/icons/profile-icon.svg?react';
import UniverseIcon from '../../../assets/icons/universe-icon.svg?react';

/**
 * Los cinco destinos de la app (en la barra solo se ven los iconos). Son siempre los mismos en todas las páginas;
 * solo cambia cuál está seleccionado.
 */
const DESTINATIONS = [
  { id: 'home', label: 'Inicio', icon: <HomeIcon /> },
  { id: 'discovery', label: 'Explorar', icon: <DiscoveryIcon /> },
  { id: 'universes', label: 'Universos', icon: <UniverseIcon /> },
  { id: 'library', label: 'Biblioteca', icon: <LibraryIcon className="icon-fill" /> },
  { id: 'profile', label: 'Perfil', icon: <ProfileIcon /> },
];

/**
 * BottomNavigation
 * Barra de navegación principal con cinco destinos.
 *
 * Props:
 *  - current:    id del destino seleccionado ('home' | 'discovery' | 'universes' | 'library' | 'profile')
 *  - onNavigate: función que recibe el id del destino pulsado
 */
export default function BottomNavigation({ current, onNavigate }) {
  return (
    <nav className="pestanas" aria-label="Navegación principal">
      {DESTINATIONS.map(({ id, label, icon }) => (
        <NavigationIcon
          key={id}
          icon={icon}
          label={label}
          selected={current === id}
          onClick={() => onNavigate?.(id)}
        />
      ))}
    </nav>
  );
}