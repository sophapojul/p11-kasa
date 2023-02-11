import Star from 'components/Star';
import ILodging from 'interfaces/ILodging';
import styles from './Rating.module.scss';

function Rating({ rating }: { rating: ILodging['rating'] }) {
  const starsNumber = Array.from(Array(5).keys());
  return (
    <ul className={styles.rating}>
      {starsNumber.map((item, i) => {
        const fill = i < Number(rating) ? '#ff6060' : '#e3e3e3';
        return (
          <li key={item.toString()}>
            <Star fill={fill} />
          </li>
        );
      })}
    </ul>
  );
}
export default Rating;
