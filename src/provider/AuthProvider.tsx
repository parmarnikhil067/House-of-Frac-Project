import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { AuthContext } from '@/context/AuthContext';
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userType, setUserType] = useState<string | null>(null);

  useEffect(() => {
    const token = Cookies.get('authToken');
    const type = Cookies.get('userType');

    if (token) {
      setIsAuthenticated(true);
      setUserType(type || null);
    }
  }, []);

  const login = (token: string, type: string) => {
    Cookies.set('authToken', token, {
      expires: 7,
      secure: true,
      sameSite: 'strict',
    });
    Cookies.set('userType', type, {
      expires: 7,
      secure: true,
      sameSite: 'strict',
    });
    setIsAuthenticated(true);
    setUserType(type);
  };

  const logout = () => {
    Cookies.remove('authToken');
    Cookies.remove('userType');
    setIsAuthenticated(false);
    setUserType(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, userType }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
