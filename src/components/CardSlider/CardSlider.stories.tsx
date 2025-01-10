import { Meta, StoryObj } from "@storybook/react";
import CardSlider, { CardSliderProps } from "./CardSlider";

const meta: Meta<typeof CardSlider> = {
  title: "Components/CardSlider",
  component: CardSlider,
  argTypes: {
    heading: {
      description: "Title text displayed above the card slider, with a bullet point before it.",
      control: "text",
    },
    cardsData: {
      description: "Array of card data with image, title, and optional description.",
      control: "object",
    },
    cardWidth: {
      description: "Width of the individual card.",
      control: "text",
      defaultValue: "16rem",
    },
    cardHeight: {
      description: "Height of the individual card.",
      control: "text",
      defaultValue: "24rem",
    },
  },
};

export default meta;

type Story = StoryObj<typeof CardSlider>;

export const Default: Story = {
  args: {
    heading: "Featured Cards",
    cardsData: [
      {
        image: "https://via.placeholder.com/153x204.png?text=Card+1",
        title: "Card 1",
        description: "Description for Card 1",
      },
      {
        image: "https://via.placeholder.com/153x204.png?text=Card+2",
        title: "Card 2",
        description: "Description for Card 2",
      },
      {
        image: "https://via.placeholder.com/153x204.png?text=Card+3",
        title: "Card 3",
        description: "Description for Card 3",
      },
    ],
  },
};

export const WithoutDescription: Story = {
  args: {
    heading: "Card Showcase",
    cardsData: [
      {
        image: "https://via.placeholder.com/153x204.png?text=Card+1",
        title: "Card 1",
      },
      {
        image: "https://via.placeholder.com/153x204.png?text=Card+2",
        title: "Card 2",
      },
      {
        image: "https://via.placeholder.com/153x204.png?text=Card+3",
        title: "Card 3",
      },
    ],
  },
};
