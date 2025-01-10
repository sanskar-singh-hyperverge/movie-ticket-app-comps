import React, { useState } from "react";

export interface InputProps {
  type?: "text" | "number" | "email" | "password" | "date"; // Input type
  value?: string | number; // Default value
  placeholder?: string; // Placeholder text
  required?: boolean; // Whether the input is required
  onChange?: (value: string) => void; // Callback for handling changes
  className?: string; // Tailwind-compatible classes for input styling
  
}

const Input: React.FC<InputProps> = ({
  type = "text",
  value = "",
  placeholder = "",
  required = false,
  onChange,
  className = "",

}) => {
  const [inputValue, setInputValue] = useState(value); // Local state for the input value

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue); // Update local state

    if (onChange) {
      onChange(newValue); // Call the parent onChange
    }
  };

  return (
    <div className='w-full'>
      <input
        type={type}
        value={inputValue} // Use local state for value
        placeholder={placeholder}
        onChange={handleInputChange}
        className={`w-full p-2 border bg-[#4D4D4D] ${className}`}
        required={required}
      />
    </div>
  );
};

export default Input;
