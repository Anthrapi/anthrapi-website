import Image from 'next/image';
import Link from 'next/link';

export default function Who() {
  return (
    <div className="relative container mx-auto flex min-h-screen items-center justify-center md:px-4">
      {/* Background gradient and pattern will be handled by existing background components */}

      <div className="gap:8 flex min-h-screen w-full flex-col px-4 py-8 lg:px-0">
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
        <div className="relative flex flex-col justify-evenly gap-8 py-12 lg:flex-row">
          <div className="relative inline-flex max-w-fit flex-col rounded-2xl bg-[#f2f0ee]">
            <Image
              src="/services/Creative Services.png"
              alt="Creative Services"
              width={500}
              height={500}
              className=""
            />
            <p className="w-fit flex-1 p-4 pb-0">
              Unlock the power of imagination to captivate your audience. From
              branding, design, and content creation to memorable campaigns—we
              turn fresh ideas into compelling visuals and messages that elevate
              your brand. Tap into artistry for results that stand out.
            </p>
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
            <p className="w-fit flex-1 p-4 pb-0">
              Transform business challenges into seamless digital experiences.
              Our team delivers robust, scalable applications, custom
              integrations, and end-to-end software development to drive
              efficiency and innovation. Harness precision technology for
              real-world results.
            </p>
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
            <p className="w-fit flex-1 p-4 pb-0">
              Supercharge your organization with the intelligence of tomorrow.
              We deploy cutting-edge AI models, automation, and data-driven
              strategies that help you make smarter decisions, predict
              opportunities, and stay ahead of the curve. Experience the future,
              today.
            </p>
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
