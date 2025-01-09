import React from "react";

interface InputProps {
  type?: "text" | "number" | "email" | "password" | "date"; // Input type
  value?: string | number; // Default value
  placeholder?: string; // Placeholder text
  required?: boolean; // Whether the input is required
  onChange?: (value: string) => void; // Callback for handling changes
  className?: string; // Tailwind-compatible classes for input styling
  wrapperClassName?: string; // Tailwind-compatible classes for wrapper styling
}

const Input: React.FC<InputProps> = ({
  type = "text",
  value = "",
  placeholder = "",
  required = false,
  onChange,
  className = "",
  wrapperClassName = "",
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className={`input-wrapper ${wrapperClassName}`}>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleInputChange}
        className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${className}`}
        required={required}
      />
    </div>
  );
};

export default Input;
