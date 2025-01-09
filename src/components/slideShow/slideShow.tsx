import React, { useState, useEffect } from "react";

type Slide = {
  imageUrl: string;
};

export type SlideshowProps = {
  slides: Slide[];
  name: string; // Main name (e.g., "Kung Fu Panda 4")
  subName: string; // Subtitle (e.g., "DreamWorks Animation")
  fadedColor?: string; // Background overlay color
  autoSlide?: boolean; // Enable/disable auto-sliding
  slideInterval?: number; // Time in ms for auto-sliding
  animationDuration?: number; // Time in ms for the slide transition
  loop?: boolean; // Enable/disable looping
  pauseOnHover?: boolean; // Pause auto-slide when hovered
  imageFit?: string; // Image fit mode
  className?: string; // Custom wrapper class
  nameclassName?: string; // Custom class for name text
  subclassName?: string; // Custom class for subName text
  borderRadius?: string; // Border radius for the slideshow container
  arrowImage?: string; // URL for the arrow image
};

const Slideshow: React.FC<SlideshowProps> = ({
  slides,
  name,
  subName,
  fadedColor = "rgba(0, 0, 0, 0.7)",
  autoSlide = true,
  slideInterval = 5000,
  animationDuration = 700,
  loop = true,
  pauseOnHover = true,
  className = "",
  imageFit = "cover",
  nameclassName = "",
  borderRadius = "10px",
  subclassName = "",
  arrowImage = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      loop ? (prevIndex + 1) % slides.length : Math.min(prevIndex + 1, slides.length - 1)
    );
  };

  const handleMouseEnter = () => {
    if (pauseOnHover) setIsPaused(true);
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) setIsPaused(false);
  };

  useEffect(() => {
    if (!autoSlide || isPaused) return;

    const interval = setInterval(nextSlide, slideInterval);
    return () => clearInterval(interval);
  }, [autoSlide, slideInterval, isPaused]);

  return (
    <div
      style={{ borderRadius: borderRadius }}
      className={`relative w-[50%] h-[300px] overflow-hidden ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-${animationDuration} ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.imageUrl})`,
            backgroundSize: imageFit,
            backgroundPosition: "center",
          }}
        ></div>
      ))}

      {/* Bottom Gradient Section with Text and Button */}
      <div
        className="absolute bottom-0 left-0 right-0 flex items-center bg-black opacity-70 justify-between p-4"
        style={{
            background:
            "opacity-50",
        }}
      >
        {/* Movie and Studio Info */}
        <div className="flex flex-col opacity-100">
          <h1 className={`font-bold text-white opacity-100 ${nameclassName}`}>{name}</h1>
          <p className={`text-gray-300 ${subclassName}`}>{subName}</p>
        </div>

        {/* Next Slide Button */}
        <button
          className="rounded-full p-2 opacity-100 text-white  transition"
          onClick={nextSlide}
        >
          <div className="relative w-11 h-11 bg-transparent rounded-full flex items-center justify-center">
            {/* Arrow Image */}
            {arrowImage && (
              <img
                src={arrowImage}
                alt="Next Slide"
                className="w-[70%] h-12 object-contain opacity-100"
              />
            )}
          </div>
        </button>
      </div>
    </div>
  );
};

export default Slideshow;
