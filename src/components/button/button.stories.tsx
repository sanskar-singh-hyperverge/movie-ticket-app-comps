
import { Meta, StoryObj } from '@storybook/react';
import "../../index.css";
import Button from './button.tsx';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    size: {
      control: 'radio',
      options: ['small', 'base', 'large'],
    },
    type: {
      control: 'radio',
      options: ['dimmed', 'primary', 'secondary', 'outline'],
    },
    isDisabled: {
      control: 'boolean',
    },
    rounded: {
      control: 'boolean',
    },
    onClick: { action: 'clicked' },
  },
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        label: 'Click Me',
        type: 'primary',
        size: 'base',
        isDisabled: false,
    },
};

export const Secondary: Story = {
    args: {
        label: 'Click Me',
        type: 'secondary',
        size: 'base',
        isDisabled: false,
    },
};

export const Dimmed: Story = {
    args: {
        label: 'Click Me',
        type: 'dimmed',
        size: 'base',
        isDisabled: false,
    },
};

export const Outline: Story = {
    args: {
        label: 'Click Me',
        type: 'outline',
        size: 'base',
        isDisabled: false,
    },
};

export const PrimarySmall: Story = {
    args: {
        label: 'Click Me',
        type: 'primary',
        size: 'small',
        isDisabled: false,
    },
};

export const PrimaryLarge: Story = {
    args: {
        label: 'Click Me',
        type: 'primary',
        size: 'large',
        isDisabled: false,
    },
};

export const Disabled: Story = {
    args: {
        label: 'Click Me',
        type: 'primary',
        size: 'base',
        isDisabled: true,
    },
};
