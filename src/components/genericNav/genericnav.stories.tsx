import { Meta, StoryFn } from "@storybook/react";
import GenericNav from "./genericnav.tsx";

export default {
  title: "Components/GenericNav",
  component: GenericNav,
  argTypes: {
    currentStep: { control: { type: "number", min: 1 } },
    totalStep: { control: { type: "number", min: 1 } },
  },
} as Meta<typeof GenericNav>;

const Template: StoryFn<typeof GenericNav> = (args) => <GenericNav {...args} />;

export const Default = Template.bind({});
Default.args = {
  currentStep: 1,
  totalStep: 4,
};

export const MidStep = Template.bind({});
MidStep.args = {
  currentStep: 3,
  totalStep: 4,
};

export const LastStep = Template.bind({});
LastStep.args = {
  currentStep: 5,
  totalStep: 4,
};
