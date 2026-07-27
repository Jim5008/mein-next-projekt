import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Leistungen from './components/Leistungen';
import Kontakt from './components/Kontakt';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Leistungen />
      <Kontakt />
      <Footer />
    </main>
  );
}