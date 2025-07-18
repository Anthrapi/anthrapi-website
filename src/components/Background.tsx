import React from 'react';
import Image from 'next/image';

export default function Background() {
  return (
    <div className="absolute inset-0 -z-1">
      <Image
        src="/background.webp"
        alt="Background"
        fill
        className="object-cover object-top"
        priority
      />
    </div>
  );
}
