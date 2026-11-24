# CLAUDE.md — Portfolio de Martín García Curto

Portfolio web de una sola página para buscar trabajo como **Game Designer & Gameplay Programmer (Unity / C#)**.
Se publica en GitHub Pages: https://martingc-dev.github.io

> Comunícate con Martín en **español**.

## Objetivo
Que un reclutador entienda en menos de 30 segundos quién es, qué sabe hacer y qué hizo él en cada proyecto.

## Forma de trabajar (importante)
- **Martín quiere aprender HTML/CSS/JS escribiendo él el código** (desde 2026-11-20). Claude actúa de tutor: explica el concepto, propone el ejercicio, revisa lo que Martín escribe y da pistas. **No escribir el código por él** salvo que lo pida expresamente. La base y la portada actuales las escribió Claude; Martín decidió **mantenerlas** (no empezar de cero) y escribir él todo lo demás. Antes de su primera sección, Claude le explica el código de la portada.
- **Erratas, espacios, sangría y guiones los corrige Claude directamente** (pedido por Martín el 2026-11-24) y le dice qué ha cambiado. Los errores de concepto (estructura, etiquetas, clases, CSS) se los explica para que los corrija él.
- Se avanza **sección por sección**: construir una, enseñarla, esperar aprobación o cambios, y solo entonces pasar a la siguiente.
- Al proponer textos: dar una lista corta de opciones + una recomendación razonada.
- Si Martín descarta una opción pero quiere conservarla, guardarla como comentario HTML junto al texto elegido.
- Comprobar cada cambio en navegador a tamaño escritorio (1366px) y móvil (375px), sin scroll horizontal.
- Al terminar una sesión, **actualizar la sección "Estado actual"** de este archivo.

## Stack y restricciones
- HTML, CSS y JS puros. Sin build, sin frameworks, sin dependencias npm.
- Listo para GitHub Pages (`.nojekyll` en la raíz).
- Totalmente responsive; muchos reclutadores lo abrirán en el móvil.
- Respetar `prefers-reduced-motion`.

## Estructura de archivos
```
index.html          Esqueleto; la portada es HTML estático, el resto de secciones se rellenan desde JS
css/styles.css      Tokens (:root), componentes, secciones, animaciones
js/projects.js      SOLO DATOS de proyectos (window.PROJECTS). Añadir juegos aquí, no en el HTML
js/data.js          Experiencia, formación, premios, contacto (window.SITE)
js/main.js          Header al hacer scroll, menú móvil, animaciones .reveal (window.revealAll para contenido pintado después)
assets/             favicon.svg; faltan img/profile.webp, cv/Martin-Garcia-Curto-CV.pdf, projects/<slug>/cover.webp + preview.webm
```
Campos de un proyecto: `slug, title, featured, date, genre, role, team, duration, tech[], pitch, contributions[], cover, preview, links{itch, github}`.
`featured: true` → destacados (grande); `false` → tarjetas pequeñas. Enlace vacío = botón oculto.

## Dirección visual (aprobada)
- **Paleta inspirada en Skuld** (cambiada el 2026-11-20; la naranja anterior se descartó porque «parecía de Claude»). Inspirada, no copiada: no usar su marca tal cual.
- Fondo `#071017`, superficie `#0E1A22`, superficie-2 `#13232D`, borde `#1C2C36`, texto `#E9F1F2`, secundario `#8FA3AC`.
- **Único acento: `#2EE6A8`** (verde jade; en `rgb()`: `46 230 168`). Texto sobre el acento: `#04130E`. No usar naranja ni dorado.
- Tipografías (Google Fonts): **Unbounded** (títulos), **Inter** (texto), **JetBrains Mono** (etiquetas/datos).
- Animaciones sutiles al hacer scroll (clase `.reveal`).
- Tarjetas de proyecto: imagen fija; la animación se carga y reproduce al pasar el ratón. En móvil, se reproduce al entrar en pantalla. Preferir WebM/MP4 a GIF (aceptar ambos).

## Secciones (en orden)
1. Portada ✅
2. Experiencia actual: Super Monkey Studio / Skuld ⏳ siguiente
3. Proyectos destacados (3, en grande): GIF, rol, equipo, duración, tecnologías, qué hizo él, enlaces itch.io/GitHub
4. Otros proyectos (tarjetas pequeñas)
5. Premios
6. Habilidades
7. Contacto: email, LinkedIn, GitHub, itch.io

## Perfil (datos para los textos)
- Trabaja en **Super Monkey Studio** en **Skuld**: Tower Defense de acción por oleadas, mitología nórdica. En desarrollo, **sin material público** (no inventar imágenes ni detalles).
- Formación: Grado Superior en Animación 3D, Juegos y Entornos Interactivos; Máster en Diseño y Programación de Videojuegos (EVAD).
- Premios: Mejor Diseño en la EVAD Global Game Jam 2024; Top 8 en la VI GameJam Cultura Abierta 2024.
- Proyectos: Elementals (dic 2024, roguelike deck-building) ⭐, Dissonant (jun 2024, aventura) ⭐, Ludophatik (mar 2024, shooter) ⭐, Save The Sausage (mar 2024, arcade), Endless Crusade (dic 2023, endless runner), Fuente de Neptuno (feb 2023, shooter por oleadas). ⭐ = destacado propuesto; confirmar con Martín.

## Decisiones tomadas
- Rol en la portada: **"Game Designer / Gameplay Programmer"**. Martín dudó entre especializarse o poner solo "Programmer"; se mantuvo "Gameplay" (es lo que hace, es el término de las ofertas y refuerza el perfil híbrido).
- Frase de la portada: «Game designer que programa. / Programador que piensa en el jugador.» Alternativa guardada en un comentario de `index.html`: «Del documento de diseño al código jugable, en Unity y C#.»

## Estado actual
_Última actualización: 2026-11-23_

**Publicado:** repo público `martingc-dev/martingc-dev.github.io`, Pages desde `main` / `(root)`. En línea en https://martingc-dev.github.io (verificado 2026-11-19).

**Ejercicios de Martín hechos:** 1) cambiar la paleta (variables CSS, hex → rgb, SVG como texto) ✅ · Lección 1 (etiquetas, class, id/anclas, jerarquía h1/h2) ✅ · 2) HTML de Experiencia, escrito a mano en `index.html` (no desde `data.js`) ✅ — lista de logros de Skuld cerrada (6 puntos, verbo + qué + resultado, `<strong>` en la parte clave). Pendiente confirmar si Martín también programó torretas y bendiciones; si es así, cambiar el punto 1 a «Diseño y programo…».

