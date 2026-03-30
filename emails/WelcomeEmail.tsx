import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface WelcomeEmailProps {
  username: string;
}

export default function WelcomeEmail({ username = "usuario" }: WelcomeEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>¡Bienvenido a bordo, {username}!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>¡Bienvenido, {username}!</Heading>
          <Text style={text}>
            Nos alegra que estés aquí. Tu cuenta ha sido creada correctamente y
            ya puedes empezar a usar la plataforma.
          </Text>
          <Section style={divider} />
          <Text style={footer}>
            Si no creaste esta cuenta, puedes ignorar este mensaje.
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

const divider = {
  borderTop: "1px solid #e4e4e7",
  marginTop: "24px",
  marginBottom: "24px",
};

const footer = {
  fontSize: "13px",
  color: "#a1a1aa",
};
