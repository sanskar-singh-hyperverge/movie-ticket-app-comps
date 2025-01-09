import React from "react";

export type HomeHeroProps ={
  backgroundImage: string;
  overlayColor?: string;
  overlayOpacity?: number;
  customStyles?: React.CSSProperties;
  className?: string;
  logoClassName?:string;
  logoImage:string;
}

const HomeHero: React.FC<HomeHeroProps> = ({
  backgroundImage,
  logoImage="",
  logoClassName="",
  overlayColor = "rgba(0, 0, 0, 0.5)",
  overlayOpacity = 0.5,
  customStyles = {},
  className = "",
}) => {
  return (
    <div
      className={`relative w-full h-screen ${className}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        ...customStyles,
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: overlayColor,
          opacity: overlayOpacity,
        }}
      ></div>

      {/* Content */}
      <div className={`relative z-10 flex items-center justify-center h-full  ${logoClassName}`}>
        {/* Logo Image */}
        <img
          src={logoImage}
          alt="Figma Movie Logo"
          className="absolute h-20 object-contain bottom-80 "
        />
      </div>
    </div>
  );
};

export default HomeHero;
