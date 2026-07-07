import Image from "next/image";

/* ============================================================================
   👉 EDITA AQUÍ TUS DATOS
   ========================================================================== */
const me = {
  name: "Juan Ciprian",
  role: "Desarrollador Web & Móvil", // 👉 ajusta tu título
  location: "Colombia",
  email: "juan.ciprian@cun.edu.co",
  phone: "+57 300 814 8295",
  phoneHref: "tel:+573008148295",
  github: "https://github.com/Juan-Hernandez-11",
};

const skills = [
  "JavaScript", "TypeScript", "React", "Next.js", "React Native",
  "Node.js", "Tailwind CSS", "HTML / CSS", "REST APIs", "Git", "SQL",
];

/* 👉 Cada proyecto. Cambia rol y tecnologías según lo que hiciste tú. */
const projects = [
  {
    name: "MD Science & Technology",
    kind: "Landing corporativa",
    image: "/images/shot-landing.png",
    url: "https://mdscitec.com",
    role:
      "Diseño y desarrollo de la landing corporativa: identidad visual, secciones de producto y precios, y puesta en producción. Sitio rápido y responsive.",
    tags: ["Next.js", "React", "Tailwind", "Responsive"],
    restricted: false,
  },
  {
    name: "Aula Unida",
    kind: "Plataforma educativa",
    image: "/images/shot-aula.png",
    url: "https://aula-unida.vercel.app/",
    role:
      "Plataforma que conecta estudiantes, docentes y administradores en un mismo ecosistema para la gestión académica. Desarrollo de la interfaz y despliegue en producción.",
    tags: ["Next.js", "React", "TypeScript", "Vercel"],
    restricted: false,
  },
  {
    name: "MD Inventory",
    kind: "Sistema de gestión de inventario",
    image: "/images/shot-inventory.png",
    url: "https://mit.mdscitec.com",
    role:
      "Sistema para el control de stock, productos y usuarios de una organización. Se muestra el acceso; el interior es de uso restringido.",
    tags: ["React", "TypeScript", "Node.js", "API REST"],
    restricted: true,
  },
  {
    name: "SIC — Comunicación",
    kind: "App de comunicación (web y móvil)",
    image: null, // acceso restringido, sin captura pública
    url: "https://sic.mdscitec.com",
    role:
      "Aplicación de comunicación interna disponible en web y en móvil. Por seguridad solo es visible la pantalla de acceso.",
    tags: ["React", "React Native", "Node.js", "Web + Móvil"],
    restricted: true,
  },
];

/* -------------------------------------------------------------------------- */

const IconArrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><path d="M7 17 17 7M7 7h10v10" /></svg>
);
const IconLock = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8"><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>
);
const IconMail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
);
const IconPhone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.4 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9z" /></svg>
);

