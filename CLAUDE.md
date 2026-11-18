# CLAUDE.md — Portfolio de Martín García Curto

Portfolio web de una sola página para buscar trabajo como **Game Designer & Gameplay Programmer (Unity / C#)**.
Se publica en GitHub Pages: https://martingc-dev.github.io

> Comunícate con Martín en **español**.

## Objetivo
Que un reclutador entienda en menos de 30 segundos quién es, qué sabe hacer y qué hizo él en cada proyecto.

## Forma de trabajar (importante)
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
- Tema oscuro. Fondo `#0D0E12`, superficie `#16181F`, borde `#262A35`, texto `#ECEDEF`, secundario `#9AA0AC`.
- **Único acento: `#FF6B2C`** (naranja fuego).
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
_Última actualización: 2026-11-19_

**Hecho:** base del sitio (header fijo, menú móvil, footer, tokens CSS, animaciones) y portada completa. Datos de los 6 proyectos en `js/projects.js` con huecos `TODO`.

**Siguiente paso:** sección 2, Experiencia (Super Monkey Studio / Skuld).

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
