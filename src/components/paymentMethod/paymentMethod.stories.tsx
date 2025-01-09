// PaymentMethod.stories.tsx

import { StoryFn, Meta } from "@storybook/react";
import PaymentMethod from "./paymentMethod";

export default {
  title: "Components/PaymentMethod",
  component: PaymentMethod,
  argTypes: {
    backgroundColor: { control: "color" },
    borderColor: { control: "color" },
    borderRadius: { control: "text" },
    text: { control: "text" },
    imageUrl: { control: "text" },
  },
} as Meta<typeof PaymentMethod>;

// Template for creating stories
const Template: StoryFn<typeof PaymentMethod> = (args) => <PaymentMethod {...args} />;

// Apple Pay Story
export const ApplePay = Template.bind({});
ApplePay.args = {
  imageClassName: "h-[100%] w-13 rounded-lg",
  textClassName: "font-bold",
  className: "text-sm",
  borderRadius: "10px",
  borderColor: "#17e64e",
  text: "Pay with Apple Pay",
  backgroundColor: "linear-gradient(to right, #000000, #333333)",
  imageUrl: "/Group_56.jpg", // Replace with the actual path to your image
};
