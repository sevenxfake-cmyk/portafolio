import { useState } from 'react';
import { certificadosData } from '../../data/certificados';
import './Certificados.css';

const filtros = [
  { id: 'Todos', nombre: 'Todos' },
  { id: 'Cisco', nombre: 'Cisco' },
  { id: 'Oracle', nombre: 'Oracle Academy' },
  { id: 'Red Hat', nombre: 'Red Hat' },
];

// Los PDF de esta sección están en public/certificados y se sirven como recursos estáticos.
// BASE_URL permite que sigan abriéndose si publicas el portafolio bajo una subruta.
const urlCertificado = (ruta) => `${import.meta.env.BASE_URL}certificados/${ruta}`;

export default function Certificados() {
  const [filtro, setFiltro] = useState('Todos');
  const visibles = filtro === 'Todos'
    ? certificadosData
    : certificadosData.filter((cert) => cert.grupo === filtro);

  return (
    <section id="certificados" className="certificados-section">
      <div className="certificados-container">
        <div className="certificados-encabezado">
          <div>
            <p className="certificados-kicker">Formación complementaria</p>
            <h2 className="section-title">Certificados y constancias</h2>
            <p className="certificados-intro">
              Cursos completados, evaluaciones aprobadas y constancias de asistencia
              en Cisco Networking Academy, Oracle Academy y Red Hat.
              Abre los PDF originales para consultar cada documento.
            </p>
          </div>
          <div className="certificados-resumen" aria-label="Cantidad de cursos y documentos">
            <strong>12</strong>
            <span>cursos y talleres</span>
            <small>13 documentos originales</small>
          </div>
        </div>

        {/* Uso real de las utilidades flex de Bootstrap 5. */}
        <div className="d-flex flex-wrap gap-2 certificados-filtros" role="group" aria-label="Filtrar por emisor">
          {filtros.map((opcion) => (
            <button
              type="button"
              key={opcion.id}
              aria-pressed={filtro === opcion.id}
              className={`certificados-filtro ${filtro === opcion.id ? 'activo' : ''}`}
              onClick={() => setFiltro(opcion.id)}
            >
              {opcion.nombre}
              <span>{opcion.id === 'Todos'
                ? certificadosData.length
                : certificadosData.filter((item) => item.grupo === opcion.id).length}</span>
            </button>
          ))}
        </div>

        <div className="certificados-grid">
          {visibles.map((cert) => (
            <article className="certificado-card" key={cert.id}>
              <a href={urlCertificado(cert.archivo)} target="_blank" rel="noopener noreferrer"
                 className="certificado-imagen" aria-label={`Abrir PDF: ${cert.titulo}`}>
                <img src={urlCertificado(cert.vista)} alt={`Vista previa del documento ${cert.titulo}`}
                     loading="lazy" />
                <span className="certificado-ver">Ver documento ↗</span>
              </a>
              <div className="certificado-contenido">
                <span className="certificado-emisor">{cert.emisor}</span>
                <h3>{cert.titulo}</h3>
                <p className="certificado-descripcion">{cert.descripcion}</p>
                <div className="certificado-meta">
                  <span>{cert.fecha}</span>
                  <span>{cert.tipo}</span>
                </div>
                <div className="certificado-acciones">
                  <a href={urlCertificado(cert.archivo)} target="_blank" rel="noopener noreferrer"
                     className="certificado-link">Abrir PDF ↗</a>
                  {cert.adicionales.map((otro) => (
                    <a key={otro.archivo} href={urlCertificado(otro.archivo)}
                       target="_blank" rel="noopener noreferrer" className="certificado-link secundario">
                      {otro.etiqueta} ↗
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
