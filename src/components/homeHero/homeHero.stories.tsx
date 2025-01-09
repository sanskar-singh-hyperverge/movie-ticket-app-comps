
import  {HomeHeroProps}from "./homeHero";
import { Meta, StoryFn } from "@storybook/react";
import HomeHero from "./homeHero";
const meta:Meta= {
  title: "Components/HomeHero",
  component: HomeHero,
  argTypes: {
    backgroundImage: {
      control: "text",
      description: "The background image URL for the hero section.",
    },
    logoImage: {
      control: "text",
      description: "The logo image URL displayed in the hero section.",
    },
    overlayColor: {
      control: "color",
      description: "Color of the overlay applied over the background image.",
    },
    overlayOpacity: {
      control: { type: "range", min: 0, max: 1, step: 0.1 },
      description: "Opacity of the overlay.",
    },
    customStyles: {
      control: "object",
      description: "Custom inline styles for the hero container.",
    },
    className: {
      control: "text",
      description: "Additional CSS classes for the hero container.",
    },
    logoClassName: {
      control: "text",
      description: "CSS classes for customizing the logo container.",
    },
  },
};

export default meta
const Template: StoryFn<typeof HomeHero> = (args: HomeHeroProps) => <HomeHero {...args} />;

export const Default = Template.bind({});
Default.args = {
  backgroundImage:
    "/bgImage.jpg",
  logoImage:
    "/Group 3.png",
  overlayColor: "rgba(0, 0, 0, 0.7)",
  overlayOpacity: 0.7,
  customStyles: {},
  className: "",
  logoClassName: "",
};

export const LightOverlay = Template.bind({});
LightOverlay.args = {
  ...Default.args,
  overlayColor: "rgba(255, 255, 255, 0.3)",
  overlayOpacity: 0.3,
};

export const CustomStyles = Template.bind({});
CustomStyles.args = {
  ...Default.args,
  customStyles: {
    borderRadius: "20px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
  },
  className: "overflow-hidden",
};