3) CSS de la tarjeta de Experiencia ✅ (2026-11-23): clases BEM `xp__meta` (+ `mono`), `xp__title`, `xp__desc`, `xp__role`, `xp__list`; aprendió `font-family` vs `color`, `li + li`, especificidad (clase > etiqueta, para recuperar los puntos que quita la regla global `ul`), `::marker`. Comprobado a 1366px y 375px sin scroll horizontal.

4) Estilo general `.section h2` ✅ (2026-11-23): aprendió clase (`.x`) vs etiqueta (`x`), selector descendiente, `clamp()`, `rem` vs `em`. Comprobado: 44.8px en escritorio, 30.4px en móvil (Skuld 24px), sin scroll horizontal.

5) Retoques de la tarjeta ✅ (2026-11-23): sangría, `padding: clamp(20px, 4vw, 32px)` (20px móvil / 32px escritorio, comprobado), líneas en blanco entre reglas.

**Elementals (datos cerrados 2026-11-24):** TFM del Máster EVAD, en solitario, 3–4 meses, Unity · C# · ScriptableObjects. Frase: «Combate por turnos con cartas, inspirado en Slay the Spire y construido desde cero en Unity como Trabajo Fin de Máster.» Logros: 1) diseñó y programó el juego en solitario (TFM); 2) combate por turnos con cartas: mazo, mano, energía, turnos enemigos; 3) sistema de cartas y efectos de estado (quemadura, vulnerable, bloqueo) con ScriptableObjects; 4) mazos iniciales de guardianes y enemigos con comportamientos distintos (p. ej. que se curan). Créditos: «Arte: assets de terceros (itch.io)». GitHub: `https://github.com/martingc-dev/TFM_ElementalGuardians` — ⚠️ Martín lo hizo público temporalmente y piensa volver a hacerlo privado al terminar la sección: **si lo hace, hay que quitar el enlace de GitHub** (daría 404).

