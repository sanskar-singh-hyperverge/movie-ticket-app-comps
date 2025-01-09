import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Footer from "./footer.tsx";

// Metadata for the Footer component
const meta: Meta = {
  title: "Components/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen", // Displays the footer in full width
  },
};

export default meta;

export const Default: StoryFn = () => (
  <Footer>
    <button
      className="bg-purple-500 hover:bg-purple-700 text-white font-medium text-lg px-6 py-3 rounded-lg flex items-center transition-all"
      onClick={() => alert("Button clicked!")}
    >
      Buy Ticket Now
      <span className="ml-2">&rarr;</span>
    </button>
  </Footer>
);

export const Rounded: StoryFn = () => (
    <Footer rounded>
        <button
        className="bg-purple-500 hover:bg-purple-700 text-white font-medium text-lg px-6 py-3 rounded-lg flex items-center transition-all"
        onClick={() => alert("Button clicked!")}
        >
        Buy Ticket Now
        <span className="ml-2">&rarr;</span>
        </button>
    </Footer>
);