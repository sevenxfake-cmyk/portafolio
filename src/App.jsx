import { useState } from 'react';
import foto from './assets/rostrodar.png';
import { certificadosData } from './data/certificados.js';
import './App.css';

const projects = [
  {
    number: '01',
    title: 'NovaSalud',
    label: 'Sistema web · Full stack',
    status: 'Aplicación desplegada',
    tone: 'nova',
    description: 'Gestión de medicamentos, existencias y ventas para una botica. Los registros se guardan en Turso y pueden consultarse desde diferentes dispositivos.',
    result: 'Inventario, alertas de stock y registro de ventas en un mismo entorno.',
    stack: ['React', 'Vite', 'Node.js', 'Turso', 'Vercel'],
    demo: 'https://novasalud.vercel.app',
    repo: 'https://github.com/sevenxfake-cmyk/NovaSalud'
  },
  {
    number: '02',
    title: 'Inventario Inteligente',
    label: 'Producto digital · En desarrollo',
    status: 'Prototipo público',
    tone: 'smart',
    description: 'Una plataforma para organizar empresas, productos y almacenes, con un editor visual de andamios, niveles y ubicaciones adaptable a escritorio y móvil.',
    result: 'Prototipo navegable con datos de ejemplo; aún sin sincronización entre usuarios.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    demo: 'https://inventario-inteligente-snowy.vercel.app',
    repo: 'https://github.com/sevenxfake-cmyk/InventarioInteligente'
  },
  {
    number: '03',
    title: 'Inventario Hugo',
    label: 'Demo de gestión · Catálogo',
    status: 'Demo pública',
    tone: 'hugo',
    description: 'Demostración de inventario con 2.278 referencias de catálogo, consulta por almacenes, históricos ficticios y análisis de datos para explorar su funcionamiento.',
    result: 'Las modificaciones de esta demo se conservan solo en el navegador.',
    stack: ['JavaScript', 'HTML / CSS', 'Vercel'],
    demo: 'https://inventario-hugo-demo-vercel.vercel.app',
    repo: 'https://github.com/sevenxfake-cmyk/Inventario_Hugo-demo-vercel'
  },
  {
    number: '04',
    title: 'Miga & Miel',
    label: 'Sitio web · Proyecto en equipo',
    status: 'Proyecto colaborativo',
    tone: 'miga',
    description: 'Experiencia web para una pastelería artesanal: presentación de la marca, catálogo de dulces, pedidos por encargo e información de contacto.',
    result: 'Un proyecto centrado en diseño visual, navegación y trabajo colaborativo.',
    stack: ['React', 'Vite', 'Figma', 'GitHub', 'Vercel'],
    demo: 'https://miga-miel-amber.vercel.app',
    repo: 'https://github.com/dalthashark/Miga-miel'
  }
];

const skillGroups = [
  {
    number: '01',
    title: 'Desarrollo web',
    description: 'Interfaces y aplicaciones que funcionan en distintos dispositivos.',
    skills: ['React', 'JavaScript', 'HTML & CSS', 'Next.js', 'Tailwind CSS']
  },
  {
    number: '02',
    title: 'Datos y lógica',
    description: 'Organización de información, persistencia y procesos de negocio.',
    skills: ['SQL', 'Turso / libSQL', 'Node.js', 'APIs REST', 'Python']
  },
  {
    number: '03',
    title: 'Herramientas',
    description: 'Versionado, publicación y aprendizaje continuo.',
    skills: ['Git & GitHub', 'Vercel', 'Java', 'Linux', 'IA / ML']
  }
];

function Icon({ name, size = 18 }) {
  const props = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true };
  if (name === 'arrow') return <svg {...props}><path d="M5 12h14M12 5l7 7-7 7" /></svg>;
  if (name === 'external') return <svg {...props}><path d="M7 17 17 7M8 7h9v9" /><path d="M17 13v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h4" /></svg>;
  if (name === 'github') return <svg {...props}><path d="M9 19c-4.3 1.5-4.3-2.5-6-3m12 6v-3.4a3 3 0 0 0-.84-2.3c2.8-.3 5.84-1.37 5.84-6.3a4.9 4.9 0 0 0-1.33-3.4 4.6 4.6 0 0 0-.08-3.36S17.5 2.9 15 4.8a11.1 11.1 0 0 0-6 0C6.5 2.9 5.41 3.24 5.41 3.24a4.6 4.6 0 0 0-.08 3.36A4.9 4.9 0 0 0 4 10c0 4.9 3 6 5.84 6.3A3 3 0 0 0 9 18.6V22" /></svg>;
  if (name === 'mail') return <svg {...props}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>;
  if (name === 'menu') return <svg {...props}><path d="M4 7h16M4 12h16M4 17h16" /></svg>;
  if (name === 'close') return <svg {...props}><path d="M5 5l14 14M19 5 5 19" /></svg>;
  if (name === 'file') return <svg {...props}><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" /><path d="M13 2v7h7M8 15h8M8 18h5" /></svg>;
  if (name === 'download') return <svg {...props}><path d="M12 3v12m-5-5 5 5 5-5M5 17v3h14v-3" /></svg>;
  return <svg {...props}><path d="M5 12h14" /></svg>;
}

