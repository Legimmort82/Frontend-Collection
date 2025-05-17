export interface User {
    id: number;
    name: string;
    email: string;
    role: string; // e.g., 'admin' | 'user'
  }
  
  export interface AuthContextType {
    user: User | null;
    loading: boolean;
    login: (userData: User) => void;
    logout: () => void;
  }
  // context/AuthContext.tsx
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Example: Fetch user from API or localStorage
    const fetchUser = async () => {
      try {
        const res = await fetch('/api/me');
        if (res.ok) {
          const data = await res.json();
          setUser(data.user); // Ensure data.user matches User type
        }
      } catch (err) {
        console.error('Error fetching user', err);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  const login = (userData: User) => {
    setUser(userData);
    // Optionally, set tokens/cookies
  };

  const logout = () => {
    setUser(null);
    // Optionally, remove tokens/cookies
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
