"use client";
import { ContextProviderChildren, ContextUserTypes } from "@/types/types";
import { createContext, useContext, useEffect, useState } from "react";

export const ContextUser = createContext<ContextUserTypes | null>(null);

export const useContextUser = (): ContextUserTypes => {
  const context = useContext(ContextUser);
  if (!context) throw new Error("Context insuficient");
  return context;
};

export default function ContextProvider({ children }: ContextProviderChildren) {
  const [username, setUsername] = useState<string>("");

  const login = async (name: string) => {
    setUsername(name); 
  };

  const logout = async () => {
    setUsername(""); 
    localStorage.removeItem("username-feedback"); 
    window.location.reload()
  };

  useEffect(() => {
      const userLocal = localStorage.getItem("username-feedback"); 
      if(userLocal){
        setUsername(userLocal)
      }
  }, []);

  useEffect(() => {
    localStorage.setItem("username-feedback", username); 
  }, [login]);


  return (
    <ContextUser.Provider value={{ username, login, logout }}>
      {children}
    </ContextUser.Provider>
  );
}
