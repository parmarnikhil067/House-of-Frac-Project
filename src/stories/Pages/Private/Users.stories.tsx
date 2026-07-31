import { type Meta, type StoryObj } from '@storybook/react-vite';
import Users from '@/pages/Private/Users';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/lib/queryClient';

const meta: Meta<typeof Users> = {
  title: 'Pages/Private/Users',
  component: Users,
};

export default meta;
type Story = StoryObj<typeof Users>;

export const Default: Story = {
  render: () => (
    <QueryClientProvider client={queryClient}>
      <Users />
    </QueryClientProvider>
  ),
};
