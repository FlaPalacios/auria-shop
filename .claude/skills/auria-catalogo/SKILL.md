---
name: auria-catalogo
description: Contrato de datos del catálogo (CSV de Google Sheets), lista de consulta en localStorage y formato del mensaje de WhatsApp. Usar al tocar catálogo, lista, carrito o envío por WhatsApp.
---

# Auria · Catálogo y lista de consulta

## Datos
Mientras no exista la hoja real: `data/catalog.sample.csv` (datos inventados). Luego, la hoja se publica como CSV y la web la lee.
Campos: `id, mostrar, orden, destacado, linea, nombre_es, nombre_en, slug, descripcion_es, descripcion_en, precio_soles, composicion_es, composicion_en, colores, tallas, medidas, tiempo_elaboracion_es, tiempo_elaboracion_en, cuidados_es, cuidados_en, foto_1..foto_5`.
- `mostrar` = `SI` decide si se ve. No existen etiquetas "agotado" ni "a pedido".
- `colores` y `tallas` separados por coma. `precio_soles` es número sin símbolo.
- Tratar toda celda como texto no confiable: nunca `innerHTML` con datos de la hoja.
- Imágenes Cloudinary: insertar `f_auto,q_auto,w_<n>` y usar `srcset`.

## Lista de consulta
`localStorage` clave `auria:list:v1`: `[{id, color, talla, cantidad}]`. Al cargar, cruzar con el catálogo y quitar en silencio lo no visible. Contador discreto en el menú; confirmación sutil al agregar.

## WhatsApp
`https://wa.me/51984185087?text=` + `encodeURIComponent(mensaje)`, en el idioma activo.

```
Hola Edith, me interesan estas prendas de Auria:

1. Poncho Andes (AUR-012) · Color: crudo · Talla: M · Cant.: 1 · S/ 380

Total referencial: S/ 380
Nombre: ____
¿Me confirmas disponibilidad y entrega en Cusco?
```
EN: `Hi Edith, I'm interested in these Auria pieces:` … `Size`, `Qty`, `Reference total`, `Could you confirm availability and delivery in Cusco?`

Pagos (Yape, Plin, BCP) y entregas (solo Cusco) se coordinan por WhatsApp, no en la web.
