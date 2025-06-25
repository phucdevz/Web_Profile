
import React from 'react';
import { useProfile } from '../contexts/ProfileContext';
import { AdminLogin } from './AdminLogin';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated } = useProfile();

  if (!isAuthenticated) {
    return <AdminLogin />;
  }

  return <>{children}</>;
}
