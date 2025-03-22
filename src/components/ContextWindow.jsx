import { createContext } from "react";
import json from "../assets/Companies.json";

export const Context = createContext();

export const ContextWindow = ({ children }) => {
  const allData = json;
  return <Context.Provider value={{ allData }}>{children}</Context.Provider>;
};
