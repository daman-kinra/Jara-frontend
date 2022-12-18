"use client";

import React, { createContext, useState } from "react";
interface IState {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}
const intialState: IState = {
  isLoggedIn: false,
  setIsLoggedIn: () => {},
};
export const AUTH = createContext(intialState);
function AuthContext({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <AUTH.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AUTH.Provider>
  );
}

export default AuthContext;
