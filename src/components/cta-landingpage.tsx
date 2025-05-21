import { MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const CTA = () => (
  <div className="w-full py-20 lg:py-40 bg-muted">
    <div className="container mx-auto">
      <div className="flex flex-col text-center py-14 gap-4 items-center">
        <div>
          <Badge>Get started</Badge>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
            Try our platform today!
          </h3>
          <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl">
            Applying for loans—whether personal or for your startup—can be
            overwhelming. Eliminate the guesswork and delays by moving away from
            outdated approval processes. Our platform uses smart, predictive
            technology to make loan evaluations faster, clearer, and more
            accurate than ever.
          </p>
        </div>
        <div className="flex flex-row gap-4">
          <Button className="gap-4" variant="outline">
            Get in touch <PhoneCall className="w-4 h-4" />
          </Button>
          <Button className="gap-4">
            Sign up here <MoveRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  </div>
);
