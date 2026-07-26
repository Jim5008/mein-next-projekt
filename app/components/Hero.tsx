export default function Hero() {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col justify-center items-center text-center px-4">
      <p className="text-amber-500 text-lg font-semibold mb-4">
        Ihr Friseursalon in München
      </p>
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
        Haare, die<br />
        <span className="text-amber-500">begeistern.</span>
      </h1>
      <p className="text-gray-400 text-xl max-w-xl mb-10">
        Professionelle Haarschnitte, Färbungen und Styling für Damen und Herren.
      </p>
      <div className="flex gap-4">
        <a href="#kontakt" className="bg-amber-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-amber-600 transition">
          Jetzt Termin buchen
        </a>
        <a href="#leistungen" className="border border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition">
          Leistungen ansehen
        </a>
      </div>
    </div>
  );
}