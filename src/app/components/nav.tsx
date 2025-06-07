'use client';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import logo from '../../../public/image/logo.png';
import { ModeToggle } from './theme-toggle';
import InstallButton from './installButton';

export default function Navbar() {
  return (
    <div className="flex md:justify-around justify-between px-4 py-2 border">
      <Image
        src={logo}
        alt="Logo"
        width={43}
        // height={4}
      />
      <div className="flex items-center gap-2">
        <Button
          variant={'outline'}
          className="rounded-[20px] border-2"
        >
          Sign In
        </Button>
        <InstallButton />
        <ModeToggle />
      </div>
    </div>
  );
}
