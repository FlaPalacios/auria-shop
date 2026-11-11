// shortcut: lee el CSV de ejemplo en el build; cambiar por la hoja publicada de Sheets en la semana 3.
import raw from '../../data/catalog.sample.csv?raw';
import { parseCsv } from './csv';

export const products = parseCsv(raw)
  .filter((p) => p.mostrar === 'SI')
  .sort((a, b) => Number(a.orden) - Number(b.orden));
