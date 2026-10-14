import './Perfil.css';

// PASO 8: Sección "Sobre mí" con tarjetas de perfil y educación.
const Perfil = () => {
  return (
    <section id="sobre-mi" className="sobre-mi-section">
      <div className="sobre-mi-container">
        <h2 className="section-title">Sobre mí</h2>
        <div className="sobre-mi-grid">
          {/* Tarjeta 1: Perfil profesional */}
          <div className="card">
            <div className="card-header">
              <div className="icon-box" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <h3>Perfil profesional</h3>
            </div>
            <p className="card-text">
              Soy Darient Gabriel Chanta Franco, estudiante de software en SENATI,
              con interés en la inteligencia artificial, la automatización y el desarrollo de
              aplicaciones para resolver problemas reales.
              <br /><br />
              Mi formación complementaria incluye cursos finalizados de Cisco Networking Academy
              en redes, ciberseguridad, emprendimiento y Python, además de cursos de Oracle
              Academy sobre Java, inteligencia artificial y bases de datos.
              <br /><br />
              También cuento con una constancia de asistencia a Linux Fundamentals (RH104) de
              Red Hat. Puedes consultar los documentos originales en la sección de certificados.
            </p>
          </div>

          {/* Tarjeta 2: Educación, como la línea de tiempo del PDF. */}
          <div className="card">
            <div className="card-header">
              <div className="icon-box" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <h3>Educación</h3>
            </div>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-header">
                  <h4>Desarrollo de Software</h4>
                  <span className="badge badge-outline">En curso</span>
                </div>
                <span className="timeline-date">SENATI · Estudios en curso</span>
              </div>
              <div className="timeline-item">
                <div className="timeline-header">
                  <h4>React y JavaScript</h4>
                  <span className="badge badge-outline">En aprendizaje</span>
                </div>
                <span className="timeline-date">Proyectos prácticos</span>
              </div>
              <div className="timeline-item">
                <div className="timeline-header">
                  <h4>Git y GitHub</h4>
                  <span className="badge badge-outline">En aprendizaje</span>
                </div>
                <span className="timeline-date">Control de versiones</span>
              </div>
              <div className="timeline-item">
                <div className="timeline-header">
                  <h4>Formación complementaria</h4>
                  <span className="badge badge-outline">Documentada</span>
                </div>
                <span className="timeline-date">Cisco · Oracle Academy · Red Hat</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Perfil;
