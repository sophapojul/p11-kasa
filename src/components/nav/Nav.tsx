import styles from './Nav.module.scss';

function Nav() {
  return (
    <nav>
      <ul className={styles.ul}>
        <li>
          <a href="/">Accueil</a>
        </li>
        <li>
          <a href="about">À Propos</a>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
