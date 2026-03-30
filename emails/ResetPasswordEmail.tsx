import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
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
          <Heading style={heading}>Restablecer contraseña</Heading>
          <Text style={text}>
            Hemos recibido una solicitud para restablecer la contraseña de tu
            cuenta. Haz clic en el botón de abajo para crear una nueva
            contraseña.
          </Text>
          <Section style={buttonContainer}>
            <Button style={button} href={resetUrl}>
              Restablecer contraseña
            </Button>
          </Section>
          <Text style={text}>
            Este enlace expirará en 60 minutos. Si no solicitaste un cambio de
            contraseña, puedes ignorar este email.
          </Text>
          <Section style={divider} />
          <Text style={footer}>
            Por motivos de seguridad, nunca compartas este enlace con nadie.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#f4f4f5",
  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
};

const container = {
  backgroundColor: "#ffffff",
  margin: "40px auto",
  padding: "40px",
  borderRadius: "8px",
  maxWidth: "480px",
};

const heading = {
  fontSize: "24px",
  fontWeight: "700" as const,
  color: "#18181b",
  marginBottom: "16px",
};

const text = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "#3f3f46",
};

const buttonContainer = {
  textAlign: "center" as const,
  marginTop: "24px",
  marginBottom: "24px",
};

const button = {
  backgroundColor: "#7665FF",
  borderRadius: "6px",
  color: "#ffffff",
  fontSize: "15px",
  fontWeight: "600" as const,
  textDecoration: "none",
  textAlign: "center" as const,
  padding: "12px 24px",
};

const divider = {
  borderTop: "1px solid #e4e4e7",
  marginTop: "24px",
  marginBottom: "24px",
};

const footer = {
  fontSize: "13px",
  color: "#a1a1aa",
};
