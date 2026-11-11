export const WA_NUMBER = '51984185087';
export const waLink = (text: string) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

export type WaLabels = { hi: string; color: string; size: string; qty: string; total: string; name: string; ask: string };
export type WaLine = { id: string; name: string; color: string; talla: string; cantidad: number; precio: number };

// Mensaje de la lista de consulta (formato en la skill auria-catalogo).
export function listMessage(l: WaLabels, lines: WaLine[]): string {
  const rows = lines.map((x, i) =>
    `${i + 1}. ${x.name} (${x.id}) · ${l.color}: ${x.color || '-'} · ${l.size}: ${x.talla || '-'} · ${l.qty}: ${x.cantidad} · S/ ${x.precio * x.cantidad}`);
  const total = lines.reduce((s, x) => s + x.precio * x.cantidad, 0);
  return [l.hi, '', ...rows, '', `${l.total}: S/ ${total}`, l.name, l.ask].join('\n');
}
