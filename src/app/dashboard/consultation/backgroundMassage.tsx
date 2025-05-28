import Image from 'next/image';
import React from 'react';
import backgroundChat from '../../../../public/image/wabg.png';

export default function BackgroundImage() {
  return (
    <div className="absolute inset-0 z-[-1]">
      <Image
        src={backgroundChat}
        alt="background"
        layout="fill" 
        objectFit="cover" 
        quality={100} 
        priority
      />
    </div>
  );
}
