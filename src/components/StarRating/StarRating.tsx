import React, { useRef } from 'react';

export interface StarRatingProps {
  rating: number; // The rating value to display
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const starContainerRef = useRef<HTMLDivElement | null>(null);

  // Calculate the width of stars based on the parent container's size
  const starSize = starContainerRef.current
    ? starContainerRef.current.offsetWidth / 5
    : 24; // Default size if the container width is not available

  return (
    <div
      ref={starContainerRef}
      style={{ display: 'inline-flex', justifyContent: 'flex-start', alignItems: 'center', width: '100%' }}
    >
      {[...Array(5)].map((_, index) => {
        const fullStar = index < Math.floor(rating); // Full star for integer part
        const halfStar = index < Math.ceil(rating) && rating - Math.floor(rating) >= 0.5; // Half star for decimal part

        return (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={starSize}
            height={starSize}
            style={{
              fill: fullStar ? '#FFD700' : halfStar ? 'url(#gradient)' : '#D3D3D3', // Gold for full, gradient for half, gray for empty
              transition: 'fill 0.3s ease', // Smooth transition effect
            }}
          >
            {/* Gradient definition for half star fill */}
            {halfStar && (
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="50%" stopColor="#FFD700" />
                  <stop offset="50%" stopColor="#D3D3D3" />
                </linearGradient>
              </defs>
            )}
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        );
      })}
    </div>
  );
};

export default StarRating;
