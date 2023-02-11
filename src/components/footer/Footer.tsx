import Logo from 'components/Logo';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <Logo fill="white" />
      <p>&copy; {new Date().getFullYear()} Kasa. All rights reserved</p>
    </footer>
  );
}
export default Footer;
