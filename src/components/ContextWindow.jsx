import { createContext } from "react";
import allData from "../assets/Companies.json";

export const Context = createContext();

export const ContextWindow = ({ children }) => {
  return <Context.Provider value={{ allData }}>{children}</Context.Provider>;
};
