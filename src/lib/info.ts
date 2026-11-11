// Contenido de las páginas de texto (Historia, Baby alpaca, Reconocimientos). Foto null = placeholder hasta tener la real.
import { ui, contact, type Lang } from '../i18n/ui';
import chompa from '../assets/estilo/chompa-verde.webp';
import reconocimiento from '../assets/reconocimiento.webp';

export function infoPage(lang: Lang, kind: 'story' | 'babyAlpaca' | 'recognition') {
  const t = ui[lang];
  if (kind === 'story') {
    const photos = [null, null, null, null];
    return { title: t.storyPage.title, lead: t.storyPage.lead, blocks: t.storyPage.blocks.map((b, i) => ({ ...b, photo: photos[i], alt: '' })) };
  }
  if (kind === 'babyAlpaca') {
    const photos = [chompa, null, null];
    return { title: t.alpaca.title, lead: t.alpaca.lead, blocks: t.alpaca.blocks.map((b, i) => ({ ...b, photo: photos[i], alt: i === 0 ? t.alt.chompas : '' })) };
  }
  return { title: t.recog.title, lead: t.recog.lead, blocks: t.recog.items.map((b, i) => ({ ...b, href: i === 0 ? contact.produce : undefined, photo: i === 0 ? reconocimiento : null, alt: i === 0 ? t.trust.alt : '' })) };
}
