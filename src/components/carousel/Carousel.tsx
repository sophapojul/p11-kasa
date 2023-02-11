import { useState } from 'react';
import CarouselControls from './CarouselControls';
import CarouselItem from './CarouselItem';
import styles from './Carousel.module.scss';

export default function Carousel({ slides }: { slides: string[] }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentSlideIndex === 0;
    const index = !isFirstSlide ? currentSlideIndex - 1 : slides.length - 1;
    setCurrentSlideIndex(index);
  };

  const nextSlide = () => {
    const isLastSlide = currentSlideIndex === slides.length - 1;
    const index = !isLastSlide ? currentSlideIndex + 1 : 0;
    setCurrentSlideIndex(index);
  };
  return (
    <section className={styles.section}>
      <ul className={styles.carousel}>
        {slides.map((slide) => (
          <CarouselItem key={slide} slide={slide} index={currentSlideIndex} />
        ))}
      </ul>
      <CarouselControls
        prevSlide={prevSlide}
        nextSlide={nextSlide}
        length={slides.length}
      />
      {slides.length > 1 ? (
        <div className={styles.span}>
          {`${currentSlideIndex + 1}/${slides.length}`}
        </div>
      ) : null}
    </section>
  );
}
