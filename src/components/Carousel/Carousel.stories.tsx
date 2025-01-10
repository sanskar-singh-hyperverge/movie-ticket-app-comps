
import { Meta, StoryObj } from "@storybook/react";
import Carousel, { CarouselProps } from "../Carousel/Carousel"; // Import the Carousel component
import "../../index.css";
// Default export for Storybook metadata
export default {
  title: "Components/Carousel",
  component: Carousel,
} as Meta<CarouselProps>;

// Example data for the carousel slides
const slides = [
  {
    image: "https://via.placeholder.com/1200x500?text=Slide+1",
    title: "Slide 1",
    description: "This is the first slide",
  },
  {
    image: "https://via.placeholder.com/1200x500?text=Slide+2",
    title: "Slide 2",
    description: "This is the second slide",
  },
  {
    image: "https://via.placeholder.com/1200x500?text=Slide+3",
    title: "Slide 3",
    description: "This is the third slide",
  },
  {
    image: "https://via.placeholder.com/1200x500?text=Slide+4",
    title: "Slide 4",
    description: "This is the fourth slide",
  },
];

// Stories using StoryObj format
export const Default: StoryObj<CarouselProps> = {
  args: {
    slides,
    interval: 3000, // Autoscroll interval
  },
};

export const CustomInterval: StoryObj<CarouselProps> = {
  args: {
    slides,
    interval: 5000, // Longer autoscroll interval
  },
};

export const NoDescription: StoryObj<CarouselProps> = {
  args: {
    slides: slides.map(({ image, title }) => ({
      image,
      title,
    })),
    interval: 3000,
  },
};
