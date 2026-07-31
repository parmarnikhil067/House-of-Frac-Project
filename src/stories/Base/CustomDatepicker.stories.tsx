import { useState } from 'react';
import { type Meta, type StoryObj } from '@storybook/react-vite';
import CustomDatepicker from '@/components/Base/CustomDatepicker';

const meta: Meta<typeof CustomDatepicker> = {
  title: 'Base/CustomDatepicker',
  component: CustomDatepicker,
  argTypes: {
    placeholder: { control: 'text' },
    minDate: { control: 'date' },
    maxDate: { control: 'date' },
  },
};

export default meta;
type Story = StoryObj<typeof CustomDatepicker>;

// Default interactive story
export const Default: Story = {
  render: (args) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(
      args.value || null
    );

    return (
      <CustomDatepicker
        {...args}
        value={selectedDate}
        onChange={(date) => setSelectedDate(date)}
      />
    );
  },
  args: {
    placeholder: 'Select a date',
    value: null,
  },
};
