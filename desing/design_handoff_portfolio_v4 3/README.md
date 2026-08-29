# Handoff: Portfolio_V3 → rediseño editorial (Portafolio v4)

## Overview
Rediseño completo del portafolio de Isaac Quiroz Madrigal (diseñador UX/UI + desarrollador front-end, Cancún, MX). Sustituye la home de cards Tailwind por una **portada editorial tipo periódico** con paleta verde, animaciones de entrada y cursor magnético, y añade tres páginas de destino: contacto, plantilla de caso de estudio y una vista CV imprimible. El sitio es trilingüe (ES / EN / PT) y conserva el switch **Edición Diseño ↔ Edición Código** que ya existe en el repo.

Repositorio destino: `IsaacQuirozMasters/Portfolio_V3` (Nuxt 4 + `@nuxtjs/i18n` + Tailwind).

## About the Design Files
Los archivos de este paquete son **referencias de diseño escritas en HTML** — prototipos que muestran el aspecto y el comportamiento deseados, **no código de producción para copiar y pegar**. La tarea es **recrear estos diseños en el entorno que ya existe en el repositorio**: componentes `.vue` en `app/components/`, páginas en `app/pages/`, textos en `app/locales/{es,en,pt}.json`, estilos con Tailwind.

Concretamente:
- El HTML usa una capa de runtime propia (`support.js`, plantillas `<x-dc>`, atributos `style-hover`). **Nada de eso se lleva a Nuxt.** Traduce `style-hover="…"` a `hover:` de Tailwind o a CSS, y los `{{ hole }}` a `v-for` / `computed` de Vue.
- Los estilos inline del prototipo son deliberados (para que el prototipo pinte al instante). En Nuxt conviértelos a clases Tailwind o a `<style scoped>`; conserva los valores exactos.
- `_ds/broadsheet/styles.css` **sí** se lleva tal cual: es la hoja de tokens del sistema de diseño (variables `--color-*`, `--font-*`, `--space-*`) y las clases de componentes (`.btn`, `.tag`, `.card`, `.table`, `.field`, `.input`, `.cmyk`, `.cmyk-num`). Impórtala en `app/assets/css/` y úsala junto a Tailwind.
- `_ds/broadsheet/_ds_bundle.js` incluye los filtros SVG de separación de tintas que necesitan `.cmyk` y `.cmyk-num`. Si sólo usas `.cmyk-num` (recomendado, ver más abajo), basta con incluir el bundle o extraer de él los defs `#sep-c/#sep-m/#sep-y/#sep-k`.

## Fidelity
**Alta fidelidad (hifi).** Colores, tipografía, escala, espaciado, animaciones y copy son finales. Recrear pixel-perfect usando las librerías del repo.

Excepción de baja fidelidad: el **avatar 3D** de la home es un placeholder (`<image-slot>`). Isaac va a crear el render; en Nuxt es simplemente un `<img>`/`<canvas>` con la misma caja (`aspect-ratio:3/4`) y el halo verde de fondo.

## Alcance
Cuatro vistas a implementar: la home **1a**, y las páginas **2a** (contacto), **2b** (plantilla de caso de estudio) y **2c** (vista CV imprimible). La home 1a es la variante elegida por Isaac; las alternativas exploradas quedaron descartadas y no están en este paquete.

---

## Screens / Views

### 1a — Home «Portada bento»

**Propósito.** Entrada única al portafolio; presenta a Isaac como perfil híbrido y filtra todo el contenido por edición (Diseño / Código).

**Layout.** Ancho de diseño 1120px, fondo `var(--color-bg)`, padding lateral `var(--space-8)`. De arriba a abajo:

