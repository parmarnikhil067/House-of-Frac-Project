import { type Meta, type StoryObj } from '@storybook/react-vite';
import Login from '@/pages/Auth/Login';

const meta: Meta<typeof Login> = {
  title: 'Pages/Auth/Login',
  component: Login,
};

export default meta;
type Story = StoryObj<typeof Login>;

export const Default: Story = {
  render: () => <Login />,
};
