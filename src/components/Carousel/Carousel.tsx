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
  heading?: string; // Heading text displayed above the carousel
}

const Carousel: React.FC<CarouselProps> = ({
  slides,
  interval = 3000,
  width = "293px",
  height = "146px",
  heading = "", // Default value for heading is empty
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
    <div className="relative">
      {/* Title with Bullet Dot */}
      {heading && (
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-2.5 h-2.5 rounded-full bg-white" /> {/* Bullet dot */}
          <h2 className="text-white font-semibold">{heading}</h2>
        </div>
      )}

      {/* Carousel Container */}
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
      </div>
    </div>
  );
};

export default Carousel;
