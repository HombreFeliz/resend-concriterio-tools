# Arquitectura — Resend Demo

## Stack elegido: Next.js 15 + App Router

**Justificación:** Resend requiere que la API key viva en servidor — nunca debe
exponerse en cliente. Next.js con App Router resuelve esto con API routes propias.
Sería posible con Astro + API endpoints, pero Next.js es el stack de referencia
para demos de herramientas que requieren server-side logic, y el que más builders
del target ya conocen.

## Diagrama de componentes

```mermaid
graph TD
  Browser["Browser (cliente)"] -->|POST /api/send| APIRoute["API Route\n/app/api/send/route.ts"]
  APIRoute -->|resend.emails.send()| ResendAPI["Resend API\napi.resend.com"]
  ResendAPI -->|entrega| EmailClient["Bandeja del usuario"]
  ResendAPI -->|{ id, status }| APIRoute
  APIRoute -->|JSON response| Browser

  Browser --> TemplatePicker["TemplatePicker\ncomponent"]
  TemplatePicker --> CodeViewer["CodeViewer\n(código fuente plantilla)"]
  TemplatePicker --> EmailPreview["EmailPreview\n(render visual)"]
```

## Estructura de carpetas

```
resend-concriterio-tools/
├── app/
│   ├── page.tsx                    # Página principal de la demo
│   ├── layout.tsx
│   └── api/
│       └── send/
│           └── route.ts            # API route — llama a Resend con la API key
├── components/
│   ├── TemplatePicker.tsx          # Selector de plantillas con preview
│   ├── SendForm.tsx                # Formulario de email + botón de envío
│   ├── ApiResponse.tsx             # Visualizador del objeto de respuesta
│   ├── CodeViewer.tsx              # Código fuente de la plantilla seleccionada
│   └── banners/
│       ├── ConsultoriaBanner.tsx
│       ├── NewsletterBanner.tsx
│       └── RepoBanner.tsx
├── emails/                         # Componentes React Email
│   ├── WelcomeEmail.tsx
│   ├── NotificationEmail.tsx
│   └── ResetPasswordEmail.tsx
├── lib/
│   └── resend.ts                   # Instancia singleton de Resend
├── types/
│   └── email.ts                    # Tipos compartidos
└── ...config files
```

## Integraciones externas

- **Resend API** (`api.resend.com`) — llamada exclusivamente desde `/api/send/route.ts`
- **React Email** — renderizado de plantillas en servidor antes del envío

## Estrategia de protección de API keys

La `RESEND_API_KEY` solo existe en el contexto de servidor de Next.js.
El cliente nunca la ve. El flujo es:

1. Browser → POST `/api/send` con `{ to, templateId }`
2. API route lee `process.env.RESEND_API_KEY`
3. API route llama a `resend.emails.send()` con el componente React renderizado
4. Resend responde con `{ id, status }`
5. API route devuelve ese objeto al browser

El browser solo recibe el resultado, nunca las credenciales.

## Configuración Vercel

- Framework: Next.js (autodetectado)
- Variables de entorno: `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `RESEND_FROM_NAME`
- Sin configuraciones especiales de región — Resend tiene multi-región propio
