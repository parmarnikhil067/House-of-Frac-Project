import { useUser } from '@/hooks/useUsers';

export const UserList = () => {
  const {
    fetchUsers: { data, isLoading, isError },
  } = useUser();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching users</p>;

  return (
    <ul>
      {data?.success &&
        data.data.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
    </ul>
  );
};
