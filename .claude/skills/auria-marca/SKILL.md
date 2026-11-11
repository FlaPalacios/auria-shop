---
name: auria-marca
description: Identidad visual y tono de Auria (paleta, tipografía, reglas anti-genérico, logo). Usar al diseñar o revisar cualquier UI, estilo o texto de marca de la web de Auria.
---

# Auria · Marca

**Tono:** artesanal y tradicional, pero moderno y limpio. Moda de autor, no souvenirs. Mucho aire, fotos grandes, texto breve, voz de Edith (concreta, cálida, sin eslóganes vacíos).

## Paleta (tokens en `src/styles/global.css`)
| Token | Hex | Uso |
| --- | --- | --- |
| `--color-bg` | `#E3DFD8` | Fondo general (Hueso) |
| `--color-accent` | `#D67F56` | Botones y acentos puntuales (Pomelo), con moderación |
| `--color-ink-soft` | `#212121` | Botones, marcos, bordes |
| `--color-white` | `#FAF8F5` | Provisional (el cliente envió `#1F1D1D`, por confirmar) |
| `--color-ink` | `#050505` | Texto |

Pomelo sobre Hueso no cumple AA para texto pequeño: usarlo como fondo de botón con texto negro o en elementos grandes.

## Tipografía (Google Fonts)
Títulos: **Kurale**. Texto: **Amiri** (probar también Amiri Quran, pedida por el cliente; solo un peso). Cargar solo pesos usados, `font-display: swap`, fallback serif.

## Logo (`public/brand/`)
`logo-auria-negro.svg` sobre fondos claros, `logo-auria-blanco.svg` sobre oscuros, `logo-auria-marron.svg` original. **Nunca con círculo.** No deformar ni recolorear.

## Anti-genérico
- Sin gradientes de moda, tarjetas con sombra, íconos de stock, emojis.
- Sin hero con titular gigante tipo "Elevate your style".
- Composición editorial: asimetría controlada, fotos que respiran, detalle de textura del tejido.
- Un motivo sutil inspirado en el punto del tejido para separadores y numeración.
- Animación mínima y lenta (fade, leve desplazamiento) y respetar `prefers-reduced-motion`.
- Toda decisión visual debe poder justificarse con la marca.

## Referencias (espíritu, no copiar)
aymakperu.com (foto editorial, colecciones), alpaqaytu.com (origen de la fibra), solalpaca.pe (ficha de producto).
