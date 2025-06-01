'use client';
import Image from 'next/image';
import React from 'react';
import logo from '../../../public/image/logo.png';
import { AvatarCircles } from '@/components/magicui/avatar-circles';

const avatars = [
  {
    imageUrl: 'https://avatars.githubusercontent.com/u/138117928',
    profileUrl: 'https://github.com/fullstemplate',
  },
  {
    imageUrl: 'https://avatars.githubusercontent.com/u/136924662',
    profileUrl: 'https://github.com/cahyotriatmojo',
  },
  {
    imageUrl: 'https://avatars.githubusercontent.com/u/139690628',
    profileUrl: 'https://github.com/IrnandaNanda',
  },
  {
    imageUrl: 'https://avatars.githubusercontent.com/u/113280316',
    profileUrl: 'https://github.com/riolintang-0',
  },
  {
    imageUrl: 'https://avatars.githubusercontent.com/u/137415687',
    profileUrl: 'https://github.com/Silvikusuma04',
  },
];

export default function Footer() {
  return (
    <div className="flex justify-around items-center border-t py-4 border bg-sidebar m-4 rounded-lg">
      <div className="flex  items-center gap-2">
        <Image
          src={logo}
          alt="logo"
          width={35}
          height={35}
        />
        <h1 className="text-1 md:text-xl font-semibold">Spendee</h1>
      </div>
      <div className="flex items-center gap-2">
        <h1 className="text-muted-foreground text-sm md:text-lg">Dev team:</h1>
        <AvatarCircles
          numPeople={1}
          avatarUrls={avatars}
          className="gap-1"
        />
      </div>
    </div>
  );
}
