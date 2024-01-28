import { useState } from "react";
import "./carousel.css";
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";

type Slide = {
  src: string;
  alt: string;
};

type CarouselProps = {
  data: Slide[];
};

const Carousel: React.FC<CarouselProps> = ({ data }) => {
  const [slideIdx, setSlideIdx] = useState(0);

  // const nextSlide = () => setSlideIdx(slideIdx === data.length - 1 ? 0 : slideIdx + 1);

  // const prevSlide = () => setSlideIdx(slideIdx === 0 ? data.length - 1 : slideIdx - 1);

  const nextSlide = () => setSlideIdx((slideIdx + 1) % data.length);

  const prevSlide = () =>
    setSlideIdx((slideIdx - 1 + data.length) % data.length);

  return (
    <div className="carousel flex-center">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide} />
      {data.map((slide, idx) => (
        <img
          key={idx}
          src={slide.src}
          alt={slide.alt}
          className={slideIdx === idx ? "slide" : "slide slide-hidden"}
        />
      ))}
      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={nextSlide}
      />
      <span className="indicators">
        {data.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setSlideIdx(idx)}
            className={
              slideIdx === idx ? "indicator" : "indicator indicator-inactive"
            }
          ></button>
        ))}
      </span>
    </div>
  );
};

export default Carousel;
