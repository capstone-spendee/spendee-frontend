"use client"

import * as React from "react"
import { CloudSun, Flame, Leaf, Moon, RefreshCw, Smile, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const activeTheme = theme === "system" ? resolvedTheme : theme
  const isDarkTheme = activeTheme === "dark" || activeTheme === "sea" || activeTheme === "night"
  const ThemeIcon =
    activeTheme === "mushaf"
      ? Leaf
      : activeTheme === "rawdah"
        ? Smile
        : activeTheme === "sea"
          ? CloudSun
          : activeTheme === "night"
            ? Flame
            : activeTheme === "system"
              ? RefreshCw
              : isDarkTheme
                ? Moon
                : Sun

  const themeItems = [
    { value: "light", label: "Light" },
    { value: "dark", label: "Dark" },
    { value: "mushaf", label: "Mushaf" },
    { value: "rawdah", label: "Rawdah" },
    { value: "sea", label: "Sea" },
    { value: "night", label: "Night" },
    { value: "system", label: "System" },
  ] as const

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <ThemeIcon className="h-[1.2rem] w-[1.2rem] transition-all" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themeItems.map((item) => {
          return (
            <DropdownMenuItem
              key={item.value}
              onClick={() => setTheme(item.value)}
            >
              {item.label}
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
