import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustedBy from '@/components/TrustedBy';
import Why from '@/components/Why';
import What from '@/components/What';
import Who from '@/components/Who';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <section id="hero" className="flex min-h-screen flex-col justify-between">
        <Navbar />
        <Hero />
        <div className="h-24 w-full md:h-32"></div>
        {/* <TrustedBy /> */}
      </section>

      <section id="who" className="flex min-h-screen flex-col justify-between">
        <Who />
      </section>

      <section id="why" className="flex min-h-screen flex-col justify-between">
        <Why />
      </section>

      <section id="what" className="flex min-h-screen flex-col justify-between">
        <What />
      </section>

      <Footer />
    </main>
  );
}
