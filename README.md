# Simón Josué Pérez — Negociación desde cero

Réplica en Next.js de [simonjosueperez.com](https://www.simonjosueperez.com) (antes en Podia).
Sitio estático: se exporta a la carpeta `out/` y se puede publicar en GitHub Pages, Vercel o Netlify.

## Cómo correrlo

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # genera out/
```

## Dónde editar

| Qué | Archivo |
|---|---|
| Textos, links de WhatsApp y redes | `lib/site.ts` |
| Colores, tipografía, tamaños | `app/globals.css` (variables al inicio) |
| Estructura de la página | `app/page.tsx` |
| Tarjeta del código QR | `components/QrCard.tsx` |
| Imágenes | `public/images/` |

Tipografía: Arial (fuente del sistema, igual que el original). Títulos 44px / 400 / interlineado 1 / -0.04em; texto 19px.

El código QR (`public/images/qr-whatsapp.svg`) apunta a `https://chat.whatsapp.com/LJQ4xKm3QWqBti5yCgLK0Z`.
Si cambia el link de la comunidad, hay que regenerarlo y actualizar `lib/site.ts`.

## Publicar en GitHub Pages

1. Sube este proyecto a un repositorio en GitHub (rama `main`).
2. En el repo: **Settings → Pages → Source: GitHub Actions**.
3. Cada push a `main` publica el sitio con `.github/workflows/deploy.yml`.
4. Para usar `www.simonjosueperez.com`, configúralo en **Settings → Pages → Custom domain** y apunta el DNS a GitHub.

También funciona en Vercel importando el repo sin cambiar nada.
