import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const Feature = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto px-14">
      <div className="grid border rounded-lg container py-8 grid-cols-1 gap-8 items-center lg:grid-cols-2 px-5">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col ">
            <div>
              <Badge variant="outline">Our Feature</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl lg:text-5xl tracking-tighter max-w-xl text-left font-regular">
                Something new in finance!
              </h2>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                Getting a loan—whether personal or for your startup—can be complex. We are here to change that.
              </p>
            </div>
          </div>
          <div className="grid lg:pl-6 grid-cols-1 sm:grid-cols-3 items-start lg:grid-cols-1 gap-6">
            <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Easy to use</p>
                <p className="text-muted-foreground text-sm">
                  We have designed our platform to be intuitive and user-friendly, so you can focus on your goals, not the paperwork.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Fast and reliable</p>
                <p className="text-muted-foreground text-sm">
                 With predictive technology, we deliver quick and accurate loan approval insights you can trust.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Smart and transparent</p>
                <p className="text-muted-foreground text-sm">
                  We have built a system that’s not just modern—but also clear and data-driven, so you always know where you stand.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-muted rounded-md aspect-square"></div>
      </div>
    </div>
  </div>
);