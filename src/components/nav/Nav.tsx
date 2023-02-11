import { NavLink } from 'react-router-dom';
import styles from './Nav.module.scss';

function Nav() {
  const activeStyle = { textDecoration: 'underline' };
  return (
    <nav>
      <ul className={styles.ul}>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="about"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            À Propos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