1. **Cabecera (front-page furniture).** Filete de 6px `var(--color-text)` (se dibuja con `wipe`) → fila con `<h1>` de 76px / `line-height:.86` / `letter-spacing:-.02em` a la izquierda, en dos líneas que se **teclean** una tras otra, y bloque de datos a la derecha (14px, `line-height:1.5`, `var(--color-neutral-800)`; la línea "Diseñador UX/UI & Front-end" en italic 19px `var(--color-text)`) → filete de 1px → rail de dateline (11.5px, `letter-spacing:.14em`, uppercase, `var(--color-neutral-700)`) con `Edición {Diseño|Código} · 2026` a la izquierda, nav en el centro (Proyectos, Sobre mí, Estudios, CV, Contacto — este último en `var(--color-accent-2-700)`) y, a la derecha, selector de idioma `ES · EN · PT` (los inactivos a `opacity:.45`) junto al **botón de edición matutina / nocturna** (borde `var(--color-divider)`, 11px uppercase, punto de 9px, en hover borde y texto pasan al verde) → filete de 3px.
2. **Switch de edición.** El control segmentado del sistema: `.seg` con dos `.seg-opt` (cada uno un `<label>` con un `<input type="radio">` oculto, mismo `name`). La opción activa toma `background: var(--color-accent)` y `color: var(--color-bg)` vía `:has(input:checked)` — no hay que estilarla a mano. A la derecha, nota en italic 12.5px: "Cambia la portada completa: proyectos, herramientas y estudios."
3. **Bloque bento superior.** Grid de 12 columnas, `gap:var(--space-6)`, `align-items:start`:
   - `span 4` — **avatar**: caja `aspect-ratio:3/4`, `border-radius:var(--radius-md)`, `object-fit:cover` con `object-position:50% 18%`, sobre un halo `radial-gradient(circle at 50% 45%, var(--color-accent-200), transparent 68%)` que respira (`drift`, 13s); la imagen escala a 1.03 en hover en `1.2s`. Ocupada por `public/group.png` de forma temporal — cuando exista el render 3D se sustituye la fuente y la caption. Debajo, caption 11.5px uppercase `letter-spacing:.14em`.
   - `span 5` — **Sobre mí**: kicker 11px uppercase `letter-spacing:.16em` en `var(--color-accent-700)`; párrafo de 26px `line-height:1.28`; párrafo de 15px `line-height:1.62` en `var(--color-neutral-800)`; dos acciones (`.btn.btn-primary` "Descargar CV", `.btn.btn-ghost` "Ver como CV →").
   - `span 3` — **Disponibilidad**: `.cmyk-num` de 64px `font-weight:600` con el texto "24h"; párrafo 14px; tres tags (`.tag-accent` Freelance, `.tag-outline` Remoto, `.tag-outline` ES/EN/PT).
4. **Proyectos destacados.** (contenedor con el hook del reprint, ver Interacciones) Encabezado con `border-top:3px solid var(--color-text)`, `<h2>` de 34px y contador a la derecha (12px uppercase). Grid de **6 columnas**; cada proyecto ocupa `span` variable (3/3/2/2/2 en Diseño, 3/3/3/3 en Código) → produce el ritmo bento. Cada tarjeta es `.card`: imagen `aspect-ratio:16/10` `object-fit:cover` que escala a 1.06 en hover (`transition:transform .8s cubic-bezier(.2,.8,.2,1)`), luego `.card-kicker` (10.5px uppercase, `var(--color-accent-700)`), `.card-title` 22px, `.card-body` 14px. La tarjeta sube `translateY(-4px)` y toma `var(--shadow-lg)` en hover.
5. **Marquesina de herramientas.** Rail entre filetes de 1px `var(--color-divider)`; texto italic 30px que se desplaza en loop infinito (`marquee`, 26s linear, dos copias del string, `translateX(0 → -50%)`). El contenido cambia con la edición.
6. **Experiencia + Estudios.** Grid 12: `span 7` con `.table` (primera columna de 150px en `var(--color-neutral-700)`) y `span 5` con lista de estudios; ambos con `border-top:3px solid var(--color-text)` y `<h2>` de 30px. La columna izquierda de la tabla sólo lleva fecha donde el repo la confirma (`Mar 2024 – hoy` para WayaWeb); en las demás filas lleva el nombre del contexto, no un rango inventado.
7. **Cierre de contacto.** `border-top:6px solid var(--color-text)`, texto de 40px "¿Construimos algo?" y `.btn.btn-primary` de 17px "Ir a contacto →".

