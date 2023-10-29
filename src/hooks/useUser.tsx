import React, { createContext, useContext, useState, useEffect } from 'react';
import { performApi } from '../utils/api';
import { useToken } from './useToken';

type UserData = {
  name: string;
  email: string;
  photo: string;
  balance: number;
  userType: string;
}

const UserContext = createContext<UserData | null>(null);

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const token = useToken();

  useEffect(() => {
    const getUserData = async () => {
      if (token) {
        try {
          const response = await performApi.getData("auth/me", token);
          setUser(response.data);
        } catch (error) {
          console.error('Erro ao buscar informações do usuário:', error);
          setUser(null);
        }
      }
      setIsLoading(false);
    };

    getUserData();
  }, [token]);

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};
