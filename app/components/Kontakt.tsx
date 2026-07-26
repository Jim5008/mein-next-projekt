export default function Kontakt() {
  return (
    <section id="kontakt" className="bg-gray-900 py-24 px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Termin buchen
        </h2>
        <p className="text-gray-400 mb-16">
          Ruf uns an oder schreib uns – wir melden uns innerhalb von 24 Stunden
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-800 rounded-2xl p-8">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="text-white font-bold mb-2">Adresse</h3>
            <p className="text-gray-400">Musterstraße 1<br />80331 München</p>
          </div>
          <div className="bg-gray-800 rounded-2xl p-8">
            <div className="text-4xl mb-4">📞</div>
            <h3 className="text-white font-bold mb-2">Telefon</h3>
            <p className="text-gray-400">089 123 456 78</p>
          </div>
          <div className="bg-gray-800 rounded-2xl p-8">
            <div className="text-4xl mb-4">🕐</div>
            <h3 className="text-white font-bold mb-2">Öffnungszeiten</h3>
            <p className="text-gray-400">Mo–Fr: 9–19 Uhr<br />Sa: 9–17 Uhr</p>
          </div>
        </div>
        <a href="mailto:info@haargenau.de" className="bg-amber-500 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-amber-600 transition">
          E-Mail schreiben
        </a>
      </div>
    </section>
  );
}