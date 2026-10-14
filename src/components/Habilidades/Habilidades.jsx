import './Habilidades.css';

// PASO 11: separar datos de la presentación usando un arreglo y .map().
// Se distingue formación completada de habilidades que continúan en práctica.
const skillsData = [
  { id: 1, titulo: "Fundamentos de ciberseguridad", descripcion: "Curso Cybersecurity Essentials completado en Cisco Networking Academy.", nivel: "Formación completada", botonTexto: "CURSO REALIZADO", estado: "completado" },
  { id: 2, titulo: "Redes y conectividad", descripcion: "Cursos Networking Essentials y Get Connected de Cisco Networking Academy.", nivel: "Formación completada", botonTexto: "CURSO REALIZADO", estado: "completado" },
  { id: 3, titulo: "Python", descripcion: "Curso Partner: PCAP - Programming Essentials in Python, de Cisco Networking Academy.", nivel: "Formación completada", botonTexto: "CURSO REALIZADO", estado: "completado" },
  { id: 4, titulo: "SQL y modelado de datos", descripcion: "Cursos Database Programming with SQL y Database Design de Oracle Academy.", nivel: "Formación completada", botonTexto: "CURSO REALIZADO", estado: "completado" },
  { id: 5, titulo: "Java", descripcion: "Cursos Java Foundations y talleres de Greenfoot y Alice de Oracle Academy.", nivel: "Formación completada", botonTexto: "CURSO REALIZADO", estado: "completado" },
  { id: 6, titulo: "IA y Machine Learning", descripcion: "Curso Artificial Intelligence with Machine Learning in Java de Oracle Academy.", nivel: "Formación completada", botonTexto: "CURSO REALIZADO", estado: "completado" },
  { id: 7, titulo: "Linux", descripcion: "Asistencia al curso Getting Started with Linux Fundamentals (RH104) de Red Hat.", nivel: "Asistencia acreditada", botonTexto: "ASISTENCIA", estado: "completado" },
  { id: 8, titulo: "React y JavaScript", descripcion: "Desarrollo de interfaces web con React, HTML, CSS y JavaScript.", nivel: "Aprendizaje activo", botonTexto: "EN PRÁCTICA", estado: "proceso" },
  { id: 9, titulo: "Git y GitHub", descripcion: "Versionamiento, control de cambios y repositorios de proyectos.", nivel: "En práctica", botonTexto: "EN PRÁCTICA", estado: "proceso" },
  { id: 10, titulo: "Automatización", descripcion: "Interés en crear soluciones de software para optimizar procesos.", nivel: "Área de interés", botonTexto: "EN PRÁCTICA", estado: "proceso" },
];

const Habilidades = () => {
  return (
    <section id="tech-stack" className="habilidades-section" aria-label="Habilidades y tecnologías">
      <div className="habilidades-container">
        <h2 className="section-title">Tech Stack y Habilidades</h2>
        <div className="habilidades-grid">
          {skillsData.map((skill) => (
            <article key={skill.id} className="skill-card">
              <div className="skill-header">
                <div className="skill-icon" aria-hidden="true">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <line x1="3" y1="9" x2="21" y2="9" />
                    <line x1="9" y1="21" x2="9" y2="9" />
                  </svg>
                </div>
                <span className={`skill-badge ${skill.estado === 'proceso' ? 'badge-yellow' : 'badge-green'}`}>
                  {skill.botonTexto}
                </span>
              </div>
              <div className="skill-body">
                <h3 className="skill-title">{skill.titulo}</h3>
                <p className="skill-desc">{skill.descripcion}</p>
                <span className="skill-level">{skill.nivel}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Habilidades;
