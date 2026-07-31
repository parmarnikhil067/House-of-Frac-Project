import { useState } from 'react';
import { type Meta, type StoryObj } from '@storybook/react-vite';
import CustomInput from '@/components/Base/CustomInput';

const meta: Meta<typeof CustomInput> = {
  title: 'Base/CustomInput',
  component: CustomInput,
  argTypes: {
    label: { control: 'text' },
    type: { control: 'text' },
    placeholder: { control: 'text' },
    error: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof CustomInput>;

// Default interactive story
export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value || '');

    return (
      <CustomInput
        {...args}
        value={value}
        onChange={(newValue) => setValue(newValue)}
      />
    );
  },
  args: {
    label: 'Name',
    type: 'text',
    value: '',
    placeholder: 'Enter your name',
    error: '',
  },
};

export const WithError: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value || '');

    return (
      <CustomInput
        {...args}
        value={value}
        onChange={(newValue) => setValue(newValue)}
      />
    );
  },
  args: {
    label: 'Name',
    type: 'text',
    value: '',
    placeholder: 'Enter your name',
    error: 'This field is required',
  },
};
