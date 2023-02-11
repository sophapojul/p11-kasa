import Logo from 'components/Logo';
import Nav from 'components/nav/Nav';
import styles from './Header.module.scss';

function Header() {
  // TODO: Add a link to the home page on the logo
  return (
    <header className={styles.header}>
      <Logo fill="#ff6060" />
      <Nav />
    </header>
  );
}
export default Header;
