import { ReactNode } from 'react';
import styles from './Banner.module.scss';

interface IImg {
  title?: ReactNode;
  background: string;
}
const defaultProps = { title: null };
function Banner({ background, title = null }: IImg) {
  return (
    <section id="banner" style={{ background }} className={styles.section}>
      <p className={styles.title}>{title}</p>
    </section>
  );
}
Banner.defaultProps = defaultProps;
export default Banner;
