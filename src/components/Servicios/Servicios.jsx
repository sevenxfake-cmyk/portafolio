import './Servicios.css';

// EXTRA OPCIONAL: la guía menciona el enlace Servicios en el Navbar
// pero no desarrolla esta sección. La agregamos para evitar un enlace roto.
const serviciosData = [
  { id: 1, titulo: 'Desarrollo web', descripcion: 'Sitios e interfaces web adaptables.' },
  { id: 2, titulo: 'Automatización', descripcion: 'Ideas para simplificar tareas repetitivas.' },
  { id: 3, titulo: 'Análisis de datos', descripcion: 'Visualización de información y reportes.' },
];

const Servicios = () => (
  <section id="servicios" className="servicios-section">
    <div className="servicios-container">
      <h2 className="section-title">Áreas de interés</h2>
      <p className="servicios-intro">Esta sección es adicional a la guía. Personaliza los temas que te interesan.</p>
      <div className="servicios-grid">
        {serviciosData.map((servicio) => (
          <article className="servicio-card" key={servicio.id}>
            <h3>{servicio.titulo}</h3>
            <p>{servicio.descripcion}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Servicios;
