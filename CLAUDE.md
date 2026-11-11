# Auria · Web

Vitrina bilingüe (ES/EN) de ropa tejida a mano en baby alpaca (Cusco). Meta: listas de consulta enviadas por WhatsApp, sin pago.

**Contexto vivo:** `assets-fv/contexto/auria-brief-web.md`. Leer su sección 0 (estado) al empezar y **actualizarla al cerrar cada tarea**. El resto del brief solo si hace falta un detalle.

## Stack y comandos
Astro estático + CSS propio, JS mínimo, sin backend. Cloudflare Pages.
`npm run dev` · `npm run build` · `npm run check`

## Reglas
1. Nada genérico: ver skill `auria-marca`.
2. Código mínimo (Ponytail): no escribir lo que no se usa; sin abstracciones ni dependencias "por si acaso".
3. Todo texto visible en ES y EN, desde `src/i18n/`.
4. Datos: `data/catalog.sample.csv` (inventados). Contrato en skill `auria-catalogo`.
5. Sin botón flotante de WhatsApp. Precios solo `S/ 280`.
6. Mobile first, AA, `prefers-reduced-motion`.
7. Logo desde `public/brand/` (negro sobre claro, blanco sobre oscuro, nunca con círculo).

## Agentes (solo al cerrar una pieza, no en cada cambio)
`revisor-diseno` (marca, a11y, rendimiento, responsive) · `revisor-seguridad` · `revisor-bilingue`

Feedback de Edith en `FEEDBACK.md`. Fases en `PLAN.md`.
