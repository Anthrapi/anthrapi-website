import Navbar from '@/components/Navbar';
import Timer from '@/components/Timer';
import Socials from '@/components/Socials';

export default function Home() {
  return (
    <div className="container mx-auto flex min-h-screen flex-col px-4 sm:px-6 lg:px-8">
      <Navbar />

      <main className="flex flex-1 flex-col justify-center text-center">
        <div className="py-6 text-4xl font-extrabold tracking-tight sm:py-8 sm:text-5xl md:py-4 md:text-6xl lg:text-7xl xl:text-9xl">
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
        </div>
        <div className="mb-4 text-2xl font-extrabold sm:text-3xl md:text-4xl lg:text-5xl">
          Coming Soon...
        </div>
        <Timer />
      </main>
      <footer className="flex flex-col items-center justify-center gap-2 p-4">
        <div className="text-lg font-bold sm:text-xl md:text-2xl">
          Stay Tuned
        </div>
        {/* Contact Section in Footer */}
        <div className="flex flex-col items-center gap-1 text-base sm:text-lg md:text-xl">
          <div>
            <span className="font-semibold">Phone:</span>{' '}
            <a
              href="tel:+919740315502"
              className="underline hover:text-blue-600"
            >
              +91 97403 15502
            </a>
          </div>
          <div>
            <span className="font-semibold">Email:</span>{' '}
            <a
              href="mailto:info@anthrapi.com"
              className="underline hover:text-blue-600"
            >
              info@anthrapi.com
            </a>
          </div>
        </div>
        <Socials />
      </footer>
    </div>
  );
}
