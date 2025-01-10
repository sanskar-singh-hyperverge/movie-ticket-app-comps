import React, { useState, useEffect } from "react";

interface Slide {
  image: string;
  title?: string;
  description?: string;
  onClick?: () => void; // Function to execute when the slide is clicked
}

export interface CarouselProps {
  slides: Slide[];
  interval?: number; // Autoscroll interval in milliseconds
  width?: string; // Width of the carousel
  height?: string; // Height of the carousel
}

const Carousel: React.FC<CarouselProps> = ({
  slides,
  interval = 3000,
  width = "293px",
  height = "146px",
}) => {
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

  return (
    <div
      className="relative overflow-hidden rounded-lg"
      style={{ width, height }}
    >
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
            className="w-full flex-shrink-0 relative"
            style={{ width, height }}
            onClick={slide.onClick} // Trigger onClick if provided
          >
            <img
              src={slide.image}
              alt={slide.title || "Carousel Image"}
              className="w-full h-full object-cover rounded-lg cursor-pointer"
            />
            {(slide.title || slide.description) && (
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
                {slide.title && (
                  <h2 className="text-sm font-bold">{slide.title}</h2>
                )}
                {slide.description && (
                  <p className="text-xs">{slide.description}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-500"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
