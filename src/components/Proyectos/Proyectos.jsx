import './Proyectos.css';
import imagenEjemplo from '../../assets/proyecto-placeholder.svg';

// PASO 14: Proyectos de demostración. Sustituye estos datos con tus proyectos reales.
// Si tienes URLs públicas para tus repositorios/demos, colócalas en linkCodigo/linkDemo.
const proyectosData = [
  {
    id: 1,
    imagen: imagenEjemplo,
    titulo: 'Proyecto de ejemplo: Aplicación web',
    descripcion: 'Ejemplo de aplicación web con interfaz responsive y componentes reutilizables.',
    tecnologias: ['HTML5', 'CSS3', 'JavaScript', 'React'],
    linkDemo: null,
    linkCodigo: null,
  },
  {
    id: 2,
    imagen: imagenEjemplo,
    titulo: 'Proyecto de ejemplo: Carrito de compras',
    descripcion: 'Ejemplo de comercio electrónico con productos, categorías y un carrito de compras.',
    tecnologias: ['React', 'Laravel', 'PostgreSQL'],
    linkDemo: null,
    linkCodigo: null,
  },
  {
    id: 3,
    imagen: imagenEjemplo,
    titulo: 'Proyecto de ejemplo: Base de datos',
    descripcion: 'Ejemplo de sistema que permite guardar, consultar y actualizar información.',
    tecnologias: ['SQL', 'Node.js', 'JavaScript'],
    linkDemo: null,
    linkCodigo: null,
  },
  {
    id: 4,
    imagen: imagenEjemplo,
    titulo: 'Proyecto de ejemplo: Dashboard interactivo',
    descripcion: 'Ejemplo de panel que resume indicadores y presenta gráficos para analizar datos.',
    tecnologias: ['Power BI', 'DAX', 'Power Query', 'Modelado de datos'],
    linkDemo: null,
    linkCodigo: null,
  },
];

const ExternalLinkIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const Proyectos = () => {
  return (
    <section id="proyectos" className="proyectos-section">
      <div className="proyectos-container">
        <h2 className="section-title text-center">Proyectos Destacados</h2>
        <div className="proyectos-grid">
          {proyectosData.map((proyecto) => (
            <article key={proyecto.id} className="proyecto-card">
              <div className="proyecto-imagen">
                <img src={proyecto.imagen} alt={`Vista de ${proyecto.titulo}`} loading="lazy" />
              </div>
              <div className="proyecto-contenido">
                <h3 className="proyecto-titulo">{proyecto.titulo}</h3>
                <p className="proyecto-desc">{proyecto.descripcion}</p>
                <div className="proyecto-tags">
                  {proyecto.tecnologias.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="proyecto-links">
                  {proyecto.linkDemo ? (
                    <a href={proyecto.linkDemo} target="_blank" rel="noopener noreferrer" className="btn-proyecto btn-demo">
                      <ExternalLinkIcon /> Demo en Vivo
                    </a>
                  ) : (
                    <span className="btn-proyecto btn-demo btn-inactivo"><ExternalLinkIcon /> Demo pendiente</span>
                  )}
                  {proyecto.linkCodigo ? (
                    <a href={proyecto.linkCodigo} target="_blank" rel="noopener noreferrer" className="btn-proyecto btn-codigo">
                      <GithubIcon /> Ver Código
                    </a>
                  ) : (
                    <span className="btn-proyecto btn-codigo btn-inactivo"><GithubIcon /> Código pendiente</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proyectos;
