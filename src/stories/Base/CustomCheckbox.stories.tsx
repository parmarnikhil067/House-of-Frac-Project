import { useState } from 'react';
import { type Meta, type StoryObj } from '@storybook/react-vite';
import CustomCheckbox from '@/components/Base/CustomCheckbox';

const meta: Meta<typeof CustomCheckbox> = {
  title: 'Base/CustomCheckbox',
  component: CustomCheckbox,
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof CustomCheckbox>;

export const Default: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(args.checked || false);
    return (
      <CustomCheckbox
        {...args}
        checked={checked}
        onChange={(newChecked) => setChecked(newChecked)}
      />
    );
  },
  args: {
    label: 'Accept Terms',
    checked: false,
  },
};
