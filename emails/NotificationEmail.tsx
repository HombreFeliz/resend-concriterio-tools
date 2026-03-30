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

interface NotificationEmailProps {
  message: string;
  actionUrl: string;
  actionLabel: string;
}

export default function NotificationEmail({
  message = "Tienes una nueva notificación en tu cuenta.",
  actionUrl = "https://example.com",
  actionLabel = "Ver detalles",
}: NotificationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Nueva notificación del sistema</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>Notificación del sistema</Heading>
          <Text style={text}>{message}</Text>
          <Section style={buttonContainer}>
            <Button style={button} href={actionUrl}>
              {actionLabel}
            </Button>
          </Section>
          <Section style={divider} />
          <Text style={footer}>
            Este es un mensaje automático. No es necesario responder.
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
