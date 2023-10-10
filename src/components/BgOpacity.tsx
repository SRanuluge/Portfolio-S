"use client";
import React from "react";
import { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";

export const BgOpacity = () => {
  const { mood } = useContext(ThemeContext);
  return (
    <div
      className={`absolute self-center top-0 -z-0 h-screen w-full transition-all  duration-500 ease-in bg-[#f3f3f3] ${
        mood === "dark" ? "bg-opacity-0" : "bg-opacity-10"
      } bg-cover bg-center`}
    />
  );
};
