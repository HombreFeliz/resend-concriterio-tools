# Resend — Con Criterio Tools

Demo interactiva de Resend como parte de concriterio.tools.

## Qué hace esta demo

1. El usuario introduce una dirección de email y recibe un email real con una
   de las tres plantillas disponibles (bienvenida, notificación, reset de contraseña).
2. El usuario puede explorar el código fuente de cada plantilla React Email
   antes de enviarla — ve el componente y el email resultante en paralelo.
3. Tras el envío, la demo muestra los metadatos que Resend devuelve: ID del email,
   timestamp, estado de entrega.

## Stack

- **Next.js 15 (App Router)** — API routes para proteger la API key de Resend en servidor
- **Resend SDK 6.9.4** — SDK oficial para el envío
- **React Email** — templates como componentes React
- **Tailwind CSS** — estilos
- **TypeScript** — tipado end-to-end

## Variables de entorno

Ver `.env.example`

## Desarrollo local

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## Deploy

Configurado para Vercel. Importar repo, añadir variables de entorno del
.env.example, deploy automático.

## Parte de

[concriterio.tools](https://concriterio.tools) — herramientas para builders
por [Pol Marza](https://concriterio.blog)
