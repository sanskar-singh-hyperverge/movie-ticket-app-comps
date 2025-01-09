import { Meta, StoryObj } from "@storybook/react";
import Counter from "./Counter";

const meta: Meta<typeof Counter> = {
  title: "Components/Counter",
  component: Counter,
  argTypes: {
    initialValue: {
      control: "number",
      description: "Initial value of the counter",
      table: {
        defaultValue: { summary: '0' },
      },
    },
    minValue: {
      control: "number",
      description: "Minimum allowed value",
      table: {
        defaultValue: { summary: '-5' },
      },
    },
    maxValue: {
      control: "number",
      description: "Maximum allowed value",
      table: {
        defaultValue: { summary: '10' },
      },
    },
    label: {
      control: "text",
      description: "Label displayed below the counter",
    },
    orientation: {
      control: { type: "radio" },
      options: ["horizontal", "vertical"],
      description: "Counter layout orientation",
      table: {
        defaultValue: { summary: "horizontal" },
      },
    },
    customSize: {
      control: "object",
      description: "Custom width and height in pixels",
      table: {
        defaultValue: { summary: "{ width: '173', height: '58' }" },
      },
    },
    onChange: {
      action: "changed",
      description: "Callback fired when counter value changes",
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'A customizable counter component that supports both horizontal and vertical orientations.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Counter>;

export const Default: Story = {
  args: {
    initialValue: 0,
    minValue: -5,
    maxValue: 10,
  },
};

export const WithLabel: Story = {
  args: {
    initialValue: 2,
    minValue: 0,
    maxValue: 5,
    label: "Child",
  },
  parameters: {
    docs: {
      description: {
        story: 'Counter with a descriptive label below the value.',
      },
    },
  },
};

export const VerticalOrientation: Story = {
  args: {
    orientation: "vertical",
    initialValue: 3,
    minValue: 0,
    maxValue: 10,
    customSize: { width: "58", height: "173" },
  },
  parameters: {
    docs: {
      description: {
        story: 'Counter arranged vertically with controls stacked top to bottom.',
      },
    },
  },
};

export const SmallSize: Story = {
  args: {
    initialValue: 1,
    customSize: { width: "120", height: "40" },
    label: "Compact",
  },
  parameters: {
    docs: {
      description: {
        story: 'A smaller version of the counter.',
      },
    },
  },
};

export const LargeSize: Story = {
  args: {
    initialValue: 1,
    customSize: { width: "300", height: "100" },
    label: "Expanded",
  },
  parameters: {
    docs: {
      description: {
        story: 'An enlarged version of the counter.',
      },
    },
  },
};

export const RestrictedRange: Story = {
  args: {
    initialValue: 5,
    minValue: 0,
    maxValue: 10,
    label: "Limited",
  },
  parameters: {
    docs: {
      description: {
        story: 'Counter with a restricted range of values.',
      },
    },
  },
};