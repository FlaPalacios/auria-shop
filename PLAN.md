# Plan de construcción · Auria

## Entorno (hecho)
- Astro + CSS propio, `npm run dev|build|check`.
- Logo SVG sin círculo en `public/brand/` (negro, blanco, marrón).
- Agentes: `revisor-diseno`, `revisor-seguridad`, `revisor-bilingue`. Skills: `auria-marca`, `auria-catalogo`.
- Inicio ES/EN con textos inventados y recuadros de foto provisional.

## Fases
| Semana | Entrega | Revisión |
| --- | --- | --- |
| 1 | Sistema visual afinado, inicio con fotos del Instagram, comparar Amiri vs Amiri Quran | Edith: look and feel |
| 2 | Colección, ficha, lista de consulta, mensaje WhatsApp con `catalog.sample.csv` | Edith: flujo |
| 3 | Historia, baby alpaca, reconocimientos, personalizados, hoja real de Sheets | Edith: textos y datos |
| 4 | Fotos profesionales, dominio, analítica, lanzamiento | Aprobación final |

## Cierre de cada pieza
1. Capturas móvil y escritorio.
2. `revisor-diseno` y `revisor-bilingue`.
3. `revisor-seguridad` antes de cada vista previa.
4. Vista previa en Cloudflare Pages y registro en `FEEDBACK.md`.

## Vista previa en Cloudflare (paso manual de Flavio)
Se despliega como **Worker con static assets** (no Pages): `wrangler.jsonc` sirve `./dist` y no necesita código de Worker. `public/_headers` se aplica igual que en Pages.

En el panel: Create an app → conectar `FlaPalacios/auria-shop` → nombre `auria-shop`, build `npm run build`, deploy `npx wrangler deploy` → Deploy. El aviso "This Worker does not exist on your account" solo confirma que el nombre está libre.

Al terminar, Cloudflare da una URL `auria-shop.<subdominio>.workers.dev`: hay que ponerla en `site` de `astro.config.mjs`, porque de ahí salen el `canonical` y los `hreflang`. Las ramas distintas de `main` generan vistas previas propias (sección Previews del Worker).

## Pendientes del cliente
Color "blanco" real, fuente final (Amiri vs Amiri Quran, decidir con ella), fotos de las 17 prendas, enlaces de Facebook/TikTok, nombre del premio 2026, venta mayorista, taller visitable, dominio y correo, textos e historias en voz de Edith. Instagram: https://www.instagram.com/auria_inspira_vida/
