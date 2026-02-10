import Image from "next/image";

export default function Page() {
  // --- EDIT THESE ---
  const profile = {
    name: "Martin Duchstein",
    role: "FIAE Umschüler (Anwendungsentwicklung)",
    location: "Koblenz",
    availability: "Pflichtpraktikum ab Aug 2026 · 6 Monate",
    workMode: "",
    email:
      "mailto:martin@pixelharbor.dev?subject=Praktikumsanfrage%20FIAE%20%E2%80%93%20Martin%20Duchstein&body=Hallo%20Martin%2C%0D%0A%0D%0AIch%20habe%20dein%20Portfolio%20gesehen%20und%20w%C3%BCrde%20gern%20kurz%20sprechen.%0D%0A%0D%0AViele%20Gr%C3%BC%C3%9Fe%0D%0A",
    cvEmail:
      "mailto:martin@pixelharbor.dev?subject=Anfrage%20Lebenslauf%20%E2%80%93%20Martin%20Duchstein&body=Hallo%20Martin%2C%0D%0A%0D%0AIch%20w%C3%BCrde%20gern%20deinen%20aktuellen%20Lebenslauf%20anfragen.%0D%0A%0D%0AViele%20Gr%C3%BC%C3%9Fe%0D%0A",
    links: {
      github: "https://github.com/infinite-aperture",
      linkedin: "https://www.linkedin.com/in/martin-duchstein-7bb498297/",
    },
    photoSrc: "/profilepic.png", // put your placeholder image in /public/me.png
  };

  // tasteful accent: change sky/indigo to teal/emerald or violet/fuchsia if you want
  const accent = {
  from: "from-emerald-500",
  to: "to-teal-500",
  softBg: "bg-emerald-50",
  softBorder: "border-emerald-100",
  softText: "text-emerald-700",
  ring: "ring-emerald-200",
  };

  const stack = [
    "JavaScript/TypeScript",
    "React",
    "Python",
    "Flask",
    "SQL (SQLite)",
    "Git",
    "Linux",
    "HTTP/DNS Basics",
    "Datenschutz Basics",
    "Docker Basics",
    "Java Basics"
  ];

  const projects = [
    {
      title: "Pomodoro Web App (CS50 Final Project)",
      oneLiner: "Fokus-Timer mit Session-Tracking und History (SQLite).",
      stack: ["Flask", "SQLite", "JavaScript"],
      highlights: [
        "Productivity tool das robust gegen Browser-Throttling ist",
        "Pomodoro-interval tracking mit history(stats)-Seite",
      ],
      live: "https://pomodoro-tracker-50ms.onrender.com",
      code: "https://github.com/infinite-aperture/pomodoro-tracker",
    },
    {
      title: "Networking Trainer Web App",
      oneLiner: "Interaktives Lernen von Networking-Grundlagen (Subnetting/DNS/HTTP).",
      stack: ["React", "TypeScript"],
      highlights: ["Übungsmodus mit Feedback", "Git Deploy + saubere UI/UX"],
      live: "https://infinite-aperture.github.io/binary/#trainer",
      code: "https://github.com/infinite-aperture/binary",
    },
    {
      title: "Neues Projekt (in Arbeit)",
      oneLiner: "Ich arbeite aktuell an einem neuen Projekt  Details folgen bald.",
      stack: ["Konzept", "Umsetzung laufend"],
      highlights: [
        
      ],
    },
    
  ];

  const certificates = [
    {
      title: "CS50x Certificate",
      issuer: "Harvard University / edX",
      date: "Abgeschlossen",
      description: "Fundierte Computer-Science-Basics und praxisorientierte Softwareentwicklung mit C/Python/SQL sowie Web-Development (Flask, HTML/CSS/JS)",
      linkLabel: "Zertifikat ansehen",
      link: "https://cs50.harvard.edu/certificates/bdc17e05-3a83-401f-8e81-5b2fe7c71411",
    },
    {
      title: "Cambridge English Certificate",
      issuer: "Cambridge Assessment English",
      date: "C2 Level Pass (highest level)",
      description: "Nachweis von Englischkenntnissen auf höchstem CEFR-Niveau für professionelle Kommunikation im IT-Umfeld.",
      linkLabel: "Zertifikat ansehen",
      link: "#",
      hideLink: true,
    },
    {
      title: "Foundations of Project Management",
      issuer: "Google",
      date: "Abgeschlossen",
      description: "Grundlagen des Projektmanagements mit Fokus auf Planung, Kommunikation und strukturierte Umsetzung.",
      linkLabel: "Zertifikat ansehen",
      link: "https://coursera.org/share/fe546219fc4d8092fdb3e545ff8dedc7",
    },
    {
      title: "Python Programming Fundamentals",
      issuer: "Microsoft",
      date: "Abgeschlossen",
      description: "Fundamentale Python-Kenntnisse als Basis für saubere, praxisnahe Softwareentwicklung.",
      linkLabel: "Zertifikat ansehen",
      link: "https://coursera.org/share/247a14493684c18ffaab745abd5ed948",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      {/* subtle background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div
          className={`absolute left-[-10%] top-[-20%] h-[520px] w-[520px] rounded-full blur-3xl opacity-20 bg-gradient-to-br ${accent.from} ${accent.to}`}
        />
        <div className="absolute bottom-[-20%] right-[-10%] h-[520px] w-[520px] rounded-full bg-neutral-200/40 blur-3xl opacity-40" />
      </div>

      <div className="mx-auto max-w-5xl px-6 py-10">
        {/* Top */}
        <header className="flex items-center justify-between gap-4">
          <div className="text-sm text-neutral-600">{profile.role}</div>
          <nav className="flex items-center gap-4 text-sm">
            <a className="text-neutral-700 hover:text-neutral-900" href="#certificates">
              Zertifikate
            </a>
            <a className="text-neutral-700 hover:text-neutral-900" href="#projects">
              Projekte
            </a>
            <a className="text-neutral-700 hover:text-neutral-900" href="#contact">
              Kontakt
            </a>
          </nav>
        </header>

        {/* Hero */}
        <section className="mt-10 overflow-hidden rounded-3xl border border-neutral-200 bg-white/70 p-7 shadow-sm backdrop-blur transition duration-200 hover:shadow-md md:p-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-3xl">
              <div className={`mb-6 h-1 w-14 rounded-full bg-gradient-to-r ${accent.from} ${accent.to}`} />
              <div className="text-sm text-neutral-600">{profile.name}</div>

              <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
                Fachinformatiker für Anwendungsentwicklung - Praktikum gesucht! 
              </h1>

              <p className="mt-3 text-neutral-700">
                Zurzeit in Umschulung zum FIAE, Harvards CS50 (Einführung in Informatik) abgeschlossen. Ich baue kleine Apps end-to-end (UI → Logik → Datenspeicher).
                Background: medizinisches Labor - Interesse an Health/MedTech-Software (Prozesse, Datenqualität,
                Datenschutz).
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <Pill>{profile.availability}</Pill>
                <Pill>
                  {profile.location}  {profile.workMode}
                </Pill>
                
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  className={`inline-flex items-center justify-center rounded-2xl bg-gradient-to-r ${accent.from} ${accent.to} px-4 py-2 text-sm font-semibold text-white shadow-md transition duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-sky-200/70 hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300`}
                  href={profile.email}
                >
                  Praktikum anbieten
                </a>
                <a
                  className={`inline-flex items-center justify-center rounded-2xl bg-gradient-to-r ${accent.from} ${accent.to} px-4 py-2 text-sm font-semibold text-white shadow-md transition duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-sky-200/70 hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300`}
                  href={profile.cvEmail}
                >
                  Lebenslauf anfragen
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-2xl border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-100"
                  href="#projects"
                >
                  Projekte ansehen
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-2xl border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-100"
                  href={profile.links.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-2xl border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-100"
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Photo */}
            <div className="shrink-0">
              <div className="mx-auto">
                <div className="relative w-32 aspect-square overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm ring-4 ring-emerald-500 transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:ring-4 hover:ring-offset-2 hover:ring-offset-white hover:ring-emerald-300">
                  <Image
                    src={profile.photoSrc}
                    alt="Portrait"
                    fill
                    className="object-cover object-center transition duration-200 hover:scale-105"
                    sizes="800px"
                    priority
                  />
                </div>
              </div>

              <div className="mt-3 text-center text-xs text-neutral-500">
                It-Spezialist in training
              </div>
            
            </div>
          </div>
        </section>

        {/* Kurzprofil (tight, high signal) */}
        <section className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-neutral-200 bg-white/70 p-6 shadow-sm backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:shadow-md md:col-span-2">
            <div className="flex items-center justify-between gap-4">
              <div className="text-sm font-semibold text-neutral-900">Kurzprofil</div>
              
            </div>

            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Info label="Gesucht" value="Pflichtpraktikum FIAE (Anwendungsentwicklung)" />
              <Info label="Zeitraum" value={profile.availability} />
              <Info label="Standort" value={`${profile.location} · ${profile.workMode}`} />
              <Info label="Stack" value={stack.join(" · ")} />
            </div>
          </div>

          <div className={`rounded-3xl border border-neutral-200 bg-white/70 p-6 shadow-sm backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:shadow-md`}>
            <div className="text-sm font-semibold text-neutral-900">Warum ich zu euch passe</div>
            <ul className="mt-3 space-y-2 text-sm text-neutral-700">
              <li className="flex gap-2">
                <Dot /> Prozess- & qualitätsorientiert (Labor-Background)
              </li>
              <li className="flex gap-2">
                <Dot /> Dokumentationsstark, sauberer Umgang mit Daten
              </li>
              <li className="flex gap-2">
                <Dot /> Teamfähig, lernbereit, möchte anpacken und mitgestalten
              </li>
            </ul>

            <a
              className={`mt-5 inline-flex w-full items-center justify-center rounded-2xl ${accent.softBg} px-4 py-2 text-sm font-semibold text-neutral-900 border ${accent.softBorder} shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-md hover:shadow-sky-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300`}
              href={profile.email}
            >
              Kontakt aufnehmen
            </a>
          </div>
        </section>

        {/* Certificates */}
        <section id="certificates" className="mt-10">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-xl font-semibold tracking-tight">Zertifikate</h2>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
            {certificates.map((certificate) => (
              <article
                key={certificate.title}
                className="group rounded-3xl border border-neutral-200 bg-white/70 p-5 shadow-sm backdrop-blur transition duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-semibold leading-snug">{certificate.title}</h3>
                  <span
                    className={`mt-1 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r ${accent.from} ${accent.to} opacity-60 group-hover:opacity-100`}
                  />
                </div>

                <p className="mt-2 text-sm text-neutral-700">{certificate.description}</p>

                <div className="mt-4 space-y-1 text-sm text-neutral-700">
                  <div>
                    <span className="font-medium text-neutral-900">Issuer:</span> {certificate.issuer}
                  </div>
                  <div>
                    <span className="font-medium text-neutral-900">Status:</span> {certificate.date}
                  </div>
                </div>

                {!certificate.hideLink && (
                  <div className="mt-5 flex gap-3 text-sm">
                    <A href={certificate.link}>{certificate.linkLabel}</A>
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-10">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-xl font-semibold tracking-tight">Projekte</h2>
            
          </div>

          <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
            {projects.map((p) => (
              <article
                key={p.title}
                className="group rounded-3xl border border-neutral-200 bg-white/70 p-5 shadow-sm backdrop-blur transition duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-semibold leading-snug">{p.title}</h3>
                  <span
                    className={`mt-1 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r ${accent.from} ${accent.to} opacity-60 group-hover:opacity-100`}
                  />
                </div>

                <p className="mt-2 text-sm text-neutral-700">{p.oneLiner}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>

                <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <Dot />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {(p.live || p.code) && (
                  <div className="mt-5 flex gap-3 text-sm">
                    {p.live && <A href={p.live}>Live</A>}
                    {p.code && <A href={p.code}>Code</A>}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-12 pb-10">
          <h2 className="text-xl font-semibold tracking-tight">Kontakt</h2>
          <p className="mt-2 text-sm text-neutral-700">
            Kurz schreiben reicht - ich antworte schnell und gerne.
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <a
              className={`rounded-2xl bg-gradient-to-r ${accent.from} ${accent.to} px-4 py-2 text-sm font-medium text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-200/70 hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300`}
              href={profile.email}
            >
              E-Mail
            </a>
            <a
              className="rounded-2xl border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-900 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-md hover:shadow-emerald-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="rounded-2xl border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-900 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-md hover:shadow-emerald-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>

          <footer className="mt-10 text-sm text-neutral-500">
            © {new Date().getFullYear()} {profile.name}
          </footer>
        </section>
      </div>
    </main>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-700">
      {children}
    </span>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-700">
      {children}
    </span>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
      <div className="text-xs font-medium text-neutral-500">{label}</div>
      <div className="mt-1 text-sm font-semibold text-neutral-900">{value}</div>
    </div>
  );
}

function Dot() {
  return <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />;
}

function A({ href, children }: { href: string; children: React.ReactNode }) {
  const external = href.startsWith("http");
  return (
    <a
      className="font-medium text-neutral-900 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-600"
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      {children}
    </a>
  );
}
