import ForgotPassword from '@/pages/Auth/ForgotPassword';
import { type Meta, type StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof ForgotPassword> = {
  title: 'Pages/Auth/ForgotPassword',
  component: ForgotPassword,
};

export default meta;
type Story = StoryObj<typeof ForgotPassword>;

export const Default: Story = {
  render: () => <ForgotPassword />,
};
