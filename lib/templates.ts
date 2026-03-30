export type TemplateId = "welcome" | "notification" | "reset";

export interface TemplateInfo {
  id: TemplateId;
  name: string;
  description: string;
  filename: string;
  source: string;
}

export const templates: TemplateInfo[] = [
  {
    id: "welcome",
    name: "Bienvenida",
    description: "Email de bienvenida con nombre de usuario personalizado",
    filename: "WelcomeEmail.tsx",
    source: `import {
  Body, Container, Head, Heading,
  Html, Preview, Section, Text,
} from "@react-email/components";

interface WelcomeEmailProps {
  username: string;
}

export default function WelcomeEmail({
  username = "usuario",
}: WelcomeEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>¡Bienvenido a bordo, {username}!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>
            ¡Bienvenido, {username}!
          </Heading>
          <Text style={text}>
            Nos alegra que estés aquí. Tu cuenta ha sido
            creada correctamente y ya puedes empezar a
            usar la plataforma.
          </Text>
          <Section style={divider} />
          <Text style={footer}>
            Si no creaste esta cuenta, puedes ignorar
            este mensaje.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}`,
  },
  {
    id: "notification",
    name: "Notificación",
    description: "Notificación de sistema con mensaje y botón de acción",
    filename: "NotificationEmail.tsx",
    source: `import {
  Body, Button, Container, Head, Heading,
  Html, Preview, Section, Text,
} from "@react-email/components";

interface NotificationEmailProps {
  message: string;
  actionUrl: string;
  actionLabel: string;
}

export default function NotificationEmail({
  message = "Tienes una nueva notificación.",
  actionUrl = "https://example.com",
  actionLabel = "Ver detalles",
}: NotificationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Nueva notificación del sistema</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>
            Notificación del sistema
          </Heading>
          <Text style={text}>{message}</Text>
          <Section style={buttonContainer}>
            <Button style={button} href={actionUrl}>
              {actionLabel}
            </Button>
          </Section>
          <Section style={divider} />
          <Text style={footer}>
            Mensaje automático. No es necesario responder.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}`,
  },
  {
    id: "reset",
    name: "Reset contraseña",
    description: "Email de restablecimiento de contraseña con enlace seguro",
    filename: "ResetPasswordEmail.tsx",
    source: `import {
  Body, Button, Container, Head, Heading,
  Html, Preview, Section, Text,
} from "@react-email/components";

interface ResetPasswordEmailProps {
  resetUrl: string;
}

export default function ResetPasswordEmail({
  resetUrl = "https://example.com/reset?token=abc123",
}: ResetPasswordEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Restablece tu contraseña</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>
            Restablecer contraseña
          </Heading>
          <Text style={text}>
            Hemos recibido una solicitud para restablecer
            la contraseña de tu cuenta. Haz clic en el
            botón de abajo para crear una nueva contraseña.
          </Text>
          <Section style={buttonContainer}>
            <Button style={button} href={resetUrl}>
              Restablecer contraseña
            </Button>
          </Section>
          <Text style={text}>
            Este enlace expirará en 60 minutos.
          </Text>
          <Section style={divider} />
          <Text style={footer}>
            Nunca compartas este enlace con nadie.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}`,
  },
];
