"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import data from "@/data/data.json";
import Logo from "@/components/Logo";
import { Switch } from "@/components/ui/switch";
import { ThemeToggle } from "@/components/ThemeToggle";

import {
  notoSans,
  notoSansVariable,
  notoSansVariableItalic,
} from "@/app/fonts";

export default function Home() {
  const [switchStates, setSwitchStates] = useState<Record<string, boolean>>({});
  const [filter, setFilter] = useState<"All" | "Active" | "Inactive">("All");

  useEffect(() => {
    const savedFilter = localStorage.getItem("toolFilter") as
      | "All"
      | "Active"
      | "Inactive"
      | null;

    if (savedFilter && ["All", "Active", "Inactive"].includes(savedFilter)) {
      setFilter(savedFilter);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("toolFilter", filter);
  }, [filter]);

  const handleSwitchChange = (titulo: string, value: boolean) => {
    setSwitchStates((prev) => ({
      ...prev,
      [titulo]: value,
    }));
  };

  const filteredData = data.filter((tool) => {
    if (filter === "All") return true;
    const isActive = switchStates[tool.titulo] ?? false;
    return filter === "Active" ? isActive : !isActive;
  });

  return (
    <div className="bg-neutral-200 dark:bg-neutral-900 transition-colors min-h-screen">
      <div className="max-w-[1300px] mx-auto px-8 py-10">
        <header className="flex items-center justify-between bg-neutral-0 dark:bg-neutral-800 p-3 rounded-xl border-[0.1px] border-neutral-200 dark:border-neutral-700 shadow-sm transition-colors">
          <ThemeToggle />
        </header>

        <main className="mt-20">
          <div className="flex flex-col xl:flex-row items-center justify-between">
            <h1
              className={`${notoSans.className} text-3xl font-[700] text-neutral-900 dark:text-neutral-100`}
            >
              Extensions List
            </h1>

            <div
              className={`${notoSans.className} flex gap-3 font-[500] text-xl mt-3 xl:mt-0`}
            >
              {["All", "Active", "Inactive"].map((label) => {
                const isSelected = filter === label;
                return (
                  <div
                    key={label}
                    className="border border-transparent p-[3px] rounded-3xl hover:border-red-700 dark:hover:border-red-500"
                  >
                    <button
                      onClick={() =>
                        setFilter(label as "All" | "Active" | "Inactive")
                      }
                      className={`p-1 px-4 text-sm xl:text-base rounded-3xl border-[0.1px] shadow-sm transition-colors
                      ${
                        isSelected
                          ? "bg-red-700 dark:bg-red-500 text-white border-red-700"
                          : "bg-neutral-0 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
                      }
                    `}
                    >
                      {label}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex mt-5 xl:mt-10">
            <ul className="flex flex-wrap gap-3 xl:gap-4 justify-center items-center">
              {filteredData.map((tool) => (
                <li
                  key={tool.titulo}
                  className="flex flex-col w-80 xl:w-100 h-45 gap-3 bg-neutral-0 dark:bg-neutral-800 border-[0.1px] border-neutral-200 dark:border-neutral-700 shadow-sm rounded-2xl p-5 justify-between items-start transition-colors"
                >
                  <div className="flex gap-3">
                    <div className="w-12 h-12 flex-shrink-0">
                      <Image
                        src={tool.logo}
                        alt={tool.titulo}
                        width={48}
                        height={48}
                      />
                    </div>
                    <div>
                      <h3
                        className={`${notoSans.className} font-[600] text-neutral-900 dark:text-neutral-100`}
                      >
                        {tool.titulo}
                      </h3>
                      <p
                        className={`${notoSans.className} text-neutral-500 dark:text-neutral-400 text-sm`}
                      >
                        {tool.descricao}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between w-full">
                    <div className="border border-transparent p-[1px] rounded-2xl hover:border-red-700 dark:hover:border-red-500 transition-colors">
                      <button className="p-1.5 px-3 rounded-2xl border-[0.1px] border-neutral-200 dark:border-neutral-700 bg-neutral-0 hover:bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 shadow-sm dark:hover:bg-neutral-400 transition-colors">
                        Remove
                      </button>
                    </div>

                    <div className="border border-transparent hover:border-red-700 dark:hover:border-red-500 rounded-3xl px-[3px] py-[2px] flex transition-colors">
                      <Switch
                        checked={switchStates[tool.titulo] ?? false}
                        onCheckedChange={(checked) =>
                          handleSwitchChange(tool.titulo, checked)
                        }
                        className="data-[state=checked]:bg-red-700 dark:data-[state=checked]:bg-red-500"
                      />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}
