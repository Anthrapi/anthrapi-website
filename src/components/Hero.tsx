export default function Hero() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-8 text-center">
      {/* Main Headline */}
      <h1 className="px-4 text-6xl leading-tight font-bold sm:text-7xl md:text-8xl lg:text-9xl">
        Don’t Just <span className="italic">Brand</span>
        <br />
        Engineer a{' '}
        <span
          className="leading-snug"
          style={{
            backgroundImage: 'url(/live-background.gif)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent',
            display: 'inline-block',
          }}
        >
          Legacy.
        </span>
      </h1>

      {/* Sub-headline */}
      <p className="text-lg font-medium sm:text-xl md:text-3xl">
        Your Vision. Our Engineering. One Legacy.
      </p>
    </div>
  );
}
