import { useQuery } from '@tanstack/react-query';
import { fetchUsersApi } from '@/api/users.api';

export function useUser() {
  const fetchUsers = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsersApi,
  });

  return {
    fetchUsers,
  };
}
