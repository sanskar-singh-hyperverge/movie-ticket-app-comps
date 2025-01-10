import React, { useState, useEffect } from "react";

interface Slide {
  image: string;
  title?: string;
  description?: string;
}

export interface CarouselProps {
  slides: Slide[];
  interval?: number; // Autoscroll interval in milliseconds
}

const Carousel: React.FC<CarouselProps> = ({ slides, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Autoscroll logic
  useEffect(() => {
    const autoScroll = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(autoScroll); // Cleanup on component unmount
  }, [slides.length, interval]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-lg">
      {/* Slides */}
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 h-[500px] relative"
          >
            <img
              src={slide.image}
              alt={slide.title || "Carousel Image"}
              className="w-full h-full object-cover rounded-lg"
            />
            {(slide.title || slide.description) && (
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
                {slide.title && (
                  <h2 className="text-lg font-bold">{slide.title}</h2>
                )}
                {slide.description && (
                  <p className="text-sm">{slide.description}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
      >
        ❮
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-500"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
