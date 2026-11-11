// node --experimental-strip-types --test src/lib/csv.test.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { parseCsv } from './csv.ts';

test('comillas, comas, "" y CRLF', () => {
  const rows = parseCsv('id,colores,nota\r\nAUR-1,"crudo, gris","dice ""hola"""\r\n\r\n');
  assert.deepEqual(rows, [{ id: 'AUR-1', colores: 'crudo, gris', nota: 'dice "hola"' }]);
});

test('celdas faltantes quedan vacías', () => {
  assert.deepEqual(parseCsv('a,b\n1'), [{ a: '1', b: '' }]);
});
