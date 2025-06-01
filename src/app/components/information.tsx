'use client';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';
import Image from 'next/image';
import cutMocup from '../../../public/image/cutmockupdarkmode.png';
import { Pointer } from '@/components/magicui/pointer';
import { AnimatedShinyText } from '@/components/magicui/animated-shiny-text';

export default function AboutSpendee() {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto px-14">
        <div className="grid border rounded-lg py-5 grid-cols-1 gap-8 lg:grid-cols-2 px-5 shadow bg-sidebar">
          <div className="flex gap-10 flex-col">
            <div className="flex gap-4 flex-col ">
              <div>
                <Badge
                  variant="outline"
                  className="p-1 px-2"
                >
                  <AnimatedShinyText>👆 Our Feature</AnimatedShinyText>
                </Badge>
              </div>
              <div className="flex gap-2 flex-col">
                <h2 className="text-3xl lg:text-5xl tracking-tighter max-w-xl text-left font-semibold">Something new in finance!</h2>
                <p className="font-medium text-muted-foreground leading-relaxed tracking-tight max-w-xl text-left">Getting a loan—whether personal or for your startup—can be complex. We are here to change that.</p>
              </div>
            </div>
            <div className="grid lg:pl-6 grid-cols-1 sm:grid-cols-3 items-start lg:grid-cols-1 gap-6">
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p className="font-medium">Check your loan eligibility</p>
                  <p className="text-muted-foreground text-sm">We have designed our platform to be intuitive and user-friendly, so you can focus on your goals, not the paperwork.</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p className="font-medium">Predict the future of your startup</p>
                  <p className="text-muted-foreground text-sm">With predictive technology, we deliver quick and accurate loan approval insights you can trust.</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p className="font-medium">Consultation with Ai</p>
                  <p className="text-muted-foreground text-sm">We have built a system that’s not just modern—but also clear and data-driven, so you always know where you stand.</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p className="font-medium">History of results</p>
                  <p className="text-muted-foreground text-sm">We have built a system that’s not just modern—but also clear and data-driven, so you always know where you stand.</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p className="font-medium">Convert money idr to usd</p>
                  <p className="text-muted-foreground text-sm">We have built a system that’s not just modern—but also clear and data-driven, so you always know where you stand.</p>
                </div>
              </div>
            </div>
          </div>
          <Image
            src={cutMocup}
            alt="mockup"
            className="rounded-2xl border h-full object-cover"
          />
        </div>
        <Pointer>
          <div className="text-2xl">👆</div>
        </Pointer>
      </div>
    </div>
  );
}