**Cursor magnético (mira de registro).** Un div fijo de 34px con tres hijos: un anillo (`border:1px solid var(--color-accent)`, `border-radius:inherit`) y dos líneas de 1px que lo cruzan y sobresalen 7px por cada lado a `opacity:.65` — la mira de registro de imprenta. Arranca en `opacity:0`. Al entrar en cualquier elemento marcado (botones, tarjetas, enlaces de acción) se mide con `getBoundingClientRect()` y el círculo se estira hasta cubrirlo (`width`/`height` = caja + 10px, `border-radius:2px` si la caja es alta, `999px` si es baja); al salir vuelve a `opacity:0` y sigue al ratón con `transform` translate. Transiciones: `opacity .25s`, `transform .12s cubic-bezier(.2,.8,.2,1)`, `width/height .25s`. En Vue: un composable `useMagneticCursor()` + directiva `v-magnet`. Sólo se monta si `(hover: hover)` y no hay `prefers-reduced-motion`.

**Fondo animado.** Campo de puntos de proceso arriba a la derecha (420×420, dos `radial-gradient` de 7px en cian y oliva desfasados 3px, `opacity:.5`, animación `drift` 14s). **Debe ir en `z-index:0` con el contenido en `z-index:1`** — si no, pisa la tipografía.

### 2a — Contacto (página aparte, `/contact`)
Basado en el formulario de radnaabazar.com/en/contact, traducido al sistema.

Grid `1.25fr / .75fr`, `gap:var(--space-8)`.

- **Izquierda.** `<h1>` "Hablemos." a 92px `line-height:.86` `letter-spacing:-.03em`, con el punto final en `var(--color-accent-700)`. Párrafo 18px `max-width:44ch`. Campos `.field` + `.input` **sin caja**: `background:transparent`, `border:0`, `border-bottom:1px solid var(--color-divider)`, `border-radius:0`, `font-size:22px` (textarea 20px `line-height:1.5`, `rows=4`, `resize:vertical`), label 11px uppercase `letter-spacing:.16em` en `var(--color-neutral-700)`. En `:focus` el subrayado pasa a `var(--color-accent)`. Fila de tags de tipo de contacto (Freelance / Tiempo completo / Consultoría UX / Front-end). Botón `.btn.btn-primary` de 18px, `padding:14px 28px`, `min-width:230px`.
- **Derecha.** Columna con `border-left:1px solid var(--color-divider)`, `padding-left:var(--space-6)`, cuatro bloques (label 11px uppercase + dato 21px): Dónde estoy (Cancún, Quintana Roo · México · GMT−5), Idiomas (Español · Inglés · Portugués), Respuesta (`.cmyk-num` 52px "24h") y Directo (correo, LinkedIn, GitHub, Behance).
- **Pie.** `border-top:6px solid var(--color-text)` + nota 15px + `.btn.btn-secondary` "Agendar llamada →".

**Estados del botón.** `idle` → "Enviar mensaje →"; `sending` → "Enviando…"; `sent` → "Enviado ✓" y aparece la nota italic 14px `var(--color-accent-700)` "Te contesto en menos de 24 horas." (`opacity 0 → 1`, `transition .4s`). En el prototipo son timeouts (1100ms a `sent`, 4600ms de vuelta a `idle`); en producción se enlazan al resultado real del POST y hace falta un cuarto estado `error` con el mensaje en `var(--color-accent-2-700)`.

### 2b — Caso de estudio (plantilla, `/projects/[slug]`)
Sirve para los diez proyectos del repo. Estructura:

1. Rail superior 11.5px uppercase: "← Proyectos" / "Caso N de M · edición" / línea de tiempo. Filete de 3px.
2. `<h1>` de 74px `line-height:.9` `letter-spacing:-.025em` + subtítulo italic 24px `max-width:56ch`.
3. Metadatos en 4 columnas sobre `border-top:1px solid var(--color-text)`: Rol / Empresa / Stack / Línea de tiempo (label 11px uppercase, valor 17px).
4. Imagen a sangre `aspect-ratio:16/7` `object-fit:cover`, sin filtro.
5. Dos columnas: "El problema" y "Qué hice" (`<h2>` 28px, cuerpo 16px `line-height:1.65`, lista con `line-height:1.7`).
6. Cita entre filetes de 1px: párrafo italic 34px `line-height:1.25` `max-width:34ch`.
7. Galería de dos figuras `aspect-ratio:4/3` con `figcaption` 13px `var(--color-neutral-700)`.
8. Tres columnas de cierre (Resultado / Cómo / Aprendizaje) sobre `border-top:3px`, kickers en `var(--color-accent-700)`.
9. Enlace al caso siguiente: `border-top:6px`, label 11px uppercase + título 40px; en hover gana `padding-left:12px` y color `var(--color-accent-700)`.

