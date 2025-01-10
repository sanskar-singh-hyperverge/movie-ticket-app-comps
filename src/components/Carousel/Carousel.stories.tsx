
import { Meta, StoryObj } from "@storybook/react";
import Carousel, { CarouselProps } from "./Carousel";

const meta: Meta<typeof Carousel> = {
  title: "Components/Carousel",
  component: Carousel,
  argTypes: {
    slides: {
      description: "Array of slides with image, title, description, and optional onClick.",
      control: "object",
    },
    interval: {
      description: "Time interval in milliseconds for auto-scrolling.",
      control: "number",
      defaultValue: 3000,
    },
    width: {
      description: "Width of the carousel component.",
      control: "text",
      defaultValue: "293px",
    },
    height: {
      description: "Height of the carousel component.",
      control: "text",
      defaultValue: "146px",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  args: {
    slides: [
      {
        image: "https://via.placeholder.com/293x146.png?text=Slide+1",
        title: "Slide 1",
        description: "Description of Slide 1",
        onClick: () => alert("Slide 1 clicked"),
      },
      {
        image: "https://via.placeholder.com/293x146.png?text=Slide+2",
        title: "Slide 2",
        description: "Description of Slide 2",
        onClick: () => alert("Slide 2 clicked"),
      },
      {
        image: "https://via.placeholder.com/293x146.png?text=Slide+3",
        title: "Slide 3",
        description: "Description of Slide 3",
        onClick: () => alert("Slide 3 clicked"),
      },
    ],
    interval: 3000,
    width: "293px",
    height: "146px",
  },
};

export const NoDescription: Story = {
  args: {
    slides: [
      {
        image: "https://via.placeholder.com/293x146.png?text=Slide+1",
        title: "Slide 1",
        onClick: () => alert("Slide 1 clicked"),
      },
      {
        image: "https://via.placeholder.com/293x146.png?text=Slide+2",
        title: "Slide 2",
        onClick: () => alert("Slide 2 clicked"),
      },
    ],
    interval: 5000,
    width: "293px",
    height: "146px",
  },
};
