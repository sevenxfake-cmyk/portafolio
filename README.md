# Guía Práctica #4 — Portafolio de Darient Gabriel Chanta Franco en React

Proyecto personalizado para **Darient Gabriel Chanta Franco** (correo **darientchanta@gmail.com**), creado a partir de la **Guía Práctica #4: Creación de Mi Portafolio en React usando Componentes** del seminario de Full Stack Developer Software (SENATI).

## Inicio rápido en VS Code

1. Descomprime esta carpeta, por ejemplo en `Desktop/portafolio-react-guia4`.
2. Abre esa carpeta en **Visual Studio Code** (Archivo → Abrir carpeta).
3. Abre **Terminal → Nueva terminal** y ejecuta:

```bash
npm install
npm run dev
```

4. Abre la dirección local que muestre Vite (normalmente `http://localhost:5173/`).

> Es necesario tener Node.js y npm instalados. **No** se incluye `node_modules` porque debe regenerarse con `npm install` en cada PC; `.gitignore` evita subirlo a GitHub.

## Estructura del proyecto

```text
portafolio-react-guia4/
├── .gitignore
├── README.md
├── index.html
├── package.json
├── public/
│   └── certificados/   → 13 PDF originales y vistas previas WebP
├── vite.config.js
└── src/
    ├── App.jsx
    ├── App.css
    ├── main.jsx
    ├── index.css
    ├── assets/
    │   ├── miFoto.svg
    │   └── proyecto-placeholder.svg
    └── components/
        ├── Navbar/        → Navbar.jsx + Navbar.css
        ├── Banner/        → Banner.jsx + Banner.css
        ├── Perfil/        → Perfil.jsx + Perfil.css
        ├── Habilidades/   → Habilidades.jsx + Habilidades.css
        ├── Certificados/  → Certificados.jsx + Certificados.css
        ├── Proyectos/     → Proyectos.jsx + Proyectos.css
        ├── Servicios/     → Servicios.jsx + Servicios.css (extra opcional)
        └── Contacto/     → Contacto.jsx + Contacto.css
```

## Correspondencia con el PDF

| Páginas | Contenido | Archivos |
|:--|:--|:--|
| 1–6 | Crear proyecto, Navbar, responsividad, primer montaje | `Navbar/*`, `App.jsx`, `index.css` |
| 7–13 | Banner, foto, botones, efecto circular | `Banner/*` |
| 14–20 | Perfil y educación, CSS Grid | `Perfil/*` |
| 21–27 | Habilidades con arreglo y `.map()` | `Habilidades/*` |
| 28–34 | Proyectos con tarjetas, tecnologías y enlaces | `Proyectos/*` |
| Extra | Certificados y constancias entregados por Darient | `Certificados/*`, `src/data/certificados.js`, `public/certificados` |
| 35–42 | Formulario controlado de contacto | `Contacto/*` |
| 43 | Entrega y evidencias | Apartado siguiente |

## Personalización realizada

- **Nombre:** Darient Gabriel Chanta Franco (`Navbar`, `Banner`, título de la página).
- **Correo:** `darientchanta@gmail.com`, visible y seleccionable en contacto.
- **Formación:** perfil actualizado con SENATI, Cisco, Oracle Academy y Red Hat.
- **Habilidades:** distingue cursos completados de tecnología en práctica, sin inventar niveles de dominio.
- **Certificados y constancias:** 12 cursos/talleres distintos y 13 documentos en PDF (Database Design tiene constancias de junio y octubre de 2024). La copia repetida de Database Programming with SQL no se duplicó.
- **Bootstrap 5:** instalado en `package.json` e importado como CSS en `src/main.jsx`. La nueva sección utiliza sus utilidades de Flex (`d-flex`, `flex-wrap`, `gap-2`) y conserva los CSS propios de la guía.

## Personalizaciones pendientes

- **Fotografía:** `src/assets/miFoto.svg` sigue siendo un marcador. Si tienes una foto tuya, guárdala por ejemplo como `miFoto.png` y cambia la ruta importada en `Banner.jsx`.
- **Proyectos:** los cuatro proyectos son ejemplos, no proyectos atribuidos a Darient. Edita `src/components/Proyectos/Proyectos.jsx` para agregar repositorios y capturas reales.
- **Formularios:** el envío sigue siendo una simulación en React con `useState`, exactamente el enfoque de la guía. No envía correo real.
- **Servicios:** sección adicional opcional, ya que la guía tiene su enlace pero no proporciona sus archivos.

## Sobre los documentos

Los archivos enviados por el estudiante se incluyen íntegros en `public/certificados`. No se modificó el contenido de los PDF. Los certificados de Cisco acreditan finalización de cursos de Networking Academy; el archivo que menciona PCAP es **Programming Essentials in Python**, no acreditación del examen profesional PCAP. El documento RH104 de Red Hat es una **constancia de asistencia**, no una certificación técnica de examen.

## Comandos útiles

```bash
npm run dev      # Arrancar en desarrollo
npm run build    # Crear carpeta dist/ para producción
npm run preview  # Previsualizar el build
```

## Entrega del laboratorio (página 43 del PDF)

La guía pide enviar la actividad **por correo** con asunto:

`LABORATORIO #4 – FULLSTACK DEVELOPER SOFTWARE– SEMINARIO IA 501`

Además, solicita entregar **un PDF con capturas del código y la ejecución**. Este ZIP contiene solamente el proyecto de React, no las capturas de tu PC.
