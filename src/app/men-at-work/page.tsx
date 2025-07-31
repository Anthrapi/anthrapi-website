import React from 'react';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';

export default function MenAtWork() {
  return (
    <main className="flex min-h-screen flex-col">
      <nav className="flex w-full items-center justify-center px-4 py-4 font-medium sm:px-8 sm:py-6">
        {/* Logo and Brand */}
        <Link
          href="/"
          className="flex items-center justify-center space-x-2 transition-opacity hover:opacity-80"
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
      </nav>

      <h1 className="py-8 text-center font-serif text-6xl">Work in progress</h1>
      <p className="text-center text-lg">
        Our team is on the job to get this up and running
      </p>
      <div className="flex items-center justify-center gap-4 p-8">
        <Image
          src="/work/man-1.png"
          alt="Men at work"
          width={120}
          height={120}
        />
        <Image
          src="/work/man-2.png"
          alt="Men at work"
          width={120}
          height={120}
        />
      </div>
      <p className="text-center text-lg">
        Meanwhile grab this pdf here to know some of what we do
      </p>

      {/* Link to the pdf */}
      <div className="flex items-center justify-center gap-8 p-8">
        <div>
          <Link className="rounded-full" href="/pdfs/AI services.pdf">
            <Image src="/pdf.gif" alt="PDF" width={120} height={120} />
          </Link>
          <div className="text-center">AI Services</div>
        </div>
        <div>
          <Link className="rounded-full" href="/pdfs/Creative Services.pdf">
            <Image src="/pdf.gif" alt="PDF" width={120} height={120} />
          </Link>
          <div className="text-center">Creative Services</div>
        </div>
        <div>
          <Link className="rounded-full" href="/pdfs/Software Solutions.pdf">
            <Image src="/pdf.gif" alt="PDF" width={120} height={120} />
          </Link>
          <div className="text-center">Software Solutions</div>
        </div>
      </div>
    </main>
  );
}
