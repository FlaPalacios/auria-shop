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

## Vista previa en Cloudflare Pages (paso manual de Flavio)
El repo ya está listo (`site`, `canonical`/`hreflang` absolutos, `.node-version`). En el panel de Cloudflare: Workers & Pages → Create → Pages → Connect to Git → `FlaPalacios/auria-shop`. Framework Astro, build `npm run build`, salida `dist`, rama `main`. Cada rama da su propia URL de vista previa para compartir con Edith.

## Pendientes del cliente
Color "blanco" real, fuente final (Amiri vs Amiri Quran, decidir con ella), fotos de las 17 prendas, enlaces de Facebook/TikTok, nombre del premio 2026, venta mayorista, taller visitable, dominio y correo, textos e historias en voz de Edith. Instagram: https://www.instagram.com/auria_inspira_vida/
