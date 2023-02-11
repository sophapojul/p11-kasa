import styles from './Carousel.module.scss';

interface ISlide {
  slide: string;
  index: number;
}

export default function CarouselItem({ slide, index }: ISlide) {
  return (
    <li
      className={styles.li}
      style={{ transform: `translateX(-${index * 100}%)` }}
    >
      <img src={slide} alt={slide} className={styles.img} />
    </li>
  );
}
