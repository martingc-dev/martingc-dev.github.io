/* =========================================================
   PROYECTOS
   ---------------------------------------------------------
   Para añadir un juego: copia un bloque { ... }, pégalo
   en la lista y cambia los datos. No hace falta tocar el HTML.

   - featured: true  → aparece en "Proyectos destacados" (grande)
   - featured: false → aparece en "Otros proyectos" (tarjeta pequeña)
   - cover:   imagen fija (.webp / .jpg / .png)
   - preview: animación al pasar el ratón (.webm / .mp4 / .gif)
   - Si un enlace está vacío (""), su botón no se muestra.
   - El orden de la lista es el orden en la página.
   ========================================================= */

window.PROJECTS = [
  {
    slug: "elementals",
    title: "Elementals",
    featured: true,
    date: "2024-12",
    genre: "Roguelike deck-building",
    role: "",            // TODO: tu rol
    team: null,          // TODO: nº de personas
    duration: "",        // TODO: p. ej. "4 meses"
    tech: ["Unity", "C#"],
    pitch: "",           // TODO: una frase sobre el juego
    contributions: [],   // TODO: qué hiciste tú (viñetas)
    cover: "assets/projects/elementals/cover.webp",
    preview: "assets/projects/elementals/preview.webm",
    links: { itch: "https://mrlegotl.itch.io/elementals", github: "" }
  },
  {
    slug: "dissonant",
    title: "Dissonant",
    featured: true,
    date: "2024-06",
    genre: "Aventura",
    role: "",
    team: null,
    duration: "",
    tech: ["Unity", "C#"],
    pitch: "",
    contributions: [],
    cover: "assets/projects/dissonant/cover.webp",
    preview: "assets/projects/dissonant/preview.webm",
    links: { itch: "https://mrlegotl.itch.io/dissonat", github: "" }
  },
  {
    slug: "ludophatik",
    title: "Ludophatik",
    featured: true,
    date: "2024-03",
    genre: "Shooter",
    role: "",
    team: null,
    duration: "",
    tech: ["Unity", "C#"],
    pitch: "",
    contributions: [],
    cover: "assets/projects/ludophatik/cover.webp",
    preview: "assets/projects/ludophatik/preview.webm",
    links: { itch: "https://mrlegotl.itch.io/ludophatick", github: "" }
  },
  {
    slug: "save-the-sausage",
    title: "Save The Sausage",
    featured: false,
    date: "2024-03",
    genre: "Arcade",
    role: "",
    team: null,
    duration: "",
    tech: ["Unity", "C#"],
    pitch: "",
    contributions: [],
    cover: "assets/projects/save-the-sausage/cover.webp",
    preview: "assets/projects/save-the-sausage/preview.webm",
    links: { itch: "https://mrlegotl.itch.io/save-the-sausage", github: "" }
  },
  {
    slug: "endless-crusade",
    title: "Endless Crusade",
    featured: false,
    date: "2023-12",
    genre: "Endless runner",
    role: "",
    team: null,
    duration: "",
    tech: ["Unity", "C#"],
    pitch: "",
    contributions: [],
    cover: "assets/projects/endless-crusade/cover.webp",
    preview: "assets/projects/endless-crusade/preview.webm",
    links: { itch: "https://mrlegotl.itch.io/endless-crusade", github: "" }
  },
  {
    slug: "fuente-de-neptuno",
    title: "Fuente de Neptuno",
    featured: false,
    date: "2023-02",
    genre: "Shooter por oleadas",
    role: "",
    team: null,
    duration: "",
    tech: ["Unity", "C#"],
    pitch: "",
    contributions: [],
    cover: "assets/projects/fuente-de-neptuno/cover.webp",
    preview: "assets/projects/fuente-de-neptuno/preview.webm",
    links: { itch: "https://carlozzz.itch.io/fuente-de-neptuno", github: "" }
  }
];
