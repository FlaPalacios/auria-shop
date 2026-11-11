// CSV de Google Sheets → filas como objetos {columna: texto}. Soporta comillas, "" y saltos de línea dentro de comillas.
export function parseCsv(text: string): Record<string, string>[] {
  const rows: string[][] = [[]];
  let cell = '';
  let quoted = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c === '"' && text[i + 1] === '"') { cell += '"'; i++; }
      else if (c === '"') quoted = false;
      else cell += c;
    } else if (c === '"') quoted = true;
    else if (c === ',') { rows.at(-1)!.push(cell); cell = ''; }
    else if (c === '\n') { rows.at(-1)!.push(cell); cell = ''; rows.push([]); }
    else if (c !== '\r') cell += c;
  }
  rows.at(-1)!.push(cell);
  const [head, ...body] = rows;
  return body
    .filter((r) => r.some((v) => v.trim()))
    .map((r) => Object.fromEntries(head.map((h, i) => [h.trim(), (r[i] ?? '').trim()])));
}
