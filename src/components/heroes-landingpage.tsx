'use client'

import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";

export const Hero = () => (
  <div className="w-full  py-20 lg:py-40">
    <div className="container mx-auto px-14">
      <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="flex gap-4 flex-col">
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
              This is the start of something!
            </h1>
            <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
              Managing a small business today is already tough. Avoid further
              complications by ditching outdated, tedious trade methods. Our
              goal is to streamline SMB trade, making it easier and faster than
              ever.
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <Button size="lg" className="gap-4">
              Check your financial health <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <div className="bg-blue-200 rounded-xl aspect-square"></div>
      </div>
    </div>
  </div>
);