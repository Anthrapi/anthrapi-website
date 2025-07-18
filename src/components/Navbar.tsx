import Image from 'next/image';
import React from 'react';

export default function Navbar() {
  return (
    <nav
      className="flex items-center justify-between p-4"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex items-center gap-2">
        <Image src="/logo.webp" alt="Anthrapi logo" width={28} height={28} />
        <h1 className="text-2xl font-bold">Anthrapi</h1>
      </div>
    </nav>
  );
}
