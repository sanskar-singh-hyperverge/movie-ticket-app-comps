import { Meta, StoryFn } from "@storybook/react";
import Divider from "./divider.tsx";

const meta: Meta = {
  title: "Components/Divider",
  component: Divider,
  argTypes: {
    text: {
      control: "text",
      description: "Text to display in the center of the divider",
    },
    width: {
      control: "text",
      description: "Width of the divider (Tailwind classes)",
      defaultValue: "w-full",
    },
  },
};

export default meta;

const Template: StoryFn<typeof Divider> = (args) => <Divider {...args} />;

export const Default: StoryFn = Template.bind({});
Default.args = {
  text: "",
  width: "w-1/2",
};

export const WithText: StoryFn = Template.bind({});
WithText.args = {
  text: "or",
  width: "w-3/4",
};

export const CustomWidth: StoryFn = Template.bind({});
CustomWidth.args = {
  text: "",
  width: "w-1/2",
};
