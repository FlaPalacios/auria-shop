// node --experimental-strip-types --test src/lib/*.test.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { listMessage, waLink } from './whatsapp.ts';

const es = { hi: 'Hola Edith, me interesan estas prendas de Auria:', color: 'Color', size: 'Talla', qty: 'Cant.', total: 'Total referencial', name: 'Nombre: ____', ask: '¿Me confirmas disponibilidad y entrega en Cusco?' };

test('mensaje con total y una línea por prenda', () => {
  const msg = listMessage(es, [
    { id: 'AUR-001', name: 'Poncho Andes', color: 'crudo', talla: 'Única', cantidad: 1, precio: 380 },
    { id: 'AUR-002', name: 'Chompa Qori', color: 'pomelo', talla: 'S', cantidad: 2, precio: 290 },
  ]);
  assert.equal(msg, [
    es.hi, '',
    '1. Poncho Andes (AUR-001) · Color: crudo · Talla: Única · Cant.: 1 · S/ 380',
    '2. Chompa Qori (AUR-002) · Color: pomelo · Talla: S · Cant.: 2 · S/ 580',
    '', 'Total referencial: S/ 960', es.name, es.ask,
  ].join('\n'));
});

test('el enlace codifica el texto', () => {
  assert.equal(waLink('a & b?'), 'https://wa.me/51984185087?text=a%20%26%20b%3F');
});
