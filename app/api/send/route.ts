import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import WelcomeEmail from "@/emails/WelcomeEmail";
import NotificationEmail from "@/emails/NotificationEmail";
import ResetPasswordEmail from "@/emails/ResetPasswordEmail";

type TemplateId = "welcome" | "notification" | "reset";

function getTemplate(templateId: TemplateId): { subject: string; component: React.ReactElement } {
  const map: Record<TemplateId, { subject: string; component: React.ReactElement }> = {
    welcome: {
      subject: "¡Bienvenido a bordo!",
      component: WelcomeEmail({ username: "Usuario Demo" }),
    },
    notification: {
      subject: "Nueva notificación del sistema",
      component: NotificationEmail({
        message: "Se ha detectado un nuevo inicio de sesión en tu cuenta desde Madrid, España.",
        actionUrl: "https://example.com/activity",
        actionLabel: "Ver actividad",
      }),
    },
    reset: {
      subject: "Restablece tu contraseña",
      component: ResetPasswordEmail({
        resetUrl: "https://example.com/reset?token=demo-token-123",
      }),
    },
  };
  return map[templateId];
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { to, templateId } = body as { to: string; templateId: TemplateId };

    if (!to || !templateId) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios: to, templateId" },
        { status: 400 }
      );
    }

    const validIds: TemplateId[] = ["welcome", "notification", "reset"];
    if (!validIds.includes(templateId)) {
      return NextResponse.json(
        { error: `Plantilla no válida: ${templateId}` },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(to)) {
      return NextResponse.json(
        { error: "Dirección de email no válida" },
        { status: 400 }
      );
    }

    const template = getTemplate(templateId);
    const from = process.env.EMAIL_FROM || "onboarding@resend.dev";
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from,
      to,
      subject: template.subject,
      react: template.component,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ id: data?.id });
  } catch {
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
