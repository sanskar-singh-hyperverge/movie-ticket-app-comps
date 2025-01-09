
import { Meta, StoryFn } from "@storybook/react";
import TicketCard from "./ticketCard";

export default {
  title: "Components/TicketCard",
  component: TicketCard,
  argTypes: {
    isPaymentSuccess: {
      control: { type: "boolean" },
      description: "Determines if the payment was successful",
    },
    movieName: {
      control: { type: "text" },
      description: "Name of the movie",
    },
    ticketCount: {
      control: { type: "text" },
      description: "Number of tickets booked",
    },
    ticketPrice: {
      control: { type: "number" },
      description: "Price of a ticket",
    },
    sessionTime: {
      control: { type: "text" },
      description: "Session time of the movie",
    },
    seatNumbers: {
      control: { type: "object" }, // Use "object" for arrays
      description: "List of seat numbers booked",
    },
    buffetProducts: {
      control: { type: "text" },
      description: "Buffet items included",
    },
    buffetPrice: {
      control: { type: "number" },
      description: "Price of the buffet",
    },
    movieTheater: {
      control: { type: "text" },
      description: "Name of the movie theater",
    },
  },
} as Meta<typeof TicketCard>;

const Template: StoryFn<typeof TicketCard> = (args) => <TicketCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  movieName: "Avatar: The Way of Water",
  ticketCount: "2",
  ticketPrice: 15,
  sessionTime: "7:00 PM",
  seatNumbers: ["A1", "A2"],
  buffetProducts: "Popcorn and Soda",
  buffetPrice: 10,
  movieTheater: "Cineplex",
  isPaymentSuccess: false,
};

export const PaymentSuccess = Template.bind({});
PaymentSuccess.args = {
  movieName: "Avatar: The Way of Water",
  ticketCount: "2",
  ticketPrice: 15,
  sessionTime: "7:00 PM",
  seatNumbers: ["A1", "A2"],
  buffetProducts: "Popcorn and Soda",
  buffetPrice: 10,
  movieTheater: "Cineplex",
  isPaymentSuccess: true,
};
