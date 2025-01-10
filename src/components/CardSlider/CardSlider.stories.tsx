import { Meta, StoryObj } from "@storybook/react";
import CardSlider, { CardSliderProps } from "../CardSlider/CardSlider";
import "../../index.css";

// Default export for Storybook metadata
export default {
  title: "Components/CardSlider",
  component: CardSlider,
  parameters: {
    layout: "fullscreen", // Ensures the slider uses the full width of the Storybook canvas
  },
} as Meta<CardSliderProps>;

// Data for the cards inside the CardSlider
const cardsData = [
  {
    image: "https://via.placeholder.com/300x400?text=Card+1",
    title: "Card 1",
    description: "This is the first card",
  },
  {
    image: "https://via.placeholder.com/300x400?text=Card+2",
    title: "Card 2",
    description: "This is the second card",
  },
  {
    image: "https://via.placeholder.com/300x400?text=Card+3",
    title: "Card 3",
    description: "This is the third card",
  },
  {
    image: "https://via.placeholder.com/300x400?text=Card+4",
    title: "Card 4",
    description: "This is the fourth card",
  },
];

// Stories using StoryObj format
export const Default: StoryObj<CardSliderProps> = {
  args: {
    cardsData,
    cardWidth: "16rem", // Default card size
    cardHeight: "24rem",
  },
};

export const CustomSize: StoryObj<CardSliderProps> = {
  args: {
    cardsData,
    cardWidth: "20rem", // Custom card size
    cardHeight: "28rem",
  },
};

export const WithoutDescription: StoryObj<CardSliderProps> = {
  args: {
    cardsData: cardsData.map(({ image, title }) => ({
      image,
      title, // Removed descriptions
    })),
    cardWidth: "16rem",
    cardHeight: "24rem",
  },
};
