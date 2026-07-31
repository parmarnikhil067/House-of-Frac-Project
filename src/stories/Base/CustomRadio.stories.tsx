import { useState } from 'react';
import { type Meta, type StoryObj } from '@storybook/react-vite';
import CustomRadio from '@/components/Base/CustomRadio';

const meta: Meta<typeof CustomRadio> = {
  title: 'Base/CustomRadio',
  component: CustomRadio,
  argTypes: {
    label: { control: 'text' },
    options: { control: 'object' },
  },
};

export default meta;
type Story = StoryObj<typeof CustomRadio>;

// Default interactive story
export const Default: Story = {
  render: (args) => {
    const [selected, setSelected] = useState(args.value || '');

    return (
      <CustomRadio
        {...args}
        value={selected}
        onChange={(val) => setSelected(val)}
      />
    );
  },
  args: {
    label: 'Select an option',
    value: '',
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
  },
};
