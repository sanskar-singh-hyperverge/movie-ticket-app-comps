
import { Meta, StoryObj } from "@storybook/react";
import "../../index.css"; // Import Tailwind CSS
import StarRating from "./StarRating";

export default {
  title: "Components/StarRating",
  component: StarRating,
} as Meta<typeof StarRating>;

type Story = StoryObj<typeof StarRating>;

// Zero Stars
export const ZeroStars: Story = {
  args: {
    rating: 0,
  },
};

// Half Star
export const HalfStar: Story = {
  args: {
    rating: 0.5,
  },
};

// Three Stars
export const ThreeStars: Story = {
  args: {
    rating: 3,
  },
};

// Full Stars
export const FullStars: Story = {
  args: {
    rating: 5,
  },
};