function Header() {
  const [opened, setOpened] = useState(false);
  const links = [
    ['#proyectos', 'Proyectos'],
    ['#sobre-mi', 'Sobre mí'],
    ['#habilidades', 'Habilidades'],
    ['#certificados', 'Formación']
  ];

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="wordmark" href="#inicio" onClick={() => setOpened(false)} aria-label="Darient Chanta, volver al inicio">
          <span className="brand-symbol">dc<span>.</span></span>
          <span className="brand-caption">Darient Chanta <small>Software developer</small></span>
        </a>
        <nav className={'main-nav' + (opened ? ' main-nav--open' : '')} aria-label="Navegación principal">
          {links.map(([href, text]) => <a href={href} key={href} onClick={() => setOpened(false)}>{text}</a>)}
          <a className="nav-contact" href="#contacto" onClick={() => setOpened(false)}>Hablemos <Icon name="arrow" size={15} /></a>
        </nav>
        <button className="menu-toggle" type="button" aria-label={opened ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={opened} onClick={() => setOpened(!opened)}>
          <Icon name={opened ? 'close' : 'menu'} size={24} />
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="hero section-pad">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> PORTAFOLIO / DESARROLLO DE SOFTWARE</div>
          <h1>Ideas que se convierten en <em>software útil.</em></h1>
          <p className="hero-lead">Soy <strong>Darient Gabriel Chanta Franco</strong>, estudiante de Ingeniería de Software con Inteligencia Artificial en SENATI. Me interesa crear aplicaciones que resuelvan problemas reales de forma sencilla.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#proyectos">Explorar proyectos <Icon name="arrow" /></a>
            <a className="button button-outline" href="#contacto">Contactarme <Icon name="external" size={17} /></a>
          </div>
          <div className="hero-meta">
            <div><strong>04</strong><span>Proyectos destacados</span></div>
            <div><strong>12</strong><span>Cursos y talleres</span></div>
            <div><strong>2026</strong><span>Portafolio actualizado</span></div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="portrait-frame">
            <div className="portrait-label"><span className="label-dot" /> APRENDER · CREAR · MEJORAR</div>
            <img className="portrait-img" src={foto} alt="Retrato de Darient Chanta" />
            <div className="portrait-bottom">
              <div><span className="mini-overline">DESDE PERÚ</span><strong>Darient Chanta</strong></div>
              <span className="portrait-cross">✳</span>
            </div>
          </div>
          <div className="visual-note"><span className="note-icon">↗</span><span>Desarrollo web<br /><strong>y soluciones digitales</strong></span></div>
        </div>
      </div>
      <div className="container hero-bottom"><span>DISEÑO + TECNOLOGÍA + SOLUCIONES</span><a href="#proyectos" aria-label="Ir a proyectos">DESLIZA PARA EXPLORAR <span>↓</span></a></div>
    </section>
  );
}

