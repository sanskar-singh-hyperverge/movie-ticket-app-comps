import { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import TicketDetailsSelector from "./ticketSelector.tsx";

export default {
  title: "Components/TicketDetailsSelector",
  component: TicketDetailsSelector,
} as Meta<typeof TicketDetailsSelector>;

const Template: StoryFn<typeof TicketDetailsSelector> = (args) => {
  const [theater, setTheater] = useState<string>(""); 
  const [date, setDate] = useState<string>("");
  const [buffet, setBuffet] = useState<string>("");

  return (
    <TicketDetailsSelector
      {...args}
      theater={theater}
      date={date}
      buffet={buffet}
      onSelectTheater={(value) => setTheater(value)}
      onSelectDate={(value) => setDate(value)}
      onSelectBuffet={(value) => setBuffet(value)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  theater: "",
  date: "",
  buffet: "",
  theaterOptions: ["Theater A", "Theater B", "Theater C"],
  dateOptions: ["2025-01-10", "2025-01-11", "2025-01-12"],
  buffetOptions: ["choose your buffet"],
};
