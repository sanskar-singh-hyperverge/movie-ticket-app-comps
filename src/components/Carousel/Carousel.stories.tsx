import React from "react";
import { Meta, Story } from "@storybook/react";
import Carousel, { CarouselProps } from "./Carousel";
import Card from "../Card/Card";
import "../../index.css";

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
} as Meta;

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

const Template: Story<CarouselProps> = (args) => (
  <Carousel {...args} />
);

export const Default = Template.bind({});
Default.args = {
  cardsData: cardData,
  slidesPerView: 1,
  autoplay: false,
  autoplayDelay: 2000,
};

export const AutoplayEnabled = Template.bind({});
AutoplayEnabled.args = {
  cardsData: cardData,
  slidesPerView: 1,
  autoplay: true,
  autoplayDelay: 3000, // Set autoplay delay to 3 seconds
};

export const MultipleSlides = Template.bind({});
MultipleSlides.args = {
  cardsData: cardData,
  slidesPerView: 2,
  autoplay: false,
};

export const LongDescription = Template.bind({});
LongDescription.args = {
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
};

export const WithoutTitle = Template.bind({});
WithoutTitle.args = {
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
};
