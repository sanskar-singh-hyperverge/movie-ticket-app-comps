
import HeroSection, { HeroSectionProps } from './HeroSection'; // Adjust the path if necessary
import { StoryObj } from '@storybook/react'; // Import StoryObj for typing

// Define Storybook metadata with typing
export default {
  title: 'Components/HeroSection',
  component: HeroSection,
  argTypes: {
    videoUrl: { control: 'text', defaultValue: '/video.mp4' },
    posterUrl: { control: 'text', defaultValue: '/kfp.jpg' },
    title: { control: 'text' },
    studio: { control: 'text' },
    rating: { control: 'number', min: 0, max: 10, step: 0.1 },  // IMDb rating
    userRating: { control: 'number', min: 0, max: 5, step: 0.1 },  // User rating (out of 5)
  },
} as const;

// Define the type of Story
type Story = StoryObj<HeroSectionProps>;

// Story 1: Basic Example
export const Default: Story = {
  args: {
    title: 'Kung Fu Panda 4',
    studio: 'DreamWorks Animation',
    rating: 8.1,
    userRating: 4,
    videoUrl: '/video.mp4',
    posterUrl: '/kfp.jpg',
  },
};

// Story 2: Movie with high IMDb rating
export const HighRating: Story = {
  args: {
    title: 'The Dark Knight',
    studio: 'Warner Bros.',
    rating: 9.0,
    userRating: 5,
    videoUrl: '/video.mp4',
    posterUrl: '/interstellar.jpeg',
  },
};
