import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex w-full items-center justify-between px-4 py-4 font-medium sm:px-8 sm:py-6">
      {/* Logo and Brand */}
      <Link
        href="/"
        className="flex items-center space-x-2 transition-opacity hover:opacity-80"
      >
        <Image
          src="/logo.webp"
          alt="Anthrapi Logo"
          width={32}
          height={32}
          className="h-4 w-4 sm:h-4 sm:w-4"
        />
        <span className="text-lg font-semibold sm:text-xl">Anthrapi</span>
      </Link>

      {/* Navigation Links - Hidden on mobile */}
      <div className="hidden items-center space-x-6 rounded-full px-8 py-2 text-sm shadow-xl transition-colors sm:px-8 sm:text-base md:flex lg:space-x-24">
        <Link href="#who" className="transition-colors hover:text-gray-700">
          Who
        </Link>
        <Link href="#why" className="transition-colors hover:text-gray-700">
          Why
        </Link>
        <Link href="#what" className="transition-colors hover:text-gray-700">
          What
        </Link>
      </div>

      {/* CTA Button */}
      <Link
        href="/men-at-work"
        className="rounded-full bg-black px-4 py-2 text-sm text-white transition-colors hover:bg-gray-800 sm:px-6 sm:text-base"
      >
        Know more
      </Link>
    </nav>
  );
}
