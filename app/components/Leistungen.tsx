export default function Leistungen() {
  const leistungen = [
    { titel: "Damenschnitt", preis: "ab 45€", beschreibung: "Waschen, Schneiden, Föhnen" },
    { titel: "Herrenschnitt", preis: "ab 25€", beschreibung: "Klassisch oder modern" },
    { titel: "Färbung", preis: "ab 60€", beschreibung: "Strähnen, Balayage, Vollfarbe" },
    { titel: "Kinderschnitt", preis: "ab 15€", beschreibung: "Für Kinder bis 12 Jahre" },
    { titel: "Hochzeit", preis: "ab 120€", beschreibung: "Braut- und Feststyling" },
    { titel: "Behandlung", preis: "ab 35€", beschreibung: "Pflegekuren und Haarkuren" },
  ];

  return (
    <section id="leistungen" className="bg-white py-24 px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">
          Unsere Leistungen
        </h2>
        <p className="text-gray-500 text-center mb-16">
          Qualität und Stil für jeden Anlass
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leistungen.map((item) => (
            <div key={item.titel} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.titel}</h3>
              <p className="text-amber-500 font-semibold mb-3">{item.preis}</p>
              <p className="text-gray-500">{item.beschreibung}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}