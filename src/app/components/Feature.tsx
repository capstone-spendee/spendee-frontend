'use client';

import { AnimatedShinyText } from '@/components/magicui/animated-shiny-text';
import { Pointer } from '@/components/magicui/pointer';
import { Badge } from '@/components/ui/badge';
import { Brain, Building2, GalleryHorizontalEnd, Repeat, Users } from 'lucide-react';
import Image from 'next/image';
import cutMocup from '../../../public/image/cutmockupdarkmode.png';

export default function FeatureSpendee() {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-14">
        <div className="grid rounded-lg py-5 grid-cols-1 gap-8 lg:grid-cols-2 px-5 border bg-sidebar">
          <div className="flex gap-10 flex-col">
            <div className="flex gap-4 flex-col">
              <div>
                <Badge
                  variant="outline"
                  className="p-1 px-2"
                >
                  <AnimatedShinyText>👆 Our Feature</AnimatedShinyText>
                </Badge>
              </div>
              <div className="flex gap-2 flex-col">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl tracking-tighter max-w-xl text-left font-semibold">Something new in finance!</h2>
                <p className="font-medium text-muted-foreground leading-relaxed tracking-tight max-w-xl text-left text-sm sm:text-base">Getting a loan—whether personal or for your startup—can be complex. We are here to change that.</p>
              </div>
            </div>
            <div className="grid lg:pl-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 items-start gap-6">
              <div className="flex flex-row gap-6 items-start">
                <Users className="w-4 h-4 mt-2 text-primary flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <p className="font-medium">Check your loan eligibility</p>
                  <p className="text-muted-foreground text-sm">
                    We design an intuitive and easy-to-use platform that allows you to focus on your goals without being burdened by the complexity of paperwork. Powered by machine learning models, individual loan approval predictions
                    achieve <strong> 95%</strong> accuracy.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Building2 className="w-4 h-4 mt-2 text-primary flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <p className="font-medium">Predict the future of your startup</p>
                  <p className="text-muted-foreground text-sm">
                    Leveraging cutting-edge predictive technology, we provide fast and accurate loan approvals. Our machine learning model is <strong> 83%</strong> accurate in predicting startup success.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Brain className="w-4 h-4 mt-2 text-primary flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <p className="font-medium">Consultation with Ai</p>
                  <p className="text-muted-foreground text-sm">
                    Our AI assistant is always ready to provide clear, data-driven financial guidance whenever you need it. We present Machine Learning Expenditure Chatbot as a Risk Management Consultant, enhanced by Vertex AI. This chatbot
                    is built with advanced technology from <strong>Vertex AI</strong> and <strong>Google Cloud</strong>, showing accuracy above <strong>86%</strong> with support for more than <strong>10,000</strong> tokens.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <GalleryHorizontalEnd className="w-4 h-4 mt-2 text-primary flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <p className="font-medium">History of results</p>
                  <p className="text-muted-foreground text-sm">Easily access your eligibility history, supported by a transparent data-driven system.</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Repeat className="w-4 h-4 mt-2 text-primary flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <p className="font-medium">Convert money idr to usd</p>
                  <p className="text-muted-foreground text-sm">Instant and accurate currency conversion, ensuring you always know the value of your assets.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <Image
              src={cutMocup}
              alt="mockup"
              className="rounded-2xl border h-full w-full object-cover"
            />
          </div>
        </div>
        <Pointer>
          <div className="text-2xl">👆</div>
        </Pointer>
      </div>
    </div>
  );
}
