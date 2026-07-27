export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-12 px-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        <div>
          <h3 className="text-white font-bold text-xl mb-4">✂️ Haargenau</h3>
          <p className="text-sm leading-relaxed">
            Professionelle Haarschnitte und Styling in München. Ihr Wohlbefinden ist unsere Leidenschaft.
          </p>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4">Kontakt</h3>
          <ul className="text-sm space-y-2">
            <li>📍 Musterstraße 1, 80331 München</li>
            <li>📞 089 123 456 78</li>
            <li>✉️ info@haargenau.de</li>
            <li>🕐 Mo–Fr: 9–19 Uhr · Sa: 9–17 Uhr</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4">Links</h3>
          <ul className="text-sm space-y-2">
            <li><a href="/" className="hover:text-amber-500 transition">Startseite</a></li>
            <li><a href="#leistungen" className="hover:text-amber-500 transition">Leistungen</a></li>
            <li><a href="#kontakt" className="hover:text-amber-500 transition">Kontakt</a></li>
            <li><a href="#" className="hover:text-amber-500 transition">Impressum</a></li>
          </ul>
        </div>

      </div>
      <div className="max-w-5xl mx-auto mt-10 pt-6 border-t border-gray-800 text-center text-sm">
        © 2025 Haargenau München · Alle Rechte vorbehalten
      </div>
    </footer>
  );
}