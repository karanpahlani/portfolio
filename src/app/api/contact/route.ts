import { Resend } from "resend";

export async function POST(req: Request) {
  const { name, email, subject, message, honeypot } = await req.json();

  // Basic validation and spam protection
  if (honeypot) return new Response("spam blocked", { status: 200 });
  if (!name || !email || !subject || !message) return new Response("Bad request", { status: 400 });

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: "Portfolio <hello@pahlani.com>",
      to: ["pahlani@gmail.com"],
      replyTo: email,
      subject: `New message from ${name}: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}\n\n---\nSent from portfolio contact form`,
    });
    return Response.json({ ok: true });
  } catch (err) {
    console.error('Email sending failed:', err);
    return new Response("Email failed", { status: 500 });
  }
}