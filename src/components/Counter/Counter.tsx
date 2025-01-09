import React, { useState } from "react";

export interface CounterProps {
  initialValue?: number;
  minValue?: number;
  maxValue?: number;
  label?: string;
  orientation?: "vertical" | "horizontal";
  onChange?: (value: number) => void;
  customSize?: { width: string; height: string };
}

const Counter: React.FC<CounterProps> = ({
  initialValue = 0,
  minValue = -5,
  maxValue = 10,
  label = "",
  orientation = "horizontal",
  onChange,
  customSize,
}) => {
  const [count, setCount] = useState(initialValue);

  const incrementCounter = () => {
    if (count < maxValue) {
      const newVal = count + 1;
      setCount(newVal);
      onChange?.(newVal);
    }
  };

  const decrementCounter = () => {
    if (count > minValue) {
      const newValue = count - 1;
      setCount(newValue);
      onChange?.(newValue);
    }
  };

  const defaultWidth = orientation === "vertical" ? 58 : 173;
  const defaultHeight = orientation === "vertical" ? 173 : 58;

  const width = customSize?.width ? parseInt(customSize.width) : defaultWidth;
  const height = customSize?.height ? parseInt(customSize.height) : defaultHeight;
  const scalingFactor = orientation === "vertical" 
    ? width / defaultWidth 
    : height / defaultHeight;

  const buttonStyle = {
    width: `${40 * scalingFactor}px`,
    height: `${40 * scalingFactor}px`,
    fontSize: `${16 * scalingFactor}px`,
  };

  return (
    <div
      style={{ width: `${width}px`, height: `${height}px` }}
      className={`flex ${
        orientation === "vertical"
          ? "flex-col items-center justify-between py-2"
          : "flex-row items-center justify-center space-x-4 px-2"
      } bg-black rounded-lg`}
    >
      <button
        onClick={incrementCounter}
        className="flex items-center justify-center rounded-full border border-gray-400 bg-black text-white hover:bg-white hover:text-black dark:hover:bg-gray-700 transition-all"
        style={buttonStyle}
      >
        +
      </button>

      <div className="flex flex-col items-center justify-center">
        <span
          className="text-white"
          style={{
            fontSize: `${18 * scalingFactor}px`,
          }}
        >
          {count}
        </span>
        {orientation === "horizontal" && label && (
          <span
            className="text-gray-300"
            style={{
              fontSize: `${12 * scalingFactor}px`,
            }}
          >
            {label}
          </span>
        )}
      </div>

      <button
        onClick={decrementCounter}
        className="flex items-center justify-center rounded-full border border-gray-400 bg-black text-white hover:bg-white hover:text-black dark:hover:bg-gray-700 transition-all"
        style={buttonStyle}
      >
        -
      </button>
    </div>
  );
};

export default Counter;