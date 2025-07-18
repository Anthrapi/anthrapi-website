import Image from 'next/image';
import React from 'react';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4">
      <div className="mx-auto flex items-center gap-2">
        <Image src="/logo.webp" alt="Anthrapi" width={28} height={28} />
        <p className="text-2xl font-bold">Anthrapi</p>
      </div>
    </nav>
  );
}
