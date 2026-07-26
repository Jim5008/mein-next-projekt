export default function Navbar() {
  return (
    <nav className="bg-gray-900 px-8 py-4 flex justify-between items-center">
      <div className="text-white text-2xl font-bold">
        ✂️ Haargenau
      </div>
      <ul className="flex gap-8 list-none">
        <li><a href="#leistungen" className="text-gray-300 hover:text-white transition">Leistungen</a></li>
        <li><a href="#kontakt" className="text-gray-300 hover:text-white transition">Kontakt</a></li>
        <li><a href="#kontakt" className="bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition">Termin buchen</a></li>
      </ul>
    </nav>
  );
}