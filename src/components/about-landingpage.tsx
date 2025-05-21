import { Badge } from "@/components/ui/badge";

export const About = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row gap-10 lg:items-center">
        <div className="flex gap-4 flex-col flex-1">
          <div>
            <Badge>About Us</Badge>
          </div>
          <div className="flex flex-col gap-8">
            <div className="bg-white/80 dark:bg-muted rounded-xl shadow-md p-6 md:p-8 border-l-4 border-spektr-cyan-50">
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-2 text-spektr-cyan-50">
                Who We Are
              </h2>
              <p className="text-base md:text-lg max-w-xl leading-relaxed tracking-tight text-muted-foreground">
                We are a forward-thinking financial technology company committed
                to transforming how individuals and startups access credit. By
                leveraging advanced data analytics and machine learning, we
                simplify the loan approval process—making it smarter, faster, and
                more transparent. Our team brings together expertise in finance,
                technology, and risk analysis to deliver real solutions to
                real-world financial challenges. ever.
              </p>
            </div>
            <div className="bg-white/80 dark:bg-muted rounded-xl shadow-md p-6 md:p-8 border-l-4 border-spektr-cyan-50">
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-2 text-spektr-cyan-50">
                Our Mission
              </h2>
              <p className="text-base md:text-lg max-w-xl leading-relaxed tracking-tight text-muted-foreground">
                Our mission is to empower people and startups with clear,
                data-driven insights that remove uncertainty from the loan
                application process. We believe that access to funding should be
                efficient, fair, and based on more than just traditional credit
                scores. Through innovation and responsible AI, we aim to redefine
                financial inclusion—one prediction at a time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
