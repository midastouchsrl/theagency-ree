import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, privacy } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Nome, email e messaggio sono obbligatori." },
        { status: 400 }
      );
    }

    if (!privacy) {
      return NextResponse.json(
        { error: "Devi accettare la privacy policy." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Indirizzo email non valido." },
        { status: 400 }
      );
    }

    // Log the contact request (in production, send email via Resend/Brevo/etc.)
    console.log("New contact form submission:", {
      name,
      email,
      phone: phone || "Non fornito",
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Messaggio ricevuto. Ti contatteremo al più presto.",
    });
  } catch {
    return NextResponse.json(
      { error: "Errore del server. Riprova più tardi." },
      { status: 500 }
    );
  }
}
