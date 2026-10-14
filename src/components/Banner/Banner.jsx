import './Banner.css';
import miFoto from '../../assets/miFoto.svg';

const Banner = () => {
  return (
    <section id="inicio" className="hero-section">
      <div className="hero-content">
        {/* PASO 5: etiqueta de disponibilidad */}
        <div className="status-badge">
          <span className="status-dot" />
          Disponible para nuevos proyectos
        </div>

        {/* La foto es un marcador: reemplázala por una foto real cuando la tengas. */}
        <div className="profile-photo-container">
          <img src={miFoto} alt="Foto de perfil: reemplazar con tu foto" className="profile-photo" />
        </div>

        <h1 className="hero-title">
          Darient Gabriel <br />
          <span className="text-cyan">Chanta Franco</span>
        </h1>
        <h2 className="hero-subtitle">Estudiante de Software e Inteligencia Artificial | React | Automatización</h2>

        <p className="hero-description">
          Soy estudiante de SENATI, interesado en el desarrollo de software, la inteligencia artificial
          y la automatización de procesos. He completado formación en programación, redes,
          bases de datos y ciberseguridad, con constancias de Cisco, Oracle Academy y Red Hat.
        </p>

        <div className="hero-buttons">
          <a href="#proyectos" className="btn btn-primary">Ver Proyectos</a>
          <a href="#certificados" className="btn btn-secondary">Mis certificados</a>
        </div>
      </div>
      <a href="#sobre-mi" className="scroll-indicator" aria-label="Ir a Sobre mí">↓</a>
    </section>
  );
};

export default Banner;
