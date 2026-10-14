
import './Banner.css';
import miFoto from '../../assets/rostrodar.png';

const Banner = () => {
  return (
    <section id="inicio" className="hero-section">
      <div className="hero-content">

        {/* Estado de disponibilidad */}
        <div className="status-badge">
          <span className="status-dot"></span>
          Disponible para nuevos proyectos
        </div>

        {/* Mi fotografía personal */}
        <div className="profile-photo-container">
          <img
            src={miFoto}
            alt="Darient Gabriel Chanta Franco"
            className="profile-photo"
          />
        </div>

        {/* Nombre completo */}
        <h1 className="hero-title">
          Darient Gabriel <br />
          <span className="text-cyan">
            Chanta Franco
          </span>
        </h1>

        {/* Especialidad */}
        <h2 className="hero-subtitle">
          Estudiante de Software e Inteligencia Artificial
          | React | Automatización
        </h2>

        {/* Presentación profesional */}
        <p className="hero-description">
          Soy estudiante de SENATI, interesado en el
          desarrollo de software, la inteligencia artificial
          y la automatización de procesos.

          He completado formación en programación, redes,
          bases de datos y ciberseguridad, con constancias
          de Cisco, Oracle Academy y Red Hat.
        </p>

        {/* Botones */}
        <div className="hero-buttons">
          <a href="#proyectos" className="btn btn-primary">
            Ver Proyectos
          </a>

          <a href="#certificados" className="btn btn-secondary">
            Mis certificados
          </a>
        </div>

      </div>

      {/* Flecha para bajar */}
      <a
        href="#sobre-mi"
        className="scroll-indicator"
        aria-label="Ir a Sobre mí"
      >
        ↓
      </a>
    </section>
  );
};

export default Banner;
