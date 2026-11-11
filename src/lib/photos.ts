// Fotos provisionales: solo las de assets-fv/imagenes/estilo (Instagram de Auria). Se reemplazan por Cloudinary al final.
import type { ImageMetadata } from 'astro';
import chompas from '../assets/estilo/chompa-verde.webp';
import cardigans from '../assets/estilo/cardigan-girasol.webp';
import tops from '../assets/estilo/top-crochet.webp';

export const lineKeys = ['ponchos', 'chompas', 'cardigans', 'tops', 'accesorios'] as const;
export type LineKey = (typeof lineKeys)[number];

// null = aún sin foto → Photo muestra el placeholder.
export const linePhoto: Record<LineKey, ImageMetadata | null> = { ponchos: null, chompas, cardigans, tops, accesorios: null };

// Prenda sin foto_1 → placeholder (no se rellena con fotos de otras prendas).
export const productPhoto = (x: Record<string, string>) => x.foto_1 || null;
