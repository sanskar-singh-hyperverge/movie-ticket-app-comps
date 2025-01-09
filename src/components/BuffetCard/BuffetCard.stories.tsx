import { Meta, StoryObj } from "@storybook/react";
import BuffetCard from "./BuffetCard";
import "../../index.css"

const meta: Meta<typeof BuffetCard> = {
  title: "Components/BuffetCard",
  component: BuffetCard,
  argTypes: {
    title: { control: "text" },
    description: { control: "object" },
    price: { control: "number" },
    initialQuantity: { control: "number" },
    minQuantity: { control: "number" },
    maxQuantity: { control: "number" },
    size: {
      control: { type: "select" },
      options: ["default", "small", "large"],
    },
    customSize: { control: "object" },
    onQuantityChange: { action: "quantity changed" },
  },
};

export default meta;
type Story = StoryObj<typeof BuffetCard>;

export const Default: Story = {
  args: {
    imageSrc: "https://picsum.photos/300/200",
    title: "Large Menu",
    description: ["Large Popcorn", "Large Coca Cola (400 mL)"],
    price: 30,
    initialQuantity: 0,
  },
};

export const Small: Story = {
  args: {
    ...Default.args,
    size: "small",
    title: "Small Menu",
    price: 20,
  },
};

export const Large: Story = {
  args: {
    ...Default.args,
    size: "large",
    title: "Premium Menu",
    description: ["Extra Large Popcorn", "Large Coca Cola (500 mL)", "Nachos"],
    price: 45,
  },
};

export const CustomSize: Story = {
  args: {
    ...Default.args,
    customSize: { width: "450px", height: "200px" },
  },
};

export const WithQuantityLimits: Story = {
  args: {
    ...Default.args,
    minQuantity: 1,
    maxQuantity: 5,
    initialQuantity: 1,
  },
};