export default function Portfolio() {
  return (
    <>
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-base/70 backdrop-blur">
        <div className="container-content flex items-center justify-between py-4">
          <a href="#top" className="font-mono text-sm font-bold text-white">
            {me.name.split(" ").map((w) => w[0]).join("")}<span className="text-emerald">.</span>
          </a>
          <nav className="hidden gap-7 text-sm text-fog sm:flex">
            <a href="#proyectos" className="hover:text-mist">Proyectos</a>
            <a href="#sobre-mi" className="hover:text-mist">Sobre mí</a>
            <a href="#contacto" className="hover:text-mist">Contacto</a>
          </nav>
          <a href="#contacto" className="btn-primary px-4 py-2 text-xs">Contáctame</a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="container-content pt-20 pb-16 md:pt-28 md:pb-24">
        <p className="eyebrow">Portafolio</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-[1.05] text-white md:text-6xl">
          Construyo aplicaciones <span className="text-emerald">web</span> y{" "}
          <span className="text-teal">móviles</span> que resuelven problemas reales.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-fog">
          Soy <span className="text-mist">{me.name}</span>, {me.role.toLowerCase()}. Diseño y
          desarrollo landings, sistemas de gestión y apps a la medida — de la interfaz al despliegue.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#proyectos" className="btn-primary">Ver proyectos</a>
          <a href={`mailto:${me.email}`} className="btn-ghost">Escríbeme</a>
        </div>

        <div className="mt-12 flex flex-wrap gap-2">
          {skills.map((s) => (
            <span key={s} className="tag">{s}</span>
          ))}
        </div>
      </section>

      {/* PROYECTOS */}
      <section id="proyectos" className="container-content py-16 md:py-20">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Trabajo seleccionado</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Proyectos</h2>
          </div>
          <p className="hidden max-w-xs text-sm text-fog sm:block">
            Algunos de los productos que he construido. Varios son de uso interno, por eso solo se
            muestra su acceso.
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((p, i) => (
            <article
              key={p.name}
              className="card overflow-hidden hover:border-emerald/40 md:grid md:grid-cols-2"
            >
              {/* Visual */}
              <div className={`relative ${i % 2 === 1 ? "md:order-2" : ""}`}>
                {/* barra de navegador */}
                <div className="flex items-center gap-1.5 border-b border-white/10 bg-base-800 px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="ml-3 truncate font-mono text-xs text-fog">{p.url.replace("https://", "")}</span>
                </div>
                {p.image ? (
                  <div className="relative aspect-[16/10] overflow-hidden bg-base-800">
                    <Image src={p.image} alt={p.name} fill className="object-cover object-top" />
                  </div>
                ) : (
                  <div className="flex aspect-[16/10] flex-col items-center justify-center gap-3 bg-gradient-to-br from-base-700 to-surface text-fog">
                    <IconLock />
                    <span className="font-mono text-xs uppercase tracking-widest">Acceso restringido</span>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="flex flex-col justify-center p-7 md:p-10">
                <span className="font-mono text-xs uppercase tracking-widest text-teal">{p.kind}</span>
                <h3 className="mt-2 text-2xl">{p.name}</h3>
                <p className="mt-3 text-fog">{p.role}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-4">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald hover:text-teal"
                  >
                    {p.restricted ? "Ver acceso" : "Visitar sitio"} <IconArrow />
                  </a>
                  {p.restricted && (
                    <span className="font-mono text-xs text-fog">· interior privado</span>
                  )}
                </div>
              </div>
            </article>
          ))}

          {/* 👉 Duplica un <article> de arriba para añadir más proyectos */}
          <article className="card flex items-center justify-center border-dashed p-10 text-center">
            <p className="text-sm text-fog">
              …y más proyectos en camino.{" "}
              <a href={`mailto:${me.email}`} className="text-emerald hover:text-teal">Hablemos de tu idea →</a>
            </p>
          </article>
        </div>
      </section>

      {/* SOBRE MÍ */}
      <section id="sobre-mi" className="container-content py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="eyebrow">Sobre mí</p>
            <h2 className="mt-3 text-3xl md:text-4xl">
              Desarrollador enfocado en producto, de la idea al despliegue.
            </h2>
            <p className="mt-5 text-fog">
              {/* 👉 Ajusta tu bio */}
              Trabajo construyendo soluciones digitales para salud, empresas y operación: interfaces
              claras, sistemas confiables y apps que la gente realmente usa. Me encargo del ciclo
              completo — diseño de la interfaz, desarrollo, configuración del servidor y publicación.
            </p>
            <p className="mt-4 text-fog">
              Actualmente desarrollo productos en <span className="text-mist">MD Science &amp; Technology S.A.S</span>,
              donde he construido landings, un sistema de inventario y una app de comunicación web y móvil.
            </p>
          </div>
          <div className="card p-7">
            <h3 className="font-mono text-sm uppercase tracking-widest text-emerald">Stack</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.map((s) => (
                <span key={s} className="tag">{s}</span>
              ))}
            </div>
            <h3 className="mt-8 font-mono text-sm uppercase tracking-widest text-emerald">Lo que hago</h3>
            <ul className="mt-4 space-y-2 text-sm text-fog">
              <li>› Sitios web y landings a la medida</li>
              <li>› Sistemas de gestión (inventario, procesos)</li>
              <li>› Apps web y móviles</li>
              <li>› Despliegue y puesta en marcha</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="container-content py-16 md:py-24">
        <div className="card p-8 text-center md:p-14">
          <p className="eyebrow">Contacto</p>
          <h2 className="mx-auto mt-3 max-w-2xl text-3xl md:text-5xl">
            ¿Tienes un proyecto en mente? Construyámoslo.
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href={`mailto:${me.email}`} className="btn-primary">
              <IconMail /> {me.email}
            </a>
            <a href={me.phoneHref} className="btn-ghost">
              <IconPhone /> {me.phone}
            </a>
          </div>
          <div className="mt-8 flex justify-center gap-6 font-mono text-sm text-fog">
            <a href={me.github} target="_blank" rel="noreferrer" className="hover:text-emerald">GitHub ↗</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5">
        <div className="container-content flex flex-col items-center justify-between gap-2 py-8 text-xs text-fog sm:flex-row">
          <span>© {new Date().getFullYear()} {me.name}</span>
          <span className="font-mono">Hecho con Next.js + TypeScript</span>
        </div>
      </footer>
    </>
  );
}
