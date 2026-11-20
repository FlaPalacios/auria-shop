// Decidido: el catalogo se lee en el build, no en el navegador (mejor SEO, cero JS, la web no depende de Google).
// shortcut: por ahora el CSV de ejemplo; cambiar la ruta por la del CSV publicado de la hoja de Edith en la semana 3.
import raw from '../../data/catalog.sample.csv?raw';
import { parseCsv } from './csv';

export const products = parseCsv(raw)
  .filter((p) => p.mostrar === 'SI')
  .sort((a, b) => Number(a.orden) - Number(b.orden));
