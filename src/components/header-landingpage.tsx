"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export const Header = () => {
  const navigationItems = [
    {
      title: "Spendee",
      href: "/",
    },
  ];

  const [isOpen, setOpen] = useState(false);
  return (
    <header className="w-full z-40 fixed top-0 left-0 bg-background ">
      <div className="container relative mx-auto px-14 min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-2 items-center">
        {/* Left: Navigation */}
        <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
          {navigationItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="font-medium text-base px-3 py-2 rounded hover:bg-muted transition"
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="flex justify-end w-full gap-4">
          <Button variant="outline" asChild>
            <Link href="/dashboard">Sign in</Link>
          </Button>
          <Button asChild>
            <Link href="/register">Register</Link>
          </Button>
        </div>
        {/* Mobile: Hamburger */}
        <div className="flex w-12 shrink lg:hidden items-end justify-end">
          <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
          {isOpen && (
            <div className="absolute top-20 border-t flex flex-col w-full right-0 bg-background shadow-lg py-4 container gap-6">
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="flex justify-between items-center text-lg px-2 py-2"
                  onClick={() => setOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              <Button variant="outline" asChild className="w-full">
                <Link href="/sign-in" onClick={() => setOpen(false)}>
                  Sign in
                </Link>
              </Button>
              <Button asChild className="w-full">
                <Link href="/register" onClick={() => setOpen(false)}>
                  Register
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
