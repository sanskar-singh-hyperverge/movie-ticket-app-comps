import React from "react";

interface BuffetCardProps {
  imageSrc: string;
  title: string;
  description: string[];
  price: number;
  initialQuantity?: number;
  minQuantity?: number;
  maxQuantity?: number;
  onQuantityChange?: (value: number) => void;
  size?: "default" | "small" | "large";
  customSize?: { width: string; height: string };
  className?: string;
}

const BuffetCard: React.FC<BuffetCardProps> = ({
  imageSrc,
  title,
  description,
  price,
  initialQuantity = 0,
  minQuantity = 0,
  maxQuantity = 10,
  onQuantityChange,
  size = "default",
  customSize,
  className = "",
}) => {
  const [quantity, setQuantity] = React.useState(initialQuantity);

  const handleIncrement = () => {
    if (quantity < maxQuantity) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      onQuantityChange?.(newQuantity);
    }
  };

  const handleDecrement = () => {
    if (quantity > minQuantity) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange?.(newQuantity);
    }
  };

  const sizeClasses = {
    default: "w-[351px] h-[155px]",
    small: "w-[300px] h-[130px]",
    large: "w-[400px] h-[180px]",
  };

  const customStyle =
    customSize && customSize.width && customSize.height
      ? {
          width: customSize.width,
          height: customSize.height,
        }
      : {};

  return (
    <div
      className={`flex items-center p-4 bg-black text-white rounded-lg shadow-lg ${
        customSize ? "" : sizeClasses[size]
      } ${className}`}
      style={customStyle}
    >
      <div className="w-1/3 h-full mr-4">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover rounded-lg border border-purple-500"
        />
      </div>

      <div className="flex-1 min-w-0">
        <h2 className="text-lg font-bold mb-1 truncate">{title}</h2>
        <div className="text-sm text-gray-300 space-y-1 mb-3">
          {description?.map((line, index) => (
            <p key={index} className="truncate">{line}</p>
          ))}
        </div>
        <p className="text-green-400 text-lg font-bold">Price: ${price}</p>
      </div>

      <div className="flex flex-col items-center justify-between ml-4 h-full py-1">
        <button
          onClick={handleIncrement}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 bg-black text-white hover:bg-white hover:text-black dark:hover:bg-gray-700 transition-all"
        >
          +
        </button>
        <span className="text-lg font-medium">{quantity}</span>
        <button
          onClick={handleDecrement}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 bg-black text-white hover:bg-white hover:text-black dark:hover:bg-gray-700 transition-all"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default BuffetCard;