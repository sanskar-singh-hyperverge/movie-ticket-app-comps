import React, { useRef, useState } from "react";

export type HeroSectionProps = {
  title: string;
  studio: string;
  rating: number; // IMDb rating
  userRating: number; // User rating out of 5
  videoUrl: string;
  posterUrl: string;
};

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  studio,
  rating,
  userRating,
  videoUrl,
  posterUrl,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Toggle play/pause video
  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative h-[500px] w-full">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={videoUrl}
        autoPlay
        muted
        loop
      />
      
      {/* Overlay for darkening the video */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>

      {/* Play/Pause Button */}
      <button
        onClick={handlePlayPause}
        className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl bg-white p-4 rounded-full shadow-lg"
      >
        {isPlaying ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-gray-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 5.25v13.5m-7.5-13.5v13.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-8 h-8 text-gray-800"
          >
            <path d="M4.018 14L14.41 9.194a1 1 0 000-1.832L4.018 2.982A1 1 0 003 3.863v10.274a1 1 0 001.018.863z" />
          </svg>
        )}
      </button>

      {/* Content */}
      <div className="absolute bottom-8 left-8 flex items-start space-x-6 z-10">
        {/* Poster */}
        <img
          src={posterUrl}
          alt={`${title} Poster`}
          className="w-36 h-52 rounded-lg shadow-lg object-cover"
        />

        {/* Text Content */}
        <div className="flex flex-col">
          <h3 className="text-4xl font-bold text-white">{title}</h3>
          <p className="text-lg text-gray-300 mt-2">{studio}</p>

          {/* User Rating */}
          <div className="flex items-center space-x-2 mt-3">
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  fill={index < userRating ? "currentColor" : "none"}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className={`w-5 h-5 ${
                    index < userRating ? "text-yellow-400" : "text-gray-400"
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.009 6.17a1 1 0 00.95.69h6.462c.969 0 1.371 1.24.588 1.81l-5.232 3.796a1 1 0 00-.364 1.118l2.009 6.17c.3.921-.755 1.688-1.538 1.118l-5.232-3.796a1 1 0 00-1.176 0l-5.232 3.796c-.783.57-1.838-.197-1.538-1.118l2.009-6.17a1 1 0 00-.364-1.118L2.93 11.597c-.783-.57-.381-1.81.588-1.81h6.462a1 1 0 00.95-.69l2.009-6.17z"
                  />
                </svg>
              ))}
            </div>
            <p className="text-white text-sm">({userRating}/5)</p>
          </div>

          {/* IMDb Rating */}
          <div className="flex items-center space-x-2 mt-3">
            <div className="bg-yellow-400 text-black px-2 py-1 rounded text-sm font-bold">
              IMDb
            </div>
            <p className="text-white text-lg font-semibold">{rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
