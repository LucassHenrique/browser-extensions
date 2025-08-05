"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import sun from "../../public/assets/images/icon-sun.svg";
import moon from "../../public/assets/images/icon-moon.svg";

import logoLight from "../../public/assets/images/logo.svg";
import logoDark from "../../public/assets/images/logo-white.svg";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");

    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="flex justify-between w-full">
      <Image src={isDark ? logoDark : logoLight} alt="Logo" width={150} />
      <button
        onClick={toggleTheme}
        className="bg-neutral-100 dark:bg-neutral-700 p-3 rounded-md"
      >
        <Image
          src={isDark ? sun : moon}
          alt="Theme icon"
          width={20}
          height={20}
        />
      </button>
    </div>
  );
}
