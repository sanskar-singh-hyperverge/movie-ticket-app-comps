import { Meta, StoryFn } from "@storybook/react";
import Icon, { IconProps } from "./icon";

const meta:Meta= {
  title: "Components/Icon",
  component: Icon,
  argTypes: {
    iconColor: { control: "color" },
    bgColor: { control: "color" },
    iconBorderClr: { control: "color" },
    iconBorderStyle: { control: "text" },
    rounded: { control: "text" },
  },
} 

export default meta

const Template: StoryFn<typeof Icon> = (args: IconProps) => <Icon {...args} />;

export const DefaultIcon = Template.bind({});
DefaultIcon.args = {
  URL: "/left-arrow.jpg",
  iconColor: "#000",
  bgColor: "#fff",
  rounded: "rounded-none",
};

export const RoundedIcon = Template.bind({});
RoundedIcon.args = {
  URL: "/curved-right-arrow.jpg",
  iconColor: "#fff",
  bgColor: "#007bff",
  iconBorderClr: "#000",
  iconBorderStyle: "solid",
  rounded: "rounded-full",
};
