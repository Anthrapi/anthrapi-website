export default function Why() {
  return (
    <div className="relative container mx-auto flex min-h-screen items-center justify-center">
      {/* Background gradient and pattern will be handled by existing background components */}

      <div className="flex min-h-screen w-full flex-col justify-between gap-4 px-4 py-8 lg:px-0">
        {/* Top Section */}
        <div className="space-y-4 text-center lg:text-left">
          <div className="font-serif text-lg font-medium">Why?</div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl">
            Not players. Redefiners.
          </h1>
          <p className="text-sm font-medium italic sm:text-lg md:text-xl">
            You don't need louder. You need better. We engineer better.
          </p>
          <div className="text-center lg:text-right">
            <p className="text-sm font-medium italic sm:text-base md:text-xl lg:ml-auto lg:max-w-2xl">
              We build brands with a backbone, Narratives that cut through,
              Systems that scale And designs that demands attention, without
              begging for it
            </p>
          </div>
        </div>

        {/* Middle Section */}
        <div className="border-t border-b border-gray-800 py-12">
          <div className="text-center">
            <blockquote className="font-serif text-4xl italic sm:text-5xl md:text-6xl lg:text-6xl">
              “If it fades, <br /> it was never built right”
            </blockquote>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="space-y-4">
          <div className="space-y-4 text-center lg:text-right">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl">
              Not Just Content.
            </h2>
            <p className="max-w-2xl text-sm font-medium italic sm:text-base md:text-xl lg:ml-auto">
              We build intelligent systems that track trends, map markets, and
              guide your message with precision. Not just data. Direction.
            </p>
          </div>
          <div className="text-center lg:text-left">
            <p className="max-w-2xl text-sm font-medium italic sm:text-base md:text-xl">
              You're not a lead. You're a partner in the build. From personal
              management to automated strategy tools . We scale with your
              ambition.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
