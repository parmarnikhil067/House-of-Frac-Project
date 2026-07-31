import { createContext } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (token: string, userType: string) => void;
  logout: () => void;
  userType: string | null;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
