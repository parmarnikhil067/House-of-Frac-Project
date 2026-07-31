import { ROUTES } from '@/constants';
import { useAuth } from '@/hooks/useAuth';
import type { JSX } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRoutes(): JSX.Element {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Outlet /> : <Navigate to={ROUTES.LOGIN} />;
}