Contenido de ejemplo cargado: **Propiedades Cancún Landing** con los datos reales de `app/locales/es.json → projectsDev.propiedadesCancun` (+25% de tráfico orgánico, ranking 3–10, CSS crítico, URLs semánticas, metadatos automáticos, robots.txt y 301).

### 2c — Vista CV (`/cv`, imprimible)
Hoja de **816px** de ancho (Letter a 96dpi), `padding: var(--space-8) 56px`. Misma cabecera de filetes que 1a en escala reducida (`<h1>` 44px, datos 12.5px, rail 11px uppercase). Cuerpo en grid `96px 1fr` con `gap: var(--space-3) var(--space-4)`: la columna izquierda son los labels de sección (11px uppercase `letter-spacing:.14em`, `var(--color-neutral-700)`), la derecha el contenido. Secciones: Experiencia (puesto 17px, meta 12.5px, detalle 14px), Proyectos, Educación, Diseño, Código. Pie con `border-top:1px solid var(--color-text)` y dos notas 11px uppercase.

Para imprimir: `@page { margin: 0 }`, la hoja a `width:8.5in`, ocultar la navegación y forzar `-webkit-print-color-adjust: exact` para que los filetes negros y el verde salgan. El botón "Descargar CV" de la home apunta a esta ruta con `?print=1`.

---

## Interactions & Behavior

| Interacción | Detalle |
| --- | --- |
| **Registro de planchas (`replate`)** | La animación firma del sitio. Al cambiar de edición, cada tarjeta del grid se reanima: `0% translate(-6px,4px) opacity .25` → `45% translate(4px,-3px) opacity .75` → `100%` sin transformar, `.6s cubic-bezier(.2,.8,.2,1)`, con `45ms` de retardo acumulado por tarjeta. Se dispara imperativamente después del cambio de estado (`animation:'none'` → forzar reflow → asignar la animación), porque un cambio de clase no reinicia una animación en curso. |
| **Trama que se resuelve** | Cada foto lleva encima un `<span>` con `background-image:radial-gradient(circle, var(--color-text) 46%, transparent 48%)`, `background-size:5px 5px`, `opacity:.9`. Al entrar en viewport (`IntersectionObserver`, `threshold:.35`) pasa a `background-size:11px 11px` y `opacity:0` en `1.1s cubic-bezier(.2,.8,.2,1)`: la retícula de periódico se abre y aparece la fotografía. Se observa una sola vez. |
| **Titulares tecleados** | Todos los `<h1>`. Al entrar en viewport (`threshold:.55`) el elemento pasa a `display:inline-block; overflow:hidden; white-space:nowrap`, gana `border-right:5px solid var(--color-accent)` y `padding-right:8px`, y se anima `width: 0 → anchura medida` con `easing: steps(nCaracteres, end)` y `duration: max(650, n × 105)ms` — el mismo ritmo por carácter en todos los titulares. Al terminar, el cursor parpadea 5 veces (`@keyframes caret`, alterna `border-right-color` entre el acento y `transparent`) y se retira. **Medir la anchura antes de aplicar los estilos**, y no dejar `width:0` en el HTML: si el script no corre, el titular debe verse completo. En la portada las dos líneas del nombre se encadenan: la segunda espera `max(650, n₁ × 105) + 90ms`. |
| Entradas | `rise`: `opacity 0 → 1` + `translateY(26px) → 0`, `.7–1s`, `cubic-bezier(.2,.8,.2,1)` (hero: `cubic-bezier(.16,1,.3,1)`), escalonadas con delays de 60–80ms. En producción dispararlas con `IntersectionObserver`, no al cargar. |
| `marquee` | `translateX(0 → -50%)`, 26s linear infinite, dos copias del string. |
| `drift` | Deriva de ±6px, 14s `ease-in-out` infinite, para los campos de puntos. |
| Cursor magnético | Ver 1a. Desactivar en `(hover: none)` y con `prefers-reduced-motion`. |
| Switch de edición | Recalcula proyectos, contador, herramientas y la palabra "Edición" del rail. Debe persistir (query param o `localStorage`) para que el enlace se pueda compartir. |
| Hover de tarjeta | `translateY(-4px)` + `var(--shadow-lg)`, imagen a `scale(1.06)` en `.8s`. |
| Entintado de filetes | Los tres filetes de la cabecera se dibujan de izquierda a derecha con `wipe` (`.9s`, `1s` a `.25s`, `1.1s` a `.4s`). |
| Foco de teclado | `outline: 2px solid var(--color-accent); outline-offset: 2px` — ya viene en la hoja del sistema; no sobrescribir. |
| `prefers-reduced-motion` | Anular `marquee`, `drift`, `replate`, el tecleo y el cursor magnético; la trama de puntos se retira sin transición y los titulares aparecen completos; conservar las entradas como `fade` corto. |

