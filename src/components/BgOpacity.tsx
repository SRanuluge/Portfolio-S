"use client";
import React from "react";
import { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";

export const BgOpacity = () => {
  const { mood } = useContext(ThemeContext);
  return (
    <div
      className={`absolute self-center top-0 -z-0 h-screen w-full bg-[rgb(39,36,36)] ${
        mood === "dark" ? "bg-opacity-50" : "bg-opacity-0"
      } bg-cover bg-center`}
    />
  );
};
