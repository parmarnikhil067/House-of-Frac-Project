import { Navigate, Outlet } from 'react-router-dom';
import type { JSX } from 'react';
import { ROUTES } from '@/constants';
import { useAuth } from '@/hooks/useAuth';

export default function AuthLayout(): JSX.Element {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to={ROUTES.LANDING} replace />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
}
