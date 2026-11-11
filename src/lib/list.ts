// Lista de consulta en localStorage (solo navegador). Lo guardado se trata como no confiable.
export type Item = { id: string; color: string; talla: string; cantidad: number };
const KEY = 'auria:list:v1';

export function readList(): Item[] {
  try {
    const data = JSON.parse(localStorage.getItem(KEY) || '[]');
    if (!Array.isArray(data)) return [];
    return data
      .filter((x) => x && typeof x.id === 'string')
      .map((x) => ({ id: x.id, color: String(x.color ?? ''), talla: String(x.talla ?? ''), cantidad: Math.min(20, Math.max(1, Math.floor(Number(x.cantidad)) || 1)) }));
  } catch {
    return [];
  }
}

export function writeList(items: Item[]) {
  try { localStorage.setItem(KEY, JSON.stringify(items)); } catch { /* modo privado: la lista vive solo en esta visita */ }
  document.querySelectorAll<HTMLElement>('[data-list-count]').forEach((el) => (el.textContent = items.length ? `(${items.length})` : ''));
}

export function addItem(item: Item) {
  const list = readList();
  const same = list.find((x) => x.id === item.id && x.color === item.color && x.talla === item.talla);
  if (same) same.cantidad = Math.min(20, same.cantidad + item.cantidad);
  else list.push(item);
  writeList(list);
}
