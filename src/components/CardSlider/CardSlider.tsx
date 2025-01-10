import React from "react";

export interface CardProps {
  image: string; // Background image
  title: string;
  description?: string;
  cardWidth?: string; // Dynamic width
  cardHeight?: string; // Dynamic height
}

export interface CardSliderProps {
  cardsData: Omit<CardProps, "cardWidth" | "cardHeight">[]; // Exclude width/height from input data
  cardWidth?: string; // Optional width for all cards
  cardHeight?: string; // Optional height for all cards
}

const Card: React.FC<CardProps> = ({
  image,
  title,
  description,
  cardWidth = "16rem",
  cardHeight = "24rem",
}) => (
  <div
    className="flex-shrink-0 cursor-pointer rounded-lg overflow-hidden shadow-lg"
    style={{
      width: cardWidth,
      height: cardHeight,
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="h-full w-full bg-black bg-opacity-50 flex flex-col justify-end p-4 text-white">
      <h3 className="text-lg font-bold">{title}</h3>
      {description && <p className="text-sm mt-2">{description}</p>}
    </div>
  </div>
);

const CardSlider: React.FC<CardSliderProps> = ({
  cardsData,
  cardWidth = "16rem",
  cardHeight = "24rem",
}) => {
  const sliderRef = React.useRef<HTMLDivElement>(null);

  // Variables for drag behavior
  const isDragging = React.useRef(false);
  const startX = React.useRef(0);
  const scrollLeft = React.useRef(0);

  // Mouse down event handler
  const handleMouseDown = (e: React.MouseEvent) => {
    if (sliderRef.current) {
      isDragging.current = true;
      startX.current = e.pageX - sliderRef.current.offsetLeft;
      scrollLeft.current = sliderRef.current.scrollLeft;
    }
  };

  // Mouse leave or up event handler
  const handleMouseLeaveOrUp = () => {
    isDragging.current = false;
  };

  // Mouse move event handler
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // Adjust scroll sensitivity
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div
      ref={sliderRef}
      className="overflow-x-auto scrollbar-hidden flex gap-6"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeaveOrUp}
      onMouseUp={handleMouseLeaveOrUp}
      onTouchStart={(e) => {
        // Handle touch start for mobile
        startX.current = e.touches[0].clientX;
        scrollLeft.current = sliderRef.current ? sliderRef.current.scrollLeft : 0;
        isDragging.current = true;
      }}
      onTouchMove={(e) => {
        // Handle touch move for mobile
        if (!isDragging.current || !sliderRef.current) return;
        const x = e.touches[0].clientX;
        const walk = (x - startX.current) * 1.5;
        sliderRef.current.scrollLeft = scrollLeft.current - walk;
      }}
      onTouchEnd={() => {
        // Handle touch end for mobile
        isDragging.current = false;
      }}
      style={{ cursor: isDragging.current ? "grabbing" : "grab" }} // Change cursor on drag
    >
      {cardsData.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          title={card.title}
          description={card.description}
          cardWidth={cardWidth}
          cardHeight={cardHeight}
        />
      ))}
    </div>
  );
};

export default CardSlider;
