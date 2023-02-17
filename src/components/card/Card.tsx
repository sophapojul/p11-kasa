import { ILodging } from 'interfaces';
import styles from './Card.module.scss';

function Card({
  cover,
  title,
}: {
  cover: ILodging['cover'];
  title: ILodging['title'];
}) {
  return (
    <figure className={styles.figure}>
      <img src={cover} alt={title} />
      <figcaption>{title}</figcaption>
    </figure>
  );
}
export default Card;
