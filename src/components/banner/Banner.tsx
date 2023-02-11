import { ReactNode } from 'react';
import styles from './Banner.module.scss';

interface IImg {
  title?: ReactNode;
  backgroundImage: string;
}
const defaultProps = { title: null };
function Banner({ backgroundImage, title = null }: IImg) {
  return (
    <section
      style={{ backgroundImage: `url( ${backgroundImage} )` }}
      className={styles.section}
    >
      <p className={styles.title}>{title}</p>
    </section>
  );
}
Banner.defaultProps = defaultProps;
export default Banner;
