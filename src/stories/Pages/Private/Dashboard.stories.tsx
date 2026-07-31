import { type Meta, type StoryObj } from '@storybook/react-vite';
import Dashboard from '@/pages/Private/Dashboard';

const meta: Meta<typeof Dashboard> = {
  title: 'Pages/Private/Dashboard',
  component: Dashboard,
};

export default meta;
type Story = StoryObj<typeof Dashboard>;

export const Default: Story = {
  render: () => <Dashboard />,
};
