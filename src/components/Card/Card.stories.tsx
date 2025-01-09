import { Meta, StoryObj } from '@storybook/react';
import Card, { CardProps } from './Card';
import StarRating from '../StarRating/StarRating'; // Ensure this exists
import '../../index.css';

// Storybook metadata with typing
export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    backgroundImages: {
      control: 'object', // For arrays of images or background URLs
    },
    backgroundVideo: {
      control: 'text', // For background video URL (string input)
    },
    backgroundColor: {
      control: 'text', // For background color (e.g., bg-blue-500)
    },
    rounded: {
      control: 'text', // For the rounded class (e.g., rounded-md)
    },
    borderStyle: {
      control: 'text', // For border styles (e.g., border-gray-400)
    },
    flexDirection: {
      control: 'radio',
      options: ['row', 'column'], // Flex direction options
    },
    justifyContent: {
      control: 'radio',
      options: ['start', 'center', 'end', 'between', 'around'], // Flexbox justify content options
    },
    alignItems: {
      control: 'radio',
      options: ['start', 'center', 'end', 'baseline', 'stretch'], // Flexbox align items options
    },
  },
} as Meta<CardProps>;

// Define Story type for proper typing
type Story = StoryObj<CardProps>;

// Custom Card Row Layout
export const CustomCardRowLayout: Story = {
  args: {
    id: '3',
    backgroundColor: 'bg-blue-500',
    rounded: 'rounded-lg',
    borderStyle: 'border-gray-400',
    flexDirection: 'row',
    className: 'w-96 h-48 justify-start items-center p-4',
    children: (
      <>
        <p className="text-white text-lg font-semibold">Custom Card Content</p>
        <p className="text-white text-lg font-semibold">Custom Card Content</p>
      </>
    ),
  },
};

// Card With Image
export const CardWithImage: Story = {
  args: {
    id: '2',
    backgroundImages: ['/kfp.jpg'], // Path to the image in the public directory
    backgroundColor: 'bg-green-500',
    rounded: 'rounded-[13px]',
    borderStyle: 'border-gray-400',
    justifyContent: 'end',
    alignItems: 'start',
    className: 'w-40 h-[200px] ml-2',
    children: (
      <>
        <p className="text-white text-sm">Item 1</p>
        <p className="text-white text-lg font-semibold">Item 2</p>
      </>
    ),
  },
};

// Movie Card with Rating and IMDb Info
export const MovieCard: Story = {
  args: {
    id: 'movie-card',
    backgroundImages: ['/kung-fu-panda.jpg'], // Replace with the actual path to the image
    backgroundColor: 'bg-transparent', // Transparent background
    rounded: 'rounded-lg', // Rounded corners
    borderStyle: '', // No border
    justifyContent: 'end',
    alignItems: 'start',
    className: 'w-72 h-40 p-4 flex flex-col',
    children: (
      <>
        {/* Movie Title */}
        <h3 className="text-lg font-bold text-white">Kung Fu Panda 4</h3>

        {/* Movie Subtitle */}
        <p className="text-sm text-gray-300">DreamWorks Animation</p>

        {/* Rating and IMDb Details */}
        <div className="flex items-center mt-2">
          {/* Star Rating */}
          <StarRating rating={4.0} />

          {/* Fractional Rating */}
          <p className="ml-2 text-gray-300 text-sm">(4/5)</p>
        </div>

        <div className="flex items-center mt-2">
          {/* IMDb Logo */}
          <img
            src="/imdb.png" // Path to the IMDb logo
            alt="IMDb Logo"
            className="w-10 h-5 object-contain mr-2" // Logo styling
          />

          {/* IMDb Rating */}
          <p className="text-sm font-bold text-white">8.1</p>
        </div>
      </>
    ),
  },
};

// Parent Card With Child Cards
export const ParentCardWithChildren: Story = {
  args: {
    id: 'parent-card',
    backgroundColor: 'bg-transparent', // Transparent background
    rounded: 'none', // No rounded corners
    borderStyle: '', // No border
    flexDirection: 'row', // Flex direction for horizontal alignment
    className: 'w-[300px] h-[200px] flex', // Ensure parent card layout is flex
    children: (
      <>
        {/* Left Child Card (40% Width) */}
        <Card
          id="2"
          backgroundImages={['/kfp.jpg']} // Path to the image in the public directory
          backgroundColor="bg-transparent"
          rounded="none"
          borderStyle="border-gray-400"
          justifyContent="end"
          alignItems="start"
          className="w-2/5 h-[200px] ml-2"
        >
          <h3 className="text-white">Item 1</h3>
          <p className="text-white font-semibold">Item 2</p>
        </Card>

        {/* Right Child Card (60% Width) */}
        <Card
          id="movie-card"
          backgroundImages={['/kung-fu-panda.jpg']}
          backgroundColor="rgba(0, 0, 0, 0)" // Transparent background
          rounded="none"
          borderStyle=""
          justifyContent="end"
          alignItems="start"
          className="w-3/5 h-[200px] p-4 flex flex-col"
        >
          {/* Movie Title */}
          <h3 className="text-lg font-bold text-white">Kung Fu Panda 4</h3>

          {/* Movie Subtitle */}
          <p className="text-sm text-gray-300">DreamWorks Animation</p>

          {/* Rating and IMDb Details */}
          <div className="flex items-center mt-2">
            {/* Star Rating */}
            <StarRating rating={4.0} />

            {/* Fractional Rating */}
            <p className="ml-2 text-gray-300 text-sm">(4/5)</p>
          </div>

          <div className="flex items-center mt-2">
            {/* IMDb Logo */}
            <img
              src="/imdb.png" // Path to the IMDb logo
              alt="IMDb Logo"
              className="w-10 h-5 object-contain mr-2"
            />
            <p className="text-sm font-bold text-white">8.1</p>
          </div>
        </Card>
      </>
    ),
  },
};
