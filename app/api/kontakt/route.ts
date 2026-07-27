import { NextRequest, NextResponse } from 'next/server';

// POST-Handler: wird aufgerufen, wenn der Client (unser Formular) eine
// POST-Anfrage an /api/kontakt schickt.
export async function POST(request: NextRequest) {
  const daten = await request.json();
  const { name, email, nachricht } = daten;

  // Wichtig: Wir prüfen hier NOCHMAL, obwohl das Formular im Browser schon
  // validiert. Warum? Weil man dem Client nie vertrauen kann — jemand könnte
  // die Anfrage auch direkt per curl/Postman schicken, ganz ohne unser
  // Formular und ohne die Browser-Validierung zu durchlaufen.
  if (!name || !email || !nachricht) {
    return NextResponse.json(
      { erfolg: false, fehler: 'Bitte alle Felder ausfüllen!' },
      { status: 400 }
    );
  }

  if (!email.includes('@')) {
    return NextResponse.json(
      { erfolg: false, fehler: 'Bitte eine gültige E-Mail eingeben!' },
      { status: 400 }
    );
  }

  // Hier würden wir morgen (Tag 30) die Daten in eine echte Datenbank
  // schreiben. Für heute loggen wir sie nur im Server-Terminal, damit du
  // siehst, dass sie tatsächlich beim Server ankommen.
  console.log('📩 Neue Kontaktanfrage:', { name, email, nachricht });

  return NextResponse.json({ erfolg: true });
}
