'use client';
import { BlurFade } from '@/components/magicui/blur-fade';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { TextAnimate } from '@/components/magicui/text-animate';
import { TextReveal } from '@/components/magicui/text-reveal';
import { Button } from '@/components/ui/button';
import { Github, Rocket } from 'lucide-react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import mockupDark from '../../../public/image/mockupDark.png';
import mockupLight from '../../../public/image/mockupLight.png';
import Footer from './footer';
import AboutSpendee from './information';
import Navbar from './nav';
import { useEffect, useState } from 'react';

// https://api.github.com/orgs/capstone-spendee/repos   get start in api.github

export default function HomePage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const mockupImage = theme === 'dark' ? mockupDark : mockupLight;
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center pb-6 pt-12">
        <div className="flex flex-col items-center justify-center pb-6">
          <Button
            variant={'outline'}
            className="rounded-[20px] "
          >
            <Github />
            Star 3
          </Button>

          <TextAnimate
            animation="slideLeft"
            by="character"
            className="text-5xl md:text-6xl z-10 pb-4 lg:text-7xl xl:text-8xl text-center font-bold text-foreground tracking-wider"
          >
            Spendee
          </TextAnimate>
          <BlurFade>
            <p className="text-center text-base md:text-xl">Check your startups eligibility</p>
          </BlurFade>
        </div>
        <Link href='/dashboard'>
          <ShimmerButton>
            Coba Sekarang <Rocket className="inline-block w-5 h-5 ml-2" />
          </ShimmerButton>
        </Link>
      </div>
      <div className="flex justify-center items-center py-12">
        <Image
          src={mockupImage}
          alt="Mockup"
          width={1000}
          height={500}
          className="bg-[transparent] rounded-sm"
          style={{ boxShadow: '27px 27px 2px  var(--sidebar-ring) ' }}
        />
      </div>
      <TextReveal>You can check your own loan eligibility and the future success of your Startup .</TextReveal>
      <AboutSpendee />
      {/* <About /> */}
      <Footer />
    </div>
  );
}
