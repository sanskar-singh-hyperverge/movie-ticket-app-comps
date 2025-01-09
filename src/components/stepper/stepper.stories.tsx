
import { Meta, StoryObj } from "@storybook/react";
import Stepper from "./stepper.tsx";

const meta: Meta<typeof Stepper> = {
  title: "Components/StepProgress",
  component: Stepper,
  argTypes: {
    currentStep: {
      control: { type: "number" },
      description: "The current step in the progress",
      defaultValue: 1,
    },
    totalStep: {
      control: { type: "number" },
      description: "The total number of steps in the progress",
      defaultValue: 4,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Stepper>;

export const Default: Story = {
  args: {
    currentStep: 2,
    totalStep: 4,
  },
};

export const Step3of5: Story = {
  args: {
    currentStep: 3,
    totalStep: 5,
  },
};

export const FullProgress: Story = {
  args: {
    currentStep: 5,
    totalStep: 5,
  },
};

export const StartProgress: Story = {
  args: {
    currentStep: 1,
    totalStep: 3,
  },
};