function ProjectArt({ tone }) {
  return (
    <div className={'project-art project-art--' + tone} aria-hidden="true">
      {tone === 'nova' && (
        <div className="screen screen--nova">
          <div className="screen-sidebar"><span className="screen-logo">✚ NOVA</span><i /><i /><i /><i /></div>
          <div className="screen-main">
            <div className="screen-top"><span>Panel principal</span><span className="screen-circle" /></div>
            <div className="screen-stat-grid"><div><small>Productos</small><strong>248</strong></div><div><small>Ventas</small><strong>86</strong></div><div><small>Alertas</small><strong>04</strong></div></div>
            <div className="screen-chart"><div className="chart-bars"><b /><b /><b /><b /><b /><b /><b /></div><span className="chart-line" /></div>
          </div>
        </div>
      )}
      {tone === 'smart' && (
        <div className="warehouse-card">
          <div className="warehouse-head"><span>Plano de almacén</span><span>● ● ●</span></div>
          <div className="warehouse-space">
            <div className="warehouse-rail"><span>A1</span><span>A2</span><span>A3</span></div>
            <div className="warehouse-shelves">
              {[0, 1, 2].map(n => <div key={n} className="shelf-row"><span /><span /><span /><span /><span /></div>)}
            </div>
          </div>
          <div className="warehouse-foot"><span>Almacén principal</span><span>3 niveles</span></div>
        </div>
      )}
      {tone === 'hugo' && (
        <div className="inventory-card">
          <div className="inventory-head"><span>INVENTARIO / CATÁLOGO</span><strong>2.278</strong></div>
          <div className="inventory-table">
            {['Limpieza y hogar', 'Accesorios', 'Repuestos', 'Herramientas'].map((name, i) => <div className="inventory-row" key={name}><span className="inventory-number">0{i + 1}</span><span>{name}</span><i /></div>)}
          </div>
          <div className="inventory-bottom"><span>RESUMEN</span><span>● Histórico mensual</span></div>
        </div>
      )}
      {tone === 'miga' && (
        <div className="miga-preview">
          <div className="miga-brand">miga <span>&</span> miel</div>
          <div className="miga-sub">PASTELERÍA ARTESANAL</div>
          <div className="miga-product"><span className="miga-pastry"><span /></span></div>
          <div className="miga-bottom">Hecho con cariño, para compartir.</div>
        </div>
      )}
    </div>
  );
}

