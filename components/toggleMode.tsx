"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

interface Props {
  className?: string;
}
export function ModeToggle({className}:Props) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  localStorage.setItem("theme", theme as string);
  
  return (
    <div className={className}>
      <div className="flex justify-center items-center">
      {theme === "dark" ? (
        <Sun
          className="cursor-pointer"
          size={25}
          onClick={() => setTheme("light")}
        />
      ) : (
        <Moon
          fill="black"
          className="cursor-pointer border-0"
          size={25}
          onClick={() => setTheme("dark")}
        />
      )}
    </div>
    </div>
  );
}
