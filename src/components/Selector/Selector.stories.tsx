import { Meta, StoryObj } from "@storybook/react";
import Selector from "./Selector";

const meta: Meta<typeof Selector> = {
  title: "Components/Selector",
  component: Selector,
  args: {
    placeholder: "Select an option",
    options: ["Option 1", "Option 2", "Option 3"],
  },
  argTypes: {
    options: {
      control: "object",
      description: "Array of options to display",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text when no option is selected",
    },
    selected: {
      control: "object",
      description: "Currently selected option",
    },
    onSelect: { 
      action: "selected",
      description: "Callback when an option is selected",
    },
    displayKey: {
      control: "text",
      description: "Key to display for object options",
    },
    customSize: {
      control: "object",
      description: "Custom dimensions in pixels",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Selector>;

export const Default: Story = {
  args: {},
};

export const WithCustomPlaceholder: Story = {
  args: {
    placeholder: "Choose your menu",
  },
};

export const WithSelectedOption: Story = {
  args: {
    selected: "Option 2",
  },
};

export const CustomSize: Story = {
  args: {
    customSize: { width: "400px", height: "60px" },
  },
};