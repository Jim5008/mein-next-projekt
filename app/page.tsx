import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Leistungen from './components/Leistungen';
import Kontakt from './components/Kontakt';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Leistungen />
      <Kontakt />
    </main>
  );
}