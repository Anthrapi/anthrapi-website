import Image from 'next/image';
import Link from 'next/link';

export default function What() {
  return (
    <div className="relative container mx-auto flex min-h-screen items-center justify-center md:px-4">
      {/* Background gradient and pattern will be handled by existing background components */}

      <div className="flex min-h-screen w-full flex-col justify-between gap-4 px-4 py-8 lg:px-0">
        {/* Top Section */}
        <div className="space-y-4 text-center lg:text-left">
          <div className="font-serif text-lg font-medium">What?</div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl">
            Something for everyone.
          </h1>
          <p className="max-w-5xl text-sm font-medium italic sm:text-lg md:text-xl">
            At Anthrapi we build brands that speak, move, and last. Whether it’s
            a product shoot, a website, a custom app, or a full-scale campaign,
            we deliver end-to-end creative and tech solutions that connect ideas
            to impact.
          </p>
        </div>

        {/* Middle Section */}
        <div className="relative flex flex-1 flex-col gap-8 py-12 lg:flex-row">
          <div className="relative flex min-h-full w-full flex-col gap-2 overflow-hidden rounded-3xl bg-[#f3f0ee] p-4 pb-32 lg:w-[60%]">
            <h2 className="pb-2 font-serif text-5xl font-medium">
              All-in-One Business Services{' '}
            </h2>
            <p className="text-xl">
              Grow your brand with expert social media management, standout
              video production, web and app development, and more. From strategy
              to execution, we help you connect with your audience, boost
              engagement, and scale your business across the platforms that
              matter most. Explore our full-service solutions designed to drive
              real growth.
            </p>
            <Link
              href="/men-at-work"
              className="absolute right-4 bottom-4 z-10 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-base font-medium hover:bg-amber-50 md:px-5"
            >
              Learn More
              <Image
                src="/icons/share.png"
                alt="arrow-right"
                width={16}
                height={16}
              />
            </Link>
            <div className="bg-pattern-service absolute right-0 -bottom-56 h-full w-full md:-bottom-48">
              <Image
                src="/pattern/content.png"
                alt="service"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="relative min-h-full overflow-clip rounded-3xl bg-[#f3f0ee] p-4 pb-24 lg:w-[40%]">
            <h2 className="pb-2 font-serif text-5xl font-medium">
              AI Workflows
            </h2>
            <p className="text-xl">
              Unlock new efficiency with AI automation. Automate repetitive
              tasks and boost productivity. Add AI-powered virtual employees to
              handle support, analysis, scheduling, and more. Save time, cut
              costs, and focus on growing your business.
            </p>
            <div className="bg-pattern-service absolute right-0 -bottom-36 h-full w-full md:-bottom-54">
              <Image
                src="/pattern/content-2.png"
                alt="service"
                fill
                className="object-contain"
              />
            </div>
            <Link
              href="/men-at-work"
              className="absolute right-4 bottom-4 z-10 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-base font-medium hover:bg-amber-50 md:px-5"
            >
              Learn More
              <Image
                src="/icons/share.png"
                alt="arrow-right"
                width={16}
                height={16}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
