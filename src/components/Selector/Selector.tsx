import { useState, useRef, useEffect } from "react";

interface SelectorProps<T> {
  options: T[];
  placeholder?: string;
  selected?: T;
  onSelect: (option: T) => void;
  displayKey?: keyof T; // Key to display if options are objects
  customSize?: { width: string; height: string }; // Optional custom size
}

const Selector = <T,>({
  options,
  placeholder = "Select an option",
  selected,
  onSelect,
  displayKey,
  customSize,
}: SelectorProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectorRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (option: T) => {
    onSelect(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectorRef.current && !selectorRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Default size
  const defaultWidth = 352;
  const defaultHeight = 70;

  // Apply custom size if provided
  const width = customSize?.width || `${defaultWidth}px`;
  const height = customSize?.height || `${defaultHeight}px`;

  return (
    <div
      ref={selectorRef}
      style={{ width, height }}
      className="relative inline-block text-left"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex justify-between items-center w-full h-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all ${
          selected
            ? "bg-purple-600 text-white"
            : "bg-transparent text-gray-400 border-2 border-purple-500"
        }`}
      >
        <span>
          {selected
            ? displayKey
              ? (selected[displayKey] as unknown as string)
              : (selected as unknown as string)
            : placeholder}
        </span>
        <span className="text-lg">&rsaquo;</span>
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-full bg-black text-white rounded-lg shadow-lg z-10">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(option)}
              className="block w-full px-4 py-2 text-left hover:bg-purple-500 hover:text-white transition-all"
            >
              {displayKey
                ? (option[displayKey] as unknown as string)
                : (option as unknown as string)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Selector;
