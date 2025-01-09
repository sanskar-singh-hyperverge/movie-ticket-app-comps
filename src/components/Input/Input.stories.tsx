
import { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";
import "../../index.css"; // Make sure to import global styles if necessary

// Storybook metadata with typing
export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["text", "number", "email", "password", "date"],
      },
    },
    value: { control: "text" },
    placeholder: { control: "text" },
    required: { control: "boolean" },
    className: { control: "text" },
    wrapperClassName: { control: "text" },
    onChange: { action: "changed" },
  },
} as Meta<typeof Input>;

type Story = StoryObj<typeof Input>;

// Text Input Story
export const TextInput: Story = {
  args: {
    type: "text",
    placeholder: "Enter your text",
    value: "",
    required: false,
    className: "",
    wrapperClassName: "",
  },
};

// Number Input Story
export const NumberInput: Story = {
  args: {
    type: "number",
    placeholder: "Enter a number",
    value: 123,
    required: true,
    className: "",
    wrapperClassName: "",
  },
};

// Email Input Story
export const EmailInput: Story = {
  args: {
    type: "email",
    placeholder: "Enter your email",
    value: "",
    required: true,
    className: "",
    wrapperClassName: "",
  },
};

// Password Input Story
export const PasswordInput: Story = {
  args: {
    type: "password",
    placeholder: "Enter your password",
    value: "",
    required: true,
    className: "",
    wrapperClassName: "",
  },
};

// Date Input Story
export const DateInput: Story = {
  args: {
    type: "date",
    value: "2025-01-08",
    required: false,
    className: "",
    wrapperClassName: "",
  },
};
