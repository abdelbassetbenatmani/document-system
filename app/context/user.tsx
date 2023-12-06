"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';


import { useRouter } from 'next/navigation';
import { ID, account } from '@/config/appwrite';
import useGetProfileByUserId from '@/hooks/useGetProfileByUserId';
import useCreateProfile from '@/hooks/useCreateProfile';
import { INewUser, UserContextTypes } from '@/types';


const UserContext = createContext<UserContextTypes | null>(null);

const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const router = useRouter()
  const [user, setUser] = useState<INewUser | null>(null);
  const [loginError, setLoginError] = useState<string | null>(null);

  const checkUser = async () => {
    try {
      const currentSession = await account.getSession("current");
      if (!currentSession) return

      const promise = await account.get() as any
      const profile = await useGetProfileByUserId(promise?.$id)

      setUser({ id: promise?.$id, name: promise?.name, email: promise?.email });
    } catch (error) {
      setUser(null);
    }
  };

  useEffect(() => { checkUser() }, []);

  const register = async (name: string, email: string, password: string) => {

    try {
      const promise = await account.create(ID.unique(), email, password, name)
      await account.createEmailSession(email, password);

      await useCreateProfile({
        accountId: promise?.$id,
        name: name,
        email: email,
      })
      await checkUser() 

    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const login = async (email: string, password: string) => {
    try {
      await account.createEmailSession(email, password);
      await checkUser();
      setLoginError(null); 
      
    } catch (error) {
      console.error(error);
      setLoginError('Incorrect email or password');
    }
  };

  const logout = async () => {
    try {
      await account.deleteSession('current');
      setUser(null);
      router.refresh()
    } catch (error) {
      console.error(error);
    }
  };

  return (
      <UserContext.Provider value={{ user, register, login, logout, checkUser,loginError }}>
          {children}
      </UserContext.Provider>
  );
};

export default UserProvider;

export const useUser = () => useContext(UserContext)