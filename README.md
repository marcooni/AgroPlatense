# AGROPLATENSE — sitio web

Next.js 16 · React 19 · Tailwind CSS 4 · TypeScript. Fuentes autoalojadas (Bricolage Grotesque y Figtree).

## Comandos

    npm install
    npm run dev          # http://localhost:3000
    npm run build && npm start
    npm run lint

## Rutas

`/` · `/agropecuario` · `/industria-lactea` · `/productos` (búsqueda y filtro) · `/nosotros` · `/contacto`

## Dónde se edita cada cosa

| Qué | Archivo |
|---|---|
| Teléfono, WhatsApp, dirección, correo, horarios, redes, historia | `src/data/site-config.ts` |
| Categorías y productos | `src/data/catalog.ts` |
| Menú | `src/data/navigation.ts` |
| Colores y tipografía | `src/app/globals.css` (bloque `@theme`) |
| URL pública | variable `NEXT_PUBLIC_SITE_URL` (ver `.env.example`) |

## Regla de datos

Solo se publica lo confirmado. Todo campo en `null` en `site-config.ts` se **oculta** del sitio y de los datos
estructurados de SEO. Completar el valor lo activa en todas las páginas, sin tocar componentes.

## Pendiente de confirmar con el negocio

- Dirección exacta (calle y número). Con ella, reemplazar `mapsEmbed` por el "Insertar mapa" de Google Maps.
- Horarios de atención.
- Correo electrónico.
- Facebook e Instagram oficiales.
- Historia y trayectoria (`story`): sin datos documentados no se inventó nada.
- Catálogo real: cargar productos en `products` (nombre, categoría, descripción, marca, foto). Se listan solos
  bajo su categoría, con botón de consulta. No cargar ejemplos.
- Confirmar el agrupamiento de categorías por área (agropecuario / láctea) en `catalog.ts`.
- Fotografías reales (local, tambo, productos). Copiarlas a `public/images/` y usar `next/image`.
  Hoy el sitio usa ilustraciones propias, no fotos de stock.
- Dominio: definir `NEXT_PUBLIC_SITE_URL` antes de publicar.

## Formulario de contacto

Valida los campos y abre WhatsApp con la consulta redactada, al número según el tipo de consulta
(láctea, insumos y malla → número especializado; otras → número general). No hay backend: el mensaje
se envía cuando la persona lo confirma en WhatsApp. Para recibir consultas por correo se necesita un
servicio externo (por ejemplo Resend o Formspree) y un correo de destino.

## Notas técnicas

- `cacheComponents` y `partialPrefetching` se conservan de la configuración original.
- Con Cache Components el layout no se remonta entre rutas: el menú móvil se cierra solo al navegar.
- Seguridad: añadir cabeceras (CSP, X-Frame-Options) en `next.config.ts` al elegir hosting.


## Fachada de fondo
`public/images/fachada.webp` es el fondo del hero del inicio (imagen fija con degradado oscuro para leer el texto). Para cambiarla, reemplazar ese archivo.

## Menú desplegable
Se arma solo desde `src/data/catalog.ts` (categorías por área). Ferretería es sección propia (`/ferreteria`).
