import { type Meta, type StoryObj } from '@storybook/react-vite';
import Profile from '@/pages/Private/Profile';

const meta: Meta<typeof Profile> = {
  title: 'Pages/Private/Profile',
  component: Profile,
};

export default meta;
type Story = StoryObj<typeof Profile>;

export const Default: Story = {
  render: () => <Profile />,
};
