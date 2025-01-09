import React from "react";
import { Meta, Story } from "@storybook/react";
import "../../index.css"; // Import Tailwind CSS
import StarRating from "./StarRating";

export default {
  title: "Components/StarRating",
  component: StarRating,
} as Meta;

const Template: Story<{ rating: number }> = (args) => <StarRating {...args} />;

export const ZeroStars = Template.bind({});
ZeroStars.args = {
  rating: 0
};

export const HalfStar = Template.bind({});
HalfStar.args = {
  rating: 0.5,
};

export const ThreeStars = Template.bind({});
ThreeStars.args = {
  rating: 3,
};

export const FullStars = Template.bind({});
FullStars.args = {
  rating: 5,
};
