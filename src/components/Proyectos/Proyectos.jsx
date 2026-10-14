
import './Proyectos.css';
import imagenEjemplo from '../../assets/ecotrack.png';

// Información de mis proyectos
const proyectosData = [
  {
    id: 1,
    imagen: imagenEjemplo,
    titulo: 'EcoTrack2 - Gestión de Productos Reciclables',
    descripcion:
      'Aplicación desarrollada para administrar, registrar y llevar el conteo de productos y materiales reciclables. Permite organizar la información de los productos y controlar las cantidades registradas, facilitando la gestión de materiales destinados al reciclaje.',
    tecnologias: [
      'Gestión de Reciclaje',
      'Registro de Productos',
      'Conteo de Materiales',
      'Administración'
    ],
    linkDemo: null,
    linkCodigo:
      'https://github.com/jeremyylasaca40-a11y/EcoTrack2'
  }
];

const Proyectos = () => {
  return (
    <section id="proyectos" className="proyectos-section">
      <div className="proyectos-container">

        <h2 className="section-title text-center">
          Proyectos Destacados
        </h2>

        <div className="proyectos-grid">
          {proyectosData.map((proyecto) => (
            <article
              key={proyecto.id}
              className="proyecto-card"
            >

              {/* Imagen del proyecto */}
              <div className="proyecto-imagen">
                <img
                  src={proyecto.imagen}
                  alt={proyecto.titulo}
                  loading="lazy"
                />
              </div>

              {/* Información del proyecto */}
              <div className="proyecto-contenido">

                <h3 className="proyecto-titulo">
                  {proyecto.titulo}
                </h3>

                <p className="proyecto-desc">
                  {proyecto.descripcion}
                </p>

                {/* Etiquetas */}
                <div className="proyecto-tags">
                  {proyecto.tecnologias.map((tech) => (
                    <span
                      key={tech}
                      className="tech-tag"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Enlaces */}
                <div className="proyecto-links">

                  {proyecto.linkDemo ? (
                    <a
                      href={proyecto.linkDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-proyecto btn-demo"
                    >
                      Ver Demo
                    </a>
                  ) : (
                    <span className="btn-proyecto btn-demo btn-inactivo">
                      Demo no disponible
                    </span>
                  )}

                  <a
                    href={proyecto.linkCodigo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-proyecto btn-codigo"
                  >
                    Ver Código en GitHub ↗
                  </a>

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
