import Image from 'next/image';
import Link from 'next/link';

export default function Who() {
  return (
    <div className="relative container mx-auto flex min-h-screen items-center justify-center md:px-4">
      {/* Background gradient and pattern will be handled by existing background components */}

      <div className="gap:8 flex min-h-screen w-full flex-col px-4 py-8 md:gap-16 lg:px-0">
        {/* Top Section */}
        <div className="space-y-4 text-center lg:text-left">
          <div className="font-serif text-lg font-medium">Who?</div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl">
            Your Business’s Dream Ally
          </h1>
          <p className="max-w-5xl text-sm font-medium italic sm:text-lg md:text-xl">
            For Some Creative, For Some Technical, For all Problem Solvers
          </p>
        </div>

        {/* Middle Section */}
        <div className="relative flex flex-col items-center justify-evenly gap-8 py-12 lg:flex-row">
          <div className="relative inline-flex max-w-fit flex-col rounded-2xl bg-[#f2f0ee]">
            <Image
              src="/services/Creative Services.png"
              alt="Creative Services"
              width={500}
              height={500}
              className=""
            />
            <Link
              href="/men-at-work"
              className="z-10 m-2 ml-auto flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium hover:bg-amber-50"
            >
              Know More
              <Image
                src="/icons/share.png"
                alt="arrow-right"
                width={12}
                height={12}
              />
            </Link>
          </div>
          <div className="relative inline-flex max-w-fit flex-col rounded-2xl bg-[#f2f0ee]">
            <Image
              src="/services/Software Solutions.png"
              alt="Software Solutions"
              width={500}
              height={500}
              className=""
            />
            <Link
              href="/men-at-work"
              className="z-10 m-2 ml-auto flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium hover:bg-amber-50"
            >
              Know More
              <Image
                src="/icons/share.png"
                alt="arrow-right"
                width={12}
                height={12}
              />
            </Link>
          </div>
          <div className="relative inline-flex max-w-fit flex-col rounded-2xl bg-[#f2f0ee]">
            <Image
              src="/services/AI+.png"
              alt="AI+"
              width={500}
              height={500}
              className=""
            />
            <Link
              href="/men-at-work"
              className="z-10 m-2 ml-auto flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium hover:bg-amber-50"
            >
              Know More
              <Image
                src="/icons/share.png"
                alt="arrow-right"
                width={12}
                height={12}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
