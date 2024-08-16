import { testimonials } from "../../data/testimonials.js";
import TestimonialsCard from "./TestimonialsCard";
import { useState, useEffect, useRef } from "react";
import clsx from "clsx";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [centerIndex, setCenterIndex] = useState(0);
  const [canMovePrev, setCanMovePrev] = useState(false);
  const [canMoveNext, setCanMoveNext] = useState(true);

  const cardsContainerRef = useRef(null);
  const cardWidth = 380; // 350px width + 15px gap * 2

  // the width of the screen (window.innerWidth) divided by card width
  const visibleCards = Math.floor(window.innerWidth / cardWidth);

  useEffect(() => {
    updateScale();

    updateButtonState();

    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, [currentIndex, centerIndex]);

  const updateScale = () => {
    const newCenterIndex = currentIndex + Math.floor(visibleCards / 2);
    setCenterIndex(newCenterIndex);
  };

  const updateButtonState = () => {
    setCanMovePrev(currentIndex > 0);
    setCanMoveNext(currentIndex < testimonials.length - visibleCards);
  };

  // this function will be called on onClick event
  // the value of direction is 1 when click on next btn
  // and will be -1 when click on previous btn
  const moveCards = (direction) => {
    let newIndex = currentIndex + direction;

    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex > testimonials.length - visibleCards) {
      newIndex = testimonials.length - visibleCards;
    }

    setCurrentIndex(newIndex);
    cardsContainerRef.current.style.transform = `translateX(${
      -newIndex * cardWidth
    }px)`;
  };

  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <ul className="testimonial-cards" ref={cardsContainerRef}>
          {testimonials.map((testimonial, index) => (
            <TestimonialsCard
              key={index}
              testimonial={testimonial}
              className={clsx({
                card: true,
                "scale-up": index === centerIndex,
                comma: index === centerIndex,
              })}
            />
          ))}
        </ul>

        <div className="testimonials-buttons">
          <button
            className="arrow-btn"
            onClick={() => moveCards(-1)}
            disabled={!canMovePrev}
          >
            <svg viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.4848 18.12L9.6224 12L15.4848 5.88L13.68 4L6 12L13.68 20L15.4848 18.12Z"
              ></path>
            </svg>
          </button>
          <button
            className="arrow-btn"
            onClick={() => moveCards(1)}
            disabled={!canMoveNext}
          >
            <svg className="forward" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.4848 18.12L9.6224 12L15.4848 5.88L13.68 4L6 12L13.68 20L15.4848 18.12Z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
