{/*Best Working Card So far */}

import React from "react";

type CardProps = {
  id: string | number;
  backgroundImages?: string[];
  backgroundVideo?: string;
  backgroundColor?: string;
  rounded?: string;
  borderStyle?: string;
  className?: string;
  children?: React.ReactNode;
  flexDirection?: "row" | "column"; // Flex direction options
  justifyContent?: "start" | "center" | "end" | "between" | "around"; // Flexbox justify content options
  alignItems?: "start" | "center" | "end" | "baseline" | "stretch"; // Flexbox align items options
};

const Card: React.FC<CardProps> = ({
  id,
  backgroundImages,
  backgroundVideo,
  backgroundColor = "bg-white", // Default background color
  rounded = "rounded-md", // Default border radius
  borderStyle = "border border-gray-300", // Default border style
  className = "",
  children,
  flexDirection = "column", // Default: column layout
  justifyContent = "center", // Default: center alignment
  alignItems = "center", // Default: center alignment
}) => {
  const backgroundStyle: React.CSSProperties =
    backgroundImages && backgroundImages.length > 0
      ? {
          backgroundImage: `url(${backgroundImages[0]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }
      : {};

  return (
    <div
      id={id.toString()}
      className={`relative overflow-hidden shadow-md ${backgroundColor} ${rounded} ${borderStyle} ${className}`}
      style={backgroundStyle}
    >
      {/* Background video */}
      {backgroundVideo && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      )}

      {/* Optional overlay for darkening the background image */}
      {backgroundImages && backgroundImages.length > 0 && !backgroundVideo && (
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      )}

      {/* Card content */}
      <div
        className={`relative z-10 w-full h-full flex flex-${flexDirection}`}
        style={{
          display: "flex",
          flexDirection: flexDirection,
          justifyContent: justifyContent,
          alignItems: alignItems,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Card;
