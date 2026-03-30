# Roadmap — Resend Demo

## v1 — Demo (scope actual)

- Página única con selector de tres plantillas
- CodeViewer: código fuente del componente React Email
- Preview visual del email renderizado
- Formulario de envío con validación básica de email
- API route `/api/send` que llama a Resend desde servidor
- Visualizador de respuesta de API (JSON con ID y estado)
- Tres banners fijos: consultoría, newsletter, repositorio
- Sección de stack al final de la página

## v2 — Mejoras posibles (si hay tracción)

- Añadir soporte para adjuntos: el usuario sube un PDF y se envía como attachment
- Mostrar eventos de webhook en tiempo real (delivery, open) usando Server-Sent Events
- Añadir una cuarta plantilla editable: el usuario modifica variables del template
  (nombre, producto) y ve el cambio reflejado en el preview antes de enviar
