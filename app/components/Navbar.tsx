'use client';

import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-900 px-8 py-4 relative">
      <div className="flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          ✂️ Haargenau
        </div>

        {/* Desktop-Menü: ab md-Breakpoint sichtbar */}
        <ul className="hidden md:flex gap-8 list-none items-center">
          <li><a href="#leistungen" className="text-gray-300 hover:text-white transition">Leistungen</a></li>
          <li><a href="#kontakt" className="text-gray-300 hover:text-white transition">Kontakt</a></li>
          <li><a href="#kontakt" className="bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition">Termin buchen</a></li>
        </ul>

        {/* Burger-Button: nur unterhalb md sichtbar */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-3xl leading-none"
          aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={open}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile-Menü: klappt nur auf, wenn open true ist */}
      {open && (
        <ul className="md:hidden flex flex-col gap-2 mt-4 list-none">
          <li>
            <a href="#leistungen" onClick={() => setOpen(false)} className="block text-gray-300 hover:text-white transition py-2">
              Leistungen
            </a>
          </li>
          <li>
            <a href="#kontakt" onClick={() => setOpen(false)} className="block text-gray-300 hover:text-white transition py-2">
              Kontakt
            </a>
          </li>
          <li>
            <a href="#kontakt" onClick={() => setOpen(false)} className="block bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition text-center">
              Termin buchen
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}