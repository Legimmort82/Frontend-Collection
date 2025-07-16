// hoc/withAuth.tsx
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';
import { ComponentType, FC, useEffect } from 'react';
// import { UserRole } from '../types/AuthTypes';

// types/AuthTypes.ts
export type UserRole = 'admin' | 'user' | 'guest'; // Expand as needed

interface WithAuthOptions {
  allowedRoles?: UserRole[];
  redirectTo?: string;
}

export function withAuth<P extends object>(
  WrappedComponent: ComponentType<P>,
  options: WithAuthOptions = {}
): FC<P> {
  const { allowedRoles = [], redirectTo = '/login' } = options;

  const AuthenticatedComponent: FC<P> = (props) => {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!loading) {
        if (!user) {
          router.push(redirectTo);
        } else if (allowedRoles.length > 0 && !allowedRoles.includes(user.role as UserRole)) {
          router.push('/unauthorized'); // No permission
        }
      }
    }, [user, loading, router]);

    if (loading || !user) {
      return <p>Loading...</p>; // Optional: customize loading
    }

    if (allowedRoles.length > 0 && !allowedRoles.includes(user.role as UserRole)) {
      return null; // Prevent flicker
    }

    return <WrappedComponent {...props} />;
  };

  return AuthenticatedComponent;
}
