import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST() {
  await resend.emails.send({
    from: "domain-own-email@yourdomain.com",
    to: "exampleemail@example.com",
    subject: "any subject",
    react: <WelcomeTemplate name="Hanny" />,
  });
  return NextResponse.json({});
}
