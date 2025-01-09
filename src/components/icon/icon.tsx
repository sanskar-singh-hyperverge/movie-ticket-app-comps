import React from "react";


export type IconProps = {
  URL: string; // URL of the icon (can be SVG content or an image URL)
  iconColor?: string; // Color of the icon
  iconBorderClr?: string; // Border color of the icon
  iconBorderStyle?: string; // Border style (e.g., solid, dashed)
  bgColor?: string; // Background color of the icon
  rounded?: string; // Border radius of the icon
  className?: string; // Additional Tailwind classes
  onClick?: () => void; // Click handler
};

const Icon: React.FC<IconProps> = ({
  URL,
  iconColor = "inherit",
  iconBorderClr = "transparent",
  iconBorderStyle = "solid",
  bgColor = "transparent",
  rounded = "rounded-none",
  className = "",
  onClick,
}) => {
  const isInlineSVG = URL.startsWith("<svg"); // Check if the URL is an inline SVG string

  return (
    <div
      className={`flex items-center justify-center p-2 ${rounded} ${className}`}
      style={{
        backgroundColor: bgColor,
        borderColor: iconBorderClr,
        borderStyle: iconBorderStyle,
        
        cursor: onClick ? "pointer" : "default",
      }}
      onClick={onClick}
    >
      {isInlineSVG ? (
        <div
          className="h-6 w-6"
          style={{ color: iconColor }}
          dangerouslySetInnerHTML={{ __html: URL }} // Render inline SVG
        />
      ) : (
        <img
          src={URL}
          alt="icon"
          className="h-10 w-10"
          style={{
            color: iconColor, // In case of colored icons (e.g., monochrome SVGs)
          }}
        />
      )}
    </div>
  );
};

export default Icon;
