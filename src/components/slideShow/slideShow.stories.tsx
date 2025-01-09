
import { Meta, StoryFn } from "@storybook/react";
import Slideshow, { SlideshowProps } from "./slideShow";

export default {
  title: "Components/Slideshow",
  component: Slideshow,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    slides: {
      control: "object",
      description: "Array of slide objects with image URLs.",
    },
    name: {
      control: "text",
      description: "Main title text for the slideshow.",
    },
    subName: {
      control: "text",
      description: "Subtitle text for the slideshow.",
    },
    fadedColor: {
      control: "color",
      description: "Overlay gradient color.",
    },
    autoSlide: {
      control: "boolean",
      description: "Enable or disable automatic sliding.",
    },
    slideInterval: {
      control: { type: "number", min: 1000, step: 500 },
      description: "Time interval (in ms) between slides.",
    },
    animationDuration: {
      control: { type: "number", min: 300, step: 100 },
      description: "Duration (in ms) of the slide transition.",
    },
    loop: {
      control: "boolean",
      description: "Enable or disable looping of slides.",
    },
    pauseOnHover: {
      control: "boolean",
      description: "Pause sliding when the user hovers over the slideshow.",
    },
    imageFit: {
      control: { type: "radio", options: ["cover", "contain", "fill"] },
      description: "How the slide image fits in the container.",
    },
    className: {
      control: "text",
      description: "Additional classes for the slideshow container.",
    },
    nameclassName: {
      control: "text",
      description: "CSS class for styling the main title.",
    },
    subclassName: {
      control: "text",
      description: "CSS class for styling the subtitle.",
    },
    borderRadius: {
      control: "text",
      description: "Border radius for the slideshow container.",
    },
    arrowImage: {
      control: "text",
      description: "URL for the next-slide arrow image.",
    },
  },
} as Meta<SlideshowProps>;

const Template: StoryFn<SlideshowProps> = (args) => <Slideshow {...args} />;

export const Default = Template.bind({});
Default.args = {
  slides: [
    {
      imageUrl:
        "/shrek.jpeg",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1490365728022-deae76380607?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
  ],
  name: "Kung Fu Panda 4",
  subName: "DreamWorks Animation",
  fadedColor: "rgba(0, 0, 0, 0.7)",
  autoSlide: true,
  slideInterval: 5000,
  animationDuration: 700,
  loop: true,
  pauseOnHover: true,
  imageFit: "cover",
  borderRadius: "10px",
  arrowImage:
    "/exchange 1.png",
};

export const NoAutoSlide = Template.bind({});
NoAutoSlide.args = {
  ...Default.args,
  autoSlide: false,
};

export const ShortInterval = Template.bind({});
ShortInterval.args = {
  ...Default.args,
  slideInterval: 2000,
};

export const NoLoop = Template.bind({});
NoLoop.args = {
  ...Default.args,
  loop: false,
};

export const PauseOnHoverDisabled = Template.bind({});
PauseOnHoverDisabled.args = {
  ...Default.args,
  pauseOnHover: false,
};

export const CustomBorderRadius = Template.bind({});
CustomBorderRadius.args = {
  ...Default.args,
  borderRadius: "20px",
};

export const LightOverlay = Template.bind({});
LightOverlay.args = {
  ...Default.args,
  fadedColor: "rgba(255, 255, 255, 0.3)",
};