## State Management
Poco estado; nada global obligatorio.

- `edition: 'design' | 'code'` — home 1a. Persistir en URL (`?edicion=codigo`) y/o `localStorage`. Deriva: lista de proyectos, contador, string de herramientas, etiqueta del rail.
- `contact: { name, email, message, type }` + `status: 'idle' | 'sending' | 'sent' | 'error'` — página 2a. Validación: nombre no vacío, email con formato válido, mensaje ≥ 20 caracteres; mostrar el error bajo el campo en `var(--color-accent-2-700)`.
- `night: boolean` — edición matutina / nocturna. Persistir en `localStorage` y respetar `prefers-color-scheme: dark` como valor inicial. En el prototipo se aplica como `data-night="on|off"` en la raíz de cada vista; en Nuxt va en `<html>` para que cubra toda la página.
- `locale` — ya resuelto por `@nuxtjs/i18n` en el repo. Todo el copy nuevo va a `app/locales/{es,en,pt}.json`; **no** dejar texto duro en los componentes.

Datos: los proyectos pueden salir de un `content/projects.json` o de las claves existentes `home.carousel*` / `projects*` / `projectsDev.*` de los locales. No hace falta fetching.

## Design Tokens
Todos vienen de `_ds/broadsheet/styles.css`. Úsalos como variables CSS; los hex están sólo por referencia.

**Base del sistema**
- `--color-bg` `#f3f2f2` · `--color-text` `#201e1d` · `--color-surface`, `--color-divider`
- Neutros `--color-neutral-100 … -900` (usados: `-600` `-700` `-800`)
- Sombras `--shadow-sm` / `--shadow-md` / `--shadow-lg`
- Radios `--radius-*` (2px de base) · Espaciado `--space-1 … --space-8` (densidad 1.25×)
- Tipografía: `--font-heading` y `--font-body` = **Source Serif 4**, con la italic real cargada al peso de cuerpo. No introducir sans-serif.

**Override verde de este rediseño** (reemplaza el cian/magenta del sistema; declarar en `:root` después de importar la hoja):

```css
:root{
  --color-accent:#10855a;
  --color-accent-100:#e9f7ee; --color-accent-200:#c9ecd6; --color-accent-300:#9adcb5;
  --color-accent-400:#63c08f; --color-accent-500:#34a26c; --color-accent-600:#0d8450;
  --color-accent-700:#00663c; --color-accent-800:#00482a; --color-accent-900:#0b301e;
  --color-accent-2:#6e8c0d;
  --color-accent-2-100:#f3f7e2; --color-accent-2-200:#e3eebe; --color-accent-2-300:#cbe08f;
  --color-accent-2-400:#a9c65a; --color-accent-2-500:#8aa92c; --color-accent-2-600:#6e8c0d;
  --color-accent-2-700:#536b00; --color-accent-2-800:#3b4c00; --color-accent-2-900:#283300;
  --color-process-yellow:#c8d62b;
}
```

