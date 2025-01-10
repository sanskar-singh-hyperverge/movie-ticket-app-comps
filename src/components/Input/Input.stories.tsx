import  { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import Input, { InputProps } from "./Input";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    onChange: { action: "changed" }, // Track onChange action
  },
} as Meta;

const Default: StoryObj<InputProps> = {
  args: {
    type: "text",
    value: "",
    placeholder: "Enter text",
    required: false,
    className: "border-gray-300",
  },
  render: (args) => {
    const [inputValue, setInputValue] = useState(args.value || "");

    const handleChange = (value: string) => {
      setInputValue(value);
    };

    return (
      <Input
        {...args}
        value={inputValue}
        onChange={handleChange}
      />
    );
  },
};

const WithPassword: StoryObj<InputProps> = {
  args: {
    type: "password",
    value: "password123",
    placeholder: "Enter password",
    required: true,
    className: "border-red-500",
    
  },
  render: (args) => {
    const [inputValue, setInputValue] = useState(args.value || "");

    const handleChange = (value: string) => {
      setInputValue(value);
    };

    return (
      <Input
        {...args}
        value={inputValue}
        onChange={handleChange}
      />
    );
  },
};

const WithNumber: StoryObj<InputProps> = {
  args: {
    type: "number",
    value: 42,
    placeholder: "Enter a number",
    required: true,
    className: "border-blue-500",
    
  },
  render: (args) => {
    const [inputValue, setInputValue] = useState(args.value || "");

    const handleChange = (value: string) => {
      setInputValue(value);
    };

    return (
      <Input
        {...args}
        value={inputValue}
        onChange={handleChange}
      />
    );
  },
};

export { Default, WithPassword, WithNumber };
