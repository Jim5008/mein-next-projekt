'use client';

import { useState } from 'react';

export default function Kontakt() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nachricht, setNachricht] = useState('');
  const [gesendet, setGesendet] = useState(false);
  const [fehler, setFehler] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (name === '' || email === '' || nachricht === '') {
      setFehler('Bitte alle Felder ausfüllen!');
      return;
    }

    if (!email.includes('@')) {
      setFehler('Bitte eine gültige E-Mail eingeben!');
      return;
    }

    setFehler('');
    setGesendet(true);
  }

  return (
    <section id="kontakt" className="bg-gray-900 py-24 px-8">
      <div className="max-w-3xl mx-auto">

        <h2 className="text-4xl font-bold text-white text-center mb-4">
          Kontakt aufnehmen
        </h2>
        <p className="text-gray-400 text-center mb-16">
          Wir melden uns innerhalb von 24 Stunden
        </p>

        {gesendet ? (
          <div className="bg-green-500 text-white text-center p-8 rounded-2xl text-xl font-semibold">
            ✅ Vielen Dank! Wir melden uns bald bei dir.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {fehler && (
              <div className="bg-red-500 text-white p-4 rounded-lg text-center">
                {fehler}
              </div>
            )}
            <label htmlFor="name" className="sr-only">Dein Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Dein Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-gray-800 text-white px-6 py-4 rounded-lg outline-none focus:ring-2 focus:ring-amber-500"
            />
            <label htmlFor="email" className="sr-only">Deine E-Mail</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Deine E-Mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-800 text-white px-6 py-4 rounded-lg outline-none focus:ring-2 focus:ring-amber-500"
            />
            <label htmlFor="nachricht" className="sr-only">Deine Nachricht</label>
            <textarea
              id="nachricht"
              name="nachricht"
              placeholder="Deine Nachricht"
              value={nachricht}
              onChange={(e) => setNachricht(e.target.value)}
              rows={5}
              className="bg-gray-800 text-white px-6 py-4 rounded-lg outline-none focus:ring-2 focus:ring-amber-500"
            />
            <button
              type="submit"
              className="bg-amber-500 text-white py-4 rounded-lg text-lg font-semibold hover:bg-amber-600 transition"
            >
              Nachricht senden
            </button>
          </form>
        )}

      </div>
    </section>
  );
}