Uso: **verde profundo** (`--color-accent`) para lo interactivo y los kickers (en texto de párrafo usar `-700`, que es el paso con contraste suficiente); **oliva** (`--color-accent-2`) como segundo color puntual — nunca los dos en el mismo componente pequeño; `--color-process-yellow` sólo en los campos de puntos del fondo.

**Edición nocturna.** El sistema Broadsheet no define superficies oscuras, así que la nocturna es la misma portada **impresa en negativo** — no un dark mode genérico. Se implementa invirtiendo las **rampas completas** bajo `[data-night="on"]`: si sólo se sobrescriben `--color-bg`/`--color-text` y unos pocos pasos, las clases del sistema que leen otros pasos (`.tag-accent` usa `-100` de fondo con `-800` de texto, `.tag-neutral` igual) siguen pintando en claro y el texto queda ilegible.

```css
[data-night="on"]{
  --color-bg:#131412; --color-surface:#1c1e1b; --color-text:#efece5;
  --color-divider:rgba(239,236,229,.2);
  --color-neutral-100:#1c1e1b; --color-neutral-200:#252723; --color-neutral-300:#33352f;
  --color-neutral-400:#4a4c45; --color-neutral-500:#6e706a; --color-neutral-600:#928f88;
  --color-neutral-700:#b0aca4; --color-neutral-800:#d4d0c8; --color-neutral-900:#f0ede6;
  --color-accent:#3fc98a;
  --color-accent-100:#0f2e21; --color-accent-200:#153a29; --color-accent-300:#1e5b3f;
  --color-accent-400:#2c8158; --color-accent-500:#34a26c; --color-accent-600:#3fc98a;
  --color-accent-700:#8fe3b7; --color-accent-800:#b9f0d3; --color-accent-900:#ddf8e9;
  --color-accent-2:#a9c65a;
  --color-accent-2-100:#22290e; --color-accent-2-200:#2b3512; --color-accent-2-300:#3f4d18;
  --color-accent-2-400:#5c7020; --color-accent-2-500:#8aa92c; --color-accent-2-600:#a9c65a;
  --color-accent-2-700:#cbe08f; --color-accent-2-800:#e0edb8; --color-accent-2-900:#f0f6dc;
  --color-process-yellow:#6d7420;
}
[data-night="on"] .card{ background: var(--color-surface); }
```

Regla al añadir componentes: **cualquier paso de rampa nuevo que uses debe existir también en el bloque nocturno.**

**Escala tipográfica usada** (px): 104 / 92 / 76 / 74 / 64 / 62 / 56 / 44 / 40 / 34 / 30 / 28 / 26 / 24 / 22 / 21 / 19 / 18 / 17 / 16 / 15 / 14.5 / 14 / 13 / 12.5 / 11.5 / 11 / 10.5. Los labels de 10.5–12px van siempre en uppercase con `letter-spacing:.14–.20em`.

**Filetes (front-page furniture).** Sólo tres pesos, siempre en `var(--color-text)`: **6px** para el cierre de una zona mayor, **3px** para abrir una sección, **1px** para separar líneas de rail. Las divisiones internas usan `1px solid var(--color-divider)`. El resto de la jerarquía la hace el aire, no las cajas.

## Assets
Todo salió del propio repositorio (`public/img/**`) y se usa **sin filtros** — este es un cambio explícito respecto al sistema, que por defecto imprime las fotos como planchas CMYK desregistradas:

- `public/img/yiapp/yofrzpjwfxwjao7e2jub.webp` — YiApp
- `public/img/free/lqgrculfmexx2betqcuw.webp` — Free Learn
- `public/img/propiedades/nvifz5egnosguvd2tmgp.webp` — Propiedades Cancún (portada)
- `public/img/propiedades/vwzl4wciljwsqlyas4kl.webp`, `.../wgjcjzt4otaaxzn2ipgl.webp`, `.../flujo.webp` — galería del caso
- `public/img/citizen/955shots_so.webp` — Denuncia Ciudadana
- `public/img/otif/1.webp` — Rediseño Landing OTIF
- `public/img/virture/dashboard.png`, `.../promotions.png` — Virture CRM
- `public/img/estancias/estancias-estadias.png` — Estancias y Estadías
- `public/img/zooapp/detalle.png` — BioAprendizaje México
- `public/group.png` — retrato actual, **en uso temporal** en el módulo del avatar hasta que exista el render 3D

