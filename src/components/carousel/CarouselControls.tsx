import ArrowBackward from 'components/arrows/ArrowBackward';
import ArrowForward from 'components/arrows/ArrowForward';
import styles from './Carousel.module.scss';

export default function CarouselControls({
  prevSlide,
  nextSlide,
  length,
}: {
  prevSlide: () => void;
  nextSlide: () => void;
  length: number;
}) {
  return length > 1 ? (
    <>
      <button
        type="button"
        className={`${styles.buttons}`}
        style={{ placeSelf: 'center left' }}
        onClick={prevSlide}
      >
        <ArrowBackward fill="white" />
      </button>
      <button
        type="button"
        className={`${styles.buttons}`}
        style={{ placeSelf: 'center right' }}
        onClick={nextSlide}
      >
        <ArrowForward fill="white" />
      </button>
    </>
  ) : null;
}
