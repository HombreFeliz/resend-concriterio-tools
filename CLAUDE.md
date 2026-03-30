# Resend — Instrucciones para Claude Code

## Qué es esto

Demo interactiva de Resend para resend.concriterio.tools.
Lee docs/prd.md antes de empezar. Es corto y te ahorrará preguntas.

## Stack

Next.js 15 (App Router) + Resend SDK (resend@6.9.4) + React Email +
Tailwind CSS + TypeScript

## Lo que debes construir

**Tres plantillas de email** en `/emails/`:
- `WelcomeEmail.tsx` — bienvenida con nombre de usuario
- `NotificationEmail.tsx` — notificación de sistema con mensaje y CTA
- `ResetPasswordEmail.tsx` — reset de contraseña con enlace de acción

Cada plantilla usa componentes de `@react-email/components`.

**Página principal** (`/app/page.tsx`):
- TemplatePicker: tres cards/tabs para seleccionar plantilla activa
- CodeViewer: muestra el código fuente del componente de la plantilla activa
- SendForm: input de email + botón Enviar
- ApiResponse: panel que aparece tras el envío con el JSON de respuesta

**API route** (`/app/api/send/route.ts`):
- Recibe `{ to: string, templateId: 'welcome' | 'notification' | 'reset' }`
- Lee `RESEND_API_KEY` de variables de entorno (nunca del cliente)
- Instancia Resend y llama a `resend.emails.send()` con el componente correcto
- Devuelve `{ id, error }` al cliente

## Componentes fijos (obligatorios en todas las páginas)

- Banner consultoría: "¿Necesitas ayuda integrando esto en tu proyecto?"
  → https://cal.com/polmarza/toma-de-contacto · precio visible: 90€/sesión
- Banner newsletter: "Cada semana, herramientas como esta en tu bandeja."
  → https://concriterio.blog
- Banner repositorio: "Esta demo está construida con Next.js + Resend. El código es público."
  → https://github.com/polmarza/resend-concriterio-tools
- Sección de stack al final: Next.js, Resend SDK, React Email, Tailwind, TypeScript
  con una línea de justificación por cada uno

## Sistema de diseño

Lee docs/design-system.md. Resumen:
- Primary: #7665FF · Background: #0a0a0a · Surface: #111111 · Border: #1e1e1e
- Text: #e2e2e2 · Muted: #666666 · Success: #4ade80 · Error: #f87171
- Fuentes: Fraunces (headings), Outfit (body), Space Mono (código)
- Dark mode fijo, border-radius 8-12px, sin sombras pesadas

## Variables de entorno

Ver `.env.example`. Las tres variables son obligatorias.
RESEND_API_KEY solo se usa en servidor. Nunca en componentes cliente.

Para desarrollo local sin dominio verificado: usar `onboarding@resend.dev`
como FROM — Resend permite esto en desarrollo y solo entrega al email del
owner de la cuenta.

## Convenciones

- TypeScript siempre, sin `any`
- Componentes pequeños con responsabilidad única
- El código debe ser legible: esta demo es material educativo
- Sin librerías adicionales salvo las listadas en el stack
- Imports absolutos con `@/` configurado en tsconfig

## NO hacer

- No añadir autenticación de usuarios
- No añadir base de datos ni persistencia
- No exponer RESEND_API_KEY en ningún componente cliente
- No añadir features no descritas en este archivo o en docs/prd.md
- No usar estilos inline salvo casos puntuales y justificados
- No instalar wrappers de terceros sobre Resend — usar el SDK oficial directo
