import { createContext, useState } from "react";

export const Context = createContext();

export const ContextWindow = ({ children }) => {
  const [company, setCompany] = useState([]);
  return (
    <Context.Provider value={{ company, setCompany }}>
      {children}
    </Context.Provider>
  );
};