function Projects() {
  return (
    <section id="proyectos" className="projects-section section-pad">
      <div className="container">
        <div className="section-topline"><span className="section-index">01 / TRABAJO SELECCIONADO</span><span className="section-side-note">PROYECTOS REALES, EN DISTINTAS ETAPAS</span></div>
        <div className="section-heading-row"><div><h2>Proyectos que <span>hablan por mí.</span></h2><p>Aplicaciones desplegadas y trabajos prácticos donde combino interfaces, organización de datos y lógica de negocio.</p></div><div className="count-stamp">04 <small>DESTACADOS</small></div></div>
        <div className="projects-grid">
          {projects.map(project => (
            <article className="project-card" key={project.number}>
              <ProjectArt tone={project.tone} />
              <div className="project-body">
                <div className="project-kicker"><span>{project.number} / {project.label}</span><span className="project-status"><i /> {project.status}</span></div>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <p className="project-result">{project.result}</p>
                <div className="project-tech">{project.stack.map(item => <span key={item}>{item}</span>)}</div>
                <div className="project-links">
                  <a className="project-demo" href={project.demo} target="_blank" rel="noopener noreferrer">Ver proyecto <Icon name="external" size={16} /></a>
                  <a className="project-source" href={project.repo} target="_blank" rel="noopener noreferrer"><Icon name="github" size={17} /> Código fuente</a>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="extra-project"><div><span className="extra-label">OTRO PROYECTO ACADÉMICO</span><strong>EcoTrack2</strong><p>Registro y conteo de materiales reciclables.</p></div><a href="https://github.com/jeremyylasaca40-a11y/EcoTrack2" target="_blank" rel="noopener noreferrer">Ver repositorio <Icon name="external" size={17} /></a></div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre-mi" className="about-section section-pad">
      <div className="container about-grid">
        <div className="about-main">
          <span className="section-index">02 / UN POCO SOBRE MÍ</span>
          <h2>Me gusta entender el problema <em>antes de escribir código.</em></h2>
          <p>Mi enfoque está en llevar una necesidad cotidiana a una herramienta que funcione. He trabajado en proyectos de inventarios, aplicaciones web y experiencias digitales durante mi formación en SENATI.</p>
          <p>También estudio bases de datos, redes, ciberseguridad e inteligencia artificial. Sigo aprendiendo y mejorando cada proyecto a medida que incorporo nuevas tecnologías.</p>
          <a className="text-link" href="#certificados">Ver mi formación <Icon name="arrow" size={17} /></a>
        </div>
        <div className="about-aside">
          <div className="aside-title">FORMACIÓN Y ENFOQUE <span>↗</span></div>
          <div className="timeline-item"><span>ACTUALMENTE</span><strong>Ingeniería de Software con IA</strong><small>SENATI · En formación</small></div>
          <div className="timeline-item"><span>PRÁCTICA</span><strong>Aplicaciones web y sistemas</strong><small>Frontend, integración de datos y despliegue</small></div>
          <div className="timeline-item"><span>FORMACIÓN COMPLEMENTARIA</span><strong>Cisco · Oracle Academy · Red Hat</strong><small>Cursos y constancias consultables</small></div>
          <div className="about-signature">DC <span>— seguir construyendo.</span></div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="habilidades" className="skills-section section-pad">
      <div className="container">
        <div className="section-topline"><span className="section-index">03 / HERRAMIENTAS Y TECNOLOGÍAS</span><span className="section-side-note">APRENDIZAJE CONTINUO</span></div>
        <div className="section-heading-row skills-heading"><div><h2>Con lo que <span>construyo.</span></h2><p>Tecnologías usadas en proyectos y otras que sigo fortaleciendo durante mi formación.</p></div></div>
        <div className="skills-grid">
          {skillGroups.map(group => <article className="skill-panel" key={group.number}><div className="skill-panel-top"><span>{group.number}</span><span className="skill-panel-mark">✳</span></div><h3>{group.title}</h3><p>{group.description}</p><div className="skill-tags">{group.skills.map(skill => <span key={skill}>{skill}</span>)}</div></article>)}
        </div>
        <p className="skills-disclaimer">Las tecnologías indicadas reflejan proyectos, cursos y práctica; no implican certificaciones profesionales de examen.</p>
      </div>
    </section>
  );
}

function Certificates() {
  const [group, setGroup] = useState('Todos');
  const [expanded, setExpanded] = useState(false);
  const filters = ['Todos', 'Cisco', 'Oracle', 'Red Hat'];
  const filtered = certificadosData.filter(item => group === 'Todos' || item.grupo === group);
  const visible = expanded || group !== 'Todos' ? filtered : filtered.slice(0, 6);

  return (
    <section id="certificados" className="certificates-section section-pad">
      <div className="container">
        <div className="section-topline"><span className="section-index">04 / FORMACIÓN COMPLEMENTARIA</span><span className="section-side-note">DOCUMENTOS ORIGINALES DISPONIBLES</span></div>
        <div className="section-heading-row"><div><h2>Aprender también es <span>parte del trabajo.</span></h2><p>Una selección verificable de cursos, talleres y constancias que acompañan mi formación.</p></div><div className="count-stamp">12 <small>CURSOS Y TALLERES</small></div></div>
        <div className="cert-controls" role="group" aria-label="Filtrar certificados">
          {filters.map(item => <button type="button" key={item} className={'filter-button' + (group === item ? ' is-active' : '')} onClick={() => { setGroup(item); setExpanded(false); }} aria-pressed={group === item}>{item}</button>)}
        </div>
        <div className="cert-grid">
          {visible.map(cert => (
            <a className="certificate-card" key={cert.id} href={'/certificados/' + cert.archivo} target="_blank" rel="noopener noreferrer" aria-label={'Abrir documento PDF: ' + cert.titulo}>
              <div className="cert-preview"><img src={'/certificados/' + cert.vista} alt={'Vista previa del documento ' + cert.titulo} loading="lazy" /><span className="cert-pdf"><Icon name="file" size={15} /> PDF</span></div>
              <div className="cert-details"><span className="cert-org">{cert.emisor}</span><h3>{cert.titulo}</h3><div className="cert-bottom"><span>{cert.tipo} · {cert.fecha}</span><Icon name="external" size={17} /></div></div>
            </a>
          ))}
        </div>
        {group === 'Todos' && filtered.length > 6 && <div className="cert-more"><button type="button" className="button button-outline" onClick={() => setExpanded(!expanded)}>{expanded ? 'Ver menos documentos' : 'Ver los 12 documentos'} <Icon name="arrow" /></button></div>}
        <p className="cert-note">Los documentos corresponden a cursos, talleres y asistencia. No se presentan como credenciales de certificación profesional obtenidas mediante examen.</p>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contacto" className="contact-section">
      <div className="container">
        <div className="contact-panel">
          <div className="contact-top"><span>05 / CONTACTO</span><span>¿TIENES UNA IDEA?</span></div>
          <h2>Hagamos algo<br /><em>que valga la pena.</em></h2>
          <p>Me interesa participar en proyectos de software, seguir aprendiendo y colaborar en soluciones que tengan utilidad real.</p>
          <div className="contact-links"><a className="button button-light" href="mailto:darientchanta@gmail.com"><Icon name="mail" /> Escribirme por correo <Icon name="arrow" /></a><a className="button button-transparent" href="https://github.com/sevenxfake-cmyk" target="_blank" rel="noopener noreferrer"><Icon name="github" /> Mi GitHub <Icon name="external" size={16} /></a></div>
          <div className="contact-watermark" aria-hidden="true">DC.</div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return <footer className="site-footer"><div className="container footer-inner"><span><strong>dc.</strong> Darient Chanta</span><span>Diseñado y desarrollado con React · {new Date().getFullYear()}</span><a href="#inicio">Volver arriba ↑</a></div></footer>;
}

function App() {
  return <><Header /><main><Hero /><Projects /><About /><Skills /><Certificates /><Contact /></main><Footer /></>;
}

export default App;
