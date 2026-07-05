'use client';
import { BlurFade } from '@/components/magicui/blur-fade';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { TextAnimate } from '@/components/magicui/text-animate';
import { TextReveal } from '@/components/magicui/text-reveal';
import { Button } from '@/components/ui/button';
import { Github, Rocket } from 'lucide-react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import aboutSpendee from '../../../public/image/familyImage.jpg';
import mockupDark from '../../../public/image/mockupDark.png';
import mockupLight from '../../../public/image/mockupLight.png';
import FeatureSpendee from './Feature';
import Footer from './footer';
import Navbar from './nav';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { WordRotate } from '@/components/magicui/word-rotate';
// https://api.github.com/orgs/capstone-spendee/repos   get start in api.github

export default function HomePage() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const activeTheme = theme === 'system' ? resolvedTheme : theme;
  const mockupImage = activeTheme === 'dark' || activeTheme === 'sea' || activeTheme === 'night' ? mockupDark : mockupLight;
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center pb-6 pt-12">
        <div className="flex flex-col items-center justify-center pb-6">
          <a
            href="https://github.com/capstone-spendee"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              variant={'outline'}
              className="rounded-[20px]"
            >
              <Github />
              Github
            </Button>
          </a>

          <TextAnimate
            animation="slideLeft"
            by="character"
            className="text-5xl md:text-6xl z-10 pb-3 lg:text-7xl xl:text-8xl text-center font-bold text-foreground tracking-wider"
          >
            Spendee
          </TextAnimate>
          <BlurFade>
            <h1 className="text-center text-base md:text-xl flex justify-center items-center gap-1.5">
              {' '}
              <WordRotate
                className=" text-black dark:text-white animation-duration-initial"
                duration={7000}
                words={['Check your eligibility', 'Check your startups eligibility']}
              />
            </h1>
          </BlurFade>
        </div>
        <Link href="/dashboard">
          <ShimmerButton className="transform hover:-translate-y-1 transition duration-400">
            Coba Sekarang <Rocket className="inline-block w-5 h-5 ml-2" />
          </ShimmerButton>
        </Link>
      </div>
      <div className="max-w-screen-lg mx-auto px-4 py-12 flex justify-center items-center">
        <Image
          src={mockupImage}
          alt="Mockup"
          width={1000}
          height={500}
          className="w-full h-auto bg-transparent rounded-sm shadow-[10px_10px_1px_var(--sidebar-ring)] sm:shadow-[27px_27px_2px_var(--sidebar-ring)]"
        />
      </div>
      <div className="flex flex-col items-center justify-center bg-sidebar mt-3 py-6 px-4 sm:px-6 lg:px-8">
        {/* Bagian About Us */}
        <div className="flex flex-col md:flex-row max-w-screen-lg items-center mb-12 md:mb-16 gap-8 md:gap-12">
          <Image
            src={aboutSpendee}
            alt="about spendee"
            width={400}
            height={400} // Tambahkan height agar rasio aspek gambar lebih baik
            className="bg-transparent opacity-75 rounded w-full md:w-1/2 lg:w-2/5 h-auto object-cover" // Tambahkan w-full untuk responsif, object-cover
          />
          <div className="text-center md:text-left px-0 md:px-5 w-full md:w-1/2 lg:w-3/5">
            <h1 className="text-2xl sm:text-3xl md:text-4xl tracking-tighter font-bold py-2">About Us</h1>
            <TextAnimate animation="slideLeft">
              We are a forward-thinking financial technology company committed to transforming how individuals and startups access credit. By leveraging advanced data analytics and machine learning, we simplify the loan approval
              process—making it smarter, faster, and more transparent. Our team brings together expertise in finance, technology, and risk analysis to deliver real solutions to real-world financial challenges.
            </TextAnimate>
          </div>
        </div>

        <div className="flex flex-col md:flex-row max-w-screen-lg items-center gap-6 md:gap-8 w-full">
          <motion.div
            className="p-6 border rounded-xl w-full md:w-1/3 flex flex-col items-center text-center"
            whileHover={{ scale: 0.97 }}
            whileTap={{ scale: 0.99 }}
          >
            <TextAnimate
              animation="slideLeft"
              className="font-bold text-lg mb-2"
            >
              Data-Driven
            </TextAnimate>
            <TextAnimate
              animation="slideLeft"
              className="text-base"
            >
              Leveraging advanced technology for comprehensive data analysis
            </TextAnimate>
          </motion.div>
          <motion.div
            className="p-6 border rounded-xl w-full md:w-1/3 flex flex-col items-center text-center"
            whileHover={{ scale: 0.97 }}
            whileTap={{ scale: 0.99 }}
          >
            <TextAnimate
              animation="slideLeft"
              className="font-bold text-lg mb-2"
            >
              Risk Mitigation
            </TextAnimate>
            <TextAnimate
              animation="slideLeft"
              className="text-base"
            >
              Minimize funding risks with early identification
            </TextAnimate>
          </motion.div>
          <motion.div
            className="p-6 border rounded-xl w-full md:w-1/3 flex flex-col items-center text-center"
            whileHover={{ scale: 0.97 }}
            whileTap={{ scale: 0.99 }}
          >
            <TextAnimate
              animation="slideLeft"
              className="font-bold text-lg mb-2 "
            >
              Efficient & Transparent
            </TextAnimate>
            <TextAnimate
              animation="slideLeft"
              className="text-base"
            >
              Efficient evaluation process, supported by data transparency
            </TextAnimate>
          </motion.div>
        </div>
      </div>
      <TextReveal>Smart Solution for AI-Based Startup Funding and Individual Loan Eligibility Assessment.</TextReveal>
      <FeatureSpendee />
      <Footer />
    </div>
  );
}
