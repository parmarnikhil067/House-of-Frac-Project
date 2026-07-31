import { type Meta, type StoryObj } from '@storybook/react-vite';
import Signup from '@/pages/Auth/Signup';

const meta: Meta<typeof Signup> = {
  title: 'Pages/Auth/Signup',
  component: Signup,
};

export default meta;
type Story = StoryObj<typeof Signup>;

export const Default: Story = {
  render: () => <Signup />,
};
