# PRD — Resend Demo

## Qué es Resend

Resend es una API de email transaccional diseñada para developers. Su diferencial
es la integración con React Email: los templates son componentes React que Resend
renderiza a HTML compatible con todos los clientes de email. El SDK TypeScript es
de primera clase y la API key nunca toca el cliente.

Fundada en 2023 por Zeno Rocha (ex-VP Developer Experience en WorkOS), pasó por
Y Combinator W23 y tiene free tier permanente de 3.000 emails/mes.

## Para qué tipo de proyecto sirve

Apps TypeScript que necesitan emails transaccionales: confirmaciones de cuenta,
reset de contraseña, notificaciones de sistema. También válido para newsletters
pequeñas. No es la opción si ya tienes infraestructura de email montada sobre
SendGrid o necesitas funcionalidades avanzadas de marketing automation.

## Scope de esta demo

### Lo que hace
- Envío de email real a una dirección introducida por el usuario
- Tres plantillas seleccionables: Bienvenida, Notificación de sistema, Reset de contraseña
- Visualización del código fuente del componente React Email de cada plantilla
- Visualización de metadatos de respuesta (ID, timestamp, estado)

### Lo que NO hace
- No guarda historial de envíos (sin base de datos)
- No permite editar las plantillas en la demo
- No implementa autenticación de usuarios
- No demuestra la parte de marketing email (Audiences, Broadcasts)

## Flujos de usuario

**Flujo 1 — Explorar plantillas:**
El usuario navega entre las tres plantillas disponibles. Para cada una ve el
componente React Email (código fuente) y un preview del email renderizado.

**Flujo 2 — Enviar email real:**
El usuario introduce su dirección de email, selecciona una plantilla y pulsa
Enviar. La petición va a `/api/send` (API route de Next.js). El servidor llama
a Resend con la API key. La demo muestra el resultado: ID del email y estado.

**Flujo 3 — Ver respuesta de la API:**
Tras el envío, la demo muestra el objeto de respuesta completo que devuelve
Resend — útil para que el builder vea exactamente qué datos tiene disponibles
para registrar, loggear o reaccionar en su propia app.

## Componentes fijos

- Banner consultoría: "¿Necesitas ayuda integrando esto en tu proyecto?"
  → https://cal.com/polmarza/toma-de-contacto (90€/sesión)
- Banner newsletter: "Cada semana, herramientas como esta en tu bandeja."
  → https://concriterio.blog
- Banner repositorio: "Esta demo está construida con Next.js + Resend. El código es público."
  → https://github.com/polmarza/resend-concriterio-tools
