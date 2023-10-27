import { createContext, useState } from "react";

export const User = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("weegembump");

  return (
    <User.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </User.Provider>
  );
}