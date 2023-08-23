"use client";
import {
  getLocalStorageValue,
  setLocalStorage,
} from "@/utils/localstorage/localstorage";
import { FC, ReactNode, createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({} as any);

const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const defaultTheme = getLocalStorageValue("theme") || "light";
  const [mood, setMood] = useState(defaultTheme);
  const toggleMood = () =>
    setMood((prev) => (prev == "light" ? "dark" : "light"));

  useEffect(() => {
    setLocalStorage("theme", mood);
  }, [mood]);
  return (
    <ThemeContext.Provider value={{ toggleMood, mood }}>
      <div className={`theme ${mood}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;