**Elementals, comprobado en el proyecto final (2026-11-24):** el proyecto final es `../TFM_ProyectoMaster2D` (el repo público `TFM_ElementalGuardians` es un **prototipo antiguo**, sin mapa ni tienda). Implementado: mapa ramificado procedural (`Scripts/Map`, programado por Martín **siguiendo un tutorial de YouTube** → decirlo así), tienda, tesoro, descanso, logros, notas de tutorial, tamaño de texto. El filtro de daltonismo es un **asset comprado** (`Assets/ColorblindFilter`, «Thank you for purchasing») → decir «integré», no «programé», y no publicar ese proyecto. **Decidido:** sin botón de GitHub; en su lugar «Leer GDD» → `assets/projects/elementals/GDD_Elementals.pdf` (Martín puede volver a poner privado el repo). Cuando se haga el JS (6c), añadir un campo `gdd` a los enlaces de `projects.js` (PDF corregido y comprimido ✅ en `assets/projects/elementals/GDD_Elementals.pdf`, 832 KB, 26 págs.).

6a) HTML de la tarjeta de Elementals ✅ (2026-11-24): `<article class="project reveal">` con `project__media` (img) + `project__body` (meta, title, pitch, facts, tags, list, credit, links). Aprendió `<article>`, `<img>` (src/alt/loading), `target="_blank" rel="noopener"`, rutas relativas, **`<a>` para navegar vs `<button>` para acciones**. Parte del HTML apareció escrito sin que Martín lo escribiera (¿Copilot/otra sesión?); se le recomendó desactivar Copilot mientras aprende.
6b) CSS de la tarjeta ✅ (2026-11-24): grid (`fr`, `gap`, `align-items`), `aspect-ratio`, `object-fit`, `overflow`, media query a 860px, flexbox (`flex-wrap`, `gap` doble), etiquetas en píldora (`border-radius: 999px`); reutilizó por su cuenta el patrón de `.xp__list`. Comprobado a 1366px (2 columnas) y 375px (1 columna, sin scroll horizontal).

**Siguiente ejercicio:** 6c) JavaScript: generar las tarjetas desde `js/projects.js` (añadir campo `gdd` a `links`), y luego datos de Dissonant y Ludophatik. Falta la captura `assets/projects/elementals/cover.webp`. (Detalles mínimos opcionales: espacio tras la coma en el `clamp` de `.xp-card`, línea en blanco antes del comentario «Experiencia».)

**Vista previa:** en el PC de casa hay Python (`python -m http.server 5500`); en el de la oficina no hay Python y se usa un servidor PowerShell desde `.claude/launch.json` (el script está en la carpeta temporal de la sesión; si desaparece, hay que regenerarlo).

Skuld: Martín está en Super Monkey Studio desde **2024**.

**Hecho:** base del sitio (header fijo, menú móvil, footer, tokens CSS, animaciones) y portada completa. Datos de los 6 proyectos en `js/projects.js` con huecos `TODO`.

**Siguiente paso:** sección 3, Proyectos destacados (Experiencia terminada salvo retoques menores).

**Pendiente de que Martín aporte:**
- Skuld: fecha de inicio y qué hace él (3–4 puntos).
- Por proyecto: rol, tamaño del equipo, duración, qué hizo él, frase del juego, enlace a GitHub si existe.
- Contacto: email público y URL de LinkedIn.
- Carpeta `assets`: foto, CV en PDF, portadas y GIF/vídeos de los juegos, `og-image.png`. (Mientras falte la foto se muestran las iniciales "MGC".)

**Cuenta de GitHub:** usuario cambiado de `mrlegotl` a `martingc-dev` (2026-11-19) para que la web quede en `martingc-dev.github.io`. GitHub: `https://github.com/martingc-dev`. Su itch.io sigue siendo `mrlegotl`. El repo debe ser **público** (Pages en cuenta gratuita).

## Vista previa local
Abrir `index.html` como archivo no carga bien; usar un servidor:
```
python -m http.server 5500
```
y abrir http://localhost:5500
