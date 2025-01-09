
import { Meta, StoryObj } from "@storybook/react";
import Carousel, { CarouselProps } from "./Carousel";

import "../../index.css";

// Storybook metadata with typing
export default {
  title: "Components/Carousel",
  component: Carousel,
  argTypes: {
    slidesPerView: {
      control: { type: "number" },
      defaultValue: 1,
    },
    autoplay: {
      control: { type: "boolean" },
      defaultValue: false,
    },
    autoplayDelay: {
      control: { type: "number" },
      defaultValue: 2000,
    },
  },
} as Meta<CarouselProps>;

// Card data example
const cardData = [
  {
    id: 1,
    title: "Inception",
    subtitle: "2010 | Sci-Fi, Thriller",
    description:
      "A skilled thief is offered a chance to have his past crimes forgiven by implanting an idea into a target's subconscious.",
    backgroundImages: ["/movieimage.webp"],
  },
  {
    id: 2,
    title: "The Dark Knight",
    subtitle: "2008 | Action, Crime, Drama",
    description:
      "Batman faces the Joker, a criminal mastermind who seeks to create chaos in Gotham City.",
    backgroundImages: ["/movieimage.webp"],
  },
  {
    id: 3,
    title: "Interstellar",
    subtitle: "2014 | Adventure, Drama, Sci-Fi",
    description:
      "A team of explorers travels through a wormhole in space in an attempt to ensure humanity's survival.",
    backgroundImages: ["/movieimage.webp"],
  },
];

// Using StoryObj type for each story
type Story = StoryObj<CarouselProps>;

// Default Story
export const Default: Story = {
  args: {
    cardsData: cardData,
    slidesPerView: 1,
    autoplay: false,
    autoplayDelay: 2000,
  },
};

// Autoplay Enabled Story
export const AutoplayEnabled: Story = {
  args: {
    cardsData: cardData,
    slidesPerView: 1,
    autoplay: true,
    autoplayDelay: 3000, // Set autoplay delay to 3 seconds
  },
};

// Multiple Slides Visible Story
export const MultipleSlides: Story = {
  args: {
    cardsData: cardData,
    slidesPerView: 2,
    autoplay: false,
  },
};

// Long Description for Movie
export const LongDescription: Story = {
  args: {
    cardsData: [
      {
        id: 4,
        title: "The Shawshank Redemption",
        subtitle: "1994 | Drama",
        description:
          "Two imprisoned men bond over several years, finding solace and eventual redemption through acts of common decency. A powerful narrative about hope, friendship, and justice.",
        backgroundImages: ["/movieimage.webp"],
      },
      ...cardData,
    ],
    slidesPerView: 1,
    autoplay: false,
  },
};

// Without Title Story
export const WithoutTitle: Story = {
  args: {
    cardsData: [
      {
        id: 5,
        subtitle: "2005 | Horror, Thriller",
        description:
          "A group of friends get trapped in an abandoned house and discover it is haunted.",
        backgroundImages: ["/movieimage.webp"],
      },
      ...cardData,
    ],
    slidesPerView: 1,
    autoplay: false,
  },
};
