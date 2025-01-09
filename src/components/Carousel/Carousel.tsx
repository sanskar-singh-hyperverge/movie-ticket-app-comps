import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay"; // Import Autoplay styles
import Card from "../Card/Card";

// Define the type for card data
type CardData = {
  id: number;
  backgroundImages?: string[]; // Array of background image URLs
  backgroundVideo?: string; // Optional: Background video URL
  backgroundColor?: string; // Optional: Background color
  title?: string; // Optional: Title text
  subtitle?: string; // Optional: Subtitle text
  description?: string; // Optional: Description text
};

// Props type for the Carousel component
export type CarouselProps = {
  cardsData: CardData[];
  slidesPerView?: number; // Optional: Number of slides to display at a time
  autoplay?: boolean; // Optional: Enable/disable autoplay
  autoplayDelay?: number; // Optional: Delay for autoplay in milliseconds
  height?: string; // Optional: Height class for the container
};

const Carousel: React.FC<CarouselProps> = ({
  cardsData,
  slidesPerView = 1, // Default: 1 slide per view
  autoplay = false, // Default: no autoplay
  autoplayDelay = 2000, // Default: 2 seconds
  height = "h-64", // Default Tailwind height class
}) => {
  return (
    <div className={`w-full ${height}`}>
      <Swiper
        className="h-full"
        spaceBetween={16} // Gap between slides (in pixels)
        slidesPerView={slidesPerView} // Number of visible slides
        loop={true} // Enable looping
        modules={autoplay ? [Autoplay] : []} // Include Autoplay module conditionally
        autoplay={
          autoplay
            ? {
                delay: autoplayDelay,
                disableOnInteraction: false,
              }
            : undefined // Remove autoplay configuration if autoplay is false
        }
      >
        {cardsData.map((card) => (
          <SwiperSlide key={card.id} className="h-full">
            <Card
              id={card.id}
              backgroundImages={card.backgroundImages} // Array of images
              backgroundVideo={card.backgroundVideo} // Background video URL if available
              backgroundColor={card.backgroundColor}
              rounded="rounded-lg"
              borderStyle="border border-gray-300"
              justifyContent="end"
              alignItems="start"
              className="w-full h-full flex flex-col flex-grow justify-end items-start overflow-hidden"
            >
              {/* Content inside the card */}
              <div className="p-4 text-white">
                {card.title && <h3 className="text-xl font-bold">{card.title}</h3>}
                {card.subtitle && (
                  <p className="text-sm text-gray-300 mt-1">{card.subtitle}</p>
                )}
                {card.description && (
                  <p className="mt-4 text-gray-200 text-sm line-clamp-3">
                    {card.description}
                  </p>
                )}
              </div>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
