# Design System — Resend Demo

## Paleta de colores

```css
--color-primary: #7665FF;        /* Violeta Con Criterio */
--color-background: #0a0a0a;     /* Negro profundo */
--color-surface: #111111;        /* Superficie de cards */
--color-border: #1e1e1e;         /* Bordes sutiles */
--color-text-primary: #e2e2e2;   /* Texto principal */
--color-text-muted: #666666;     /* Texto secundario */
--color-success: #4ade80;        /* Estado de éxito (email enviado) */
--color-error: #f87171;          /* Estado de error */
--color-code-bg: #0d0d0d;        /* Fondo del CodeViewer */
```

## Tipografía

- **Display / headings:** Fraunces (Google Fonts)
- **Body / texto general:** Outfit (Google Fonts)
- **Código / etiquetas técnicas:** Space Mono (Google Fonts)

## Componentes clave

### TemplatePicker
Tres cards horizontales (o tabs en móvil). La card activa tiene borde
`--color-primary` y fondo `--color-surface`. El resto tienen borde
`--color-border`.

### SendForm
Input de email estándar + botón primario. El botón tiene estado de loading
(spinner) mientras espera respuesta de la API. Estado deshabilitado si el
input está vacío o no es un email válido.

### ApiResponse
Panel con fondo `--color-code-bg`, fuente Space Mono, mostrando el JSON
de respuesta con syntax highlighting mínimo (strings en verde, keys en violeta).
Se muestra con transición slide-down tras el envío.

### CodeViewer
Misma estética que ApiResponse. Muestra el código fuente del componente
React Email de la plantilla seleccionada. Incluye un badge con el nombre
de la plantilla y un botón de copiar.

## Estilo general

- Dark mode por defecto, sin toggle
- Border-radius: 8px para inputs y cards pequeñas, 12px para panels grandes
- Sin sombras — separación por contraste de color y borde
- Densidad media — no demasiado compacto, no demasiado espacioso
- Transiciones: 150ms ease para estados hover/active

## Adaptación para el contexto email

La sección de preview de plantillas puede mostrar el email renderizado en
un iframe con fondo blanco (los emails tienen fondo claro habitualmente).
Esto contrasta deliberadamente con el dark background de la demo — refuerza
visualmente que el email es un artefacto separado.
