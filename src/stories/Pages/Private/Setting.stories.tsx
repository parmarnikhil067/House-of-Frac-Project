import { type Meta, type StoryObj } from '@storybook/react-vite';
import Setting from '@/pages/Private/Setting';

const meta: Meta<typeof Setting> = {
  title: 'Pages/Private/Setting',
  component: Setting,
};

export default meta;
type Story = StoryObj<typeof Setting>;

export const Default: Story = {
  render: () => <Setting />,
};