Iconos del sistema: Phosphor, peso duotone. Fuente: Source Serif 4 (auto-alojarla, no cargarla desde un CDN de terceros).

Pendiente de Isaac: el **render del avatar 3D**. Hasta entonces la caja muestra `public/group.png` con la caption "Retrato temporal · aquí va el avatar 3D".

## Contenido verificado contra el repo
Estos datos salieron de `app/locales/es.json` y de `app/pages/projects/**`; no inventar variantes:

- **UPQROO** — Ingeniería en Software, 2020–2023.
- **Google UX Design Professional Certificate** — 2024.
- **Propiedades Cancún (front-end)** — Marzo 2024 – actualidad; +25% de tráfico orgánico; páginas transaccionales en ranking 3–10.
- **Proyectos UX** (con su `meta.timeline` verbatim): YiApp e-commerce (Ene–Abr 2023), Free Learn ("1 mes", sin año en el repo), Propiedades Cancún Landing (Mar 2024 – hoy), Rediseño Landing OTIF (2024), Denuncia Ciudadana (Ene–Feb 2024).
- **Proyectos front-end**: Propiedades Cancún Landing (Mar 2024 – hoy), Virture CRM (2024), Sistema de Gestión de Estancias y Estadías, BioAprendizaje México (zoo-app).

Las fechas de proyecto salen de `projects.*.meta.timeline` y `projectsDev.*.timeline`. **Free Learn no tiene año en el repo** — aparece como "1 mes"; no asignarle uno.
- **Experiencia**: WayaWeb / Propiedades Cancún (Landing, Virture App y CRM) — **empleo actual**, Marzo 2024 – actualidad; Wizeline (PATIO for Kudos); UPQROO (Reptiles App, Estancias y Estadías).

**Fechas que el repo NO confirma** y que por eso no aparecen en el diseño: los años de Wizeline y del periodo universitario. No inventarlas al implementar — pedírselas a Isaac y añadirlas entonces.

Sin captura disponible: **PATIO for Kudos** (proyecto privado). Si aparece en una lista, va con marco y nota, nunca con una imagen prestada de otro proyecto.

## Files
- `Portafolio Isaac.dc.html` — el diseño completo: arriba las páginas de destino (2a contacto, 2b caso, 2c CV) y abajo la home 1a. Ábrelo en un navegador para ver animaciones y estados reales.
- `_ds/broadsheet/styles.css` — tokens y clases del sistema Broadsheet. Se lleva al repo.
- `_ds/broadsheet/_ds_bundle.js` — filtros de separación de tintas (necesarios para `.cmyk-num`).
- `support.js` — runtime del prototipo. **No se lleva al repo**; sólo hace funcionar el HTML de referencia.

## Orden de implementación sugerido
1. Llevar `styles.css` + el override verde a `app/assets/css/` y registrarlo en `nuxt.config.ts`; auto-alojar Source Serif 4.
2. Componente de cabecera (filetes + rail + nav + selector de idioma) — se reutiliza en las cuatro vistas.
3. Home 1a, empezando por los bloques estáticos; el switch de edición al final.
4. Página de contacto con validación y estados reales de envío.
5. Plantilla de caso; migrar los diez proyectos a ella.
6. Vista CV + CSS de impresión.
7. Edición nocturna: el bloque de rampas invertidas y el toggle persistido.
8. Animaciones, en este orden: entradas y titulares tecleados con `IntersectionObserver`, trama que se resuelve, registro de planchas al cambiar de edición, y por último cursor de registro y marquesina — los dos últimos tras `prefers-reduced-motion` y `(hover: hover)`.
9. Copy nuevo a `es.json` / `en.json` / `pt.json`.
