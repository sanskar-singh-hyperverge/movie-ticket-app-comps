// Input.stories.tsx
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Input from "./Input";
import "../../index.css"; 

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
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const TextInput = Template.bind({});
TextInput.args = {
  type: "text",
  placeholder: "Enter your text",
  value: "",
  required: false,
  className: "",
  wrapperClassName: "",
};

export const NumberInput = Template.bind({});
NumberInput.args = {
  type: "number",
  placeholder: "Enter a number",
  value: 123,
  required: true,
};

export const EmailInput = Template.bind({});
EmailInput.args = {
  type: "email",
  placeholder: "Enter your email",
  value: "",
  required: true,
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
  type: "password",
  placeholder: "Enter your password",
  value: "",
  required: true,
};

export const DateInput = Template.bind({});
DateInput.args = {
  type: "date",
  value: "2025-01-08",
  required: false,
};
