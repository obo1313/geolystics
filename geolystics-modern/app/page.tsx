const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Leadership", href: "#leadership" },
  { label: "Affiliations", href: "#affiliations" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    title: "Global Business Development",
    description:
      "Expanding market reach through cross-border partnerships, international structuring, and entry strategies tailored to each region.",
  },
  {
    title: "Supply Chain Development",
    description:
      "Designing resilient, efficient supply networks that connect sourcing, logistics, and distribution for long-term operational advantage.",
  },
  {
    title: "Brand Franchising & Licensing",
    description:
      "Structuring franchise and licensing models that protect brand equity while enabling scalable, sustainable growth.",
  },
  {
    title: "Strategic Guidance",
    description:
      "Translating vision into actionable roadmaps — from competitive positioning to organizational alignment and execution.",
  },
  {
    title: "Standards Implementation",
    description:
      "Embedding internationally recognized frameworks and quality systems that strengthen credibility and operational consistency.",
  },
  {
    title: "Education & Training",
    description:
      "Delivering practical, hands-on programs that equip teams with the knowledge and skills to sustain performance.",
  },
];

const highlights = [
  "Founded Geolystics in 2014, establishing a Greece-based platform for international business integration",
  "Advises organizations on global expansion, supply chain optimization, and franchise system design",
  "Champions standards-driven growth — bridging strategic vision with operational excellence",
  "Leads education and training initiatives that build lasting organizational capability",
];

const affiliations = [
  "International Franchise Association",
  "ISO Standards Network",
  "European Supply Chain Council",
  "Global Business Alliance",
  "Hellenic Enterprise Federation",
  "World Licensing Industry Council",
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Navigation */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy/90 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <a
            href="#"
            className="font-serif text-2xl tracking-tight text-white"
          >
            Geolystics
          </a>
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium tracking-wide text-slate-light transition-colors hover:text-teal-light"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="rounded-full bg-teal px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-teal-light"
          >
            Get in Touch
          </a>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="relative flex min-h-screen items-center bg-navy px-6 pt-24 lg:px-8">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-teal/10 blur-3xl" />
            <div className="absolute -bottom-48 -left-48 h-[600px] w-[600px] rounded-full bg-teal/5 blur-3xl" />
          </div>
          <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-teal-light">
                Business Integration · Est. 2014
              </p>
              <h1 className="font-serif text-5xl leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Integrating strategy, standards &amp; growth
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-light">
                Geolystics helps organizations strengthen competitiveness and
                achieve sustainable growth through strategic guidance, global
                business development, and practical expertise.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#services"
                  className="rounded-full bg-teal px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-light"
                >
                  Explore Services
                </a>
                <a
                  href="#about"
                  className="rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white transition-colors hover:border-teal-light hover:text-teal-light"
                >
                  About Geolystics
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="rounded-2xl border border-white/10 bg-navy-light/60 p-10 backdrop-blur-sm">
                <div className="space-y-8">
                  {[
                    { value: "2014", label: "Founded in Greece" },
                    { value: "Global", label: "Business reach" },
                    { value: "360°", label: "Integration approach" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="border-b border-white/10 pb-8 last:border-0 last:pb-0"
                    >
                      <p className="font-serif text-4xl text-teal-light">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-sm text-slate-light">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="bg-off-white px-6 py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
                About
              </p>
              <h2 className="mt-3 font-serif text-4xl tracking-tight text-navy sm:text-5xl">
                Bridging ambition with execution
              </h2>
            </div>
            <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-20">
              <p className="text-lg leading-relaxed text-slate-dark">
                Geolystics is a business integration company founded in Greece
                in 2014, focused on global business, supply chain development,
                and brand franchising and licensing. The company helps
                organizations improve competitiveness and sustainable growth
                through strategic guidance, standards implementation, education,
                and practical training.
              </p>
              <div className="space-y-6">
                {[
                  "Strategic guidance aligned with market realities",
                  "Standards implementation for operational excellence",
                  "Education and training that drives lasting change",
                  "End-to-end support from concept to execution",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-muted">
                      <svg
                        className="h-3.5 w-3.5 text-teal"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    </span>
                    <p className="text-slate-dark">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="bg-white px-6 py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
                Services
              </p>
              <h2 className="mt-3 font-serif text-4xl tracking-tight text-navy sm:text-5xl">
                Comprehensive integration expertise
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-slate">
                From global market entry to franchise system design, we deliver
                the strategic and operational support your organization needs to
                grow with confidence.
              </p>
            </div>
            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="group rounded-2xl border border-slate-light/30 bg-off-white p-8 transition-all hover:border-teal/30 hover:shadow-lg hover:shadow-teal/5"
                >
                  <div className="mb-4 h-1 w-10 rounded-full bg-teal transition-all group-hover:w-16" />
                  <h3 className="text-lg font-semibold text-navy">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate">
                    {service.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section
          id="leadership"
          className="bg-navy px-6 py-24 lg:px-8 lg:py-32"
        >
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-light">
                Leadership
              </p>
              <h2 className="mt-3 font-serif text-4xl tracking-tight text-white sm:text-5xl">
                Guided by experience
              </h2>
            </div>
            <div className="mt-16 grid gap-12 lg:grid-cols-5 lg:gap-16">
              <div className="flex flex-col items-center lg:col-span-2">
                <div className="flex h-56 w-56 items-center justify-center rounded-2xl border border-white/10 bg-navy-light">
                  <span className="font-serif text-6xl text-teal-light">
                    SO
                  </span>
                </div>
                <h3 className="mt-6 text-center text-2xl font-semibold text-white">
                  Spyros Olympios
                </h3>
                <p className="mt-1 text-center text-sm font-medium uppercase tracking-wider text-teal-light">
                  Founder &amp; Managing Director
                </p>
              </div>
              <div className="lg:col-span-3">
                <p className="text-lg leading-relaxed text-slate-light">
                  Spyros Olympios is the founder and managing director of
                  Geolystics, bringing over a decade of experience in business
                  integration, international market development, and
                  organizational transformation. Since establishing the company
                  in Greece in 2014, he has guided enterprises across sectors in
                  building competitive advantage through strategic planning,
                  supply chain excellence, and franchise system architecture.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-slate-light">
                  A practitioner at heart, Spyros combines rigorous standards
                  implementation with hands-on education and training — ensuring
                  that every engagement delivers measurable, sustainable results
                  for clients pursuing global growth.
                </p>
                <h4 className="mt-8 text-sm font-semibold uppercase tracking-[0.15em] text-teal-light">
                  Selected Highlights
                </h4>
                <ul className="mt-4 space-y-3">
                  {highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-light" />
                      <span className="text-slate-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Affiliations */}
        <section
          id="affiliations"
          className="bg-off-white px-6 py-24 lg:px-8 lg:py-32"
        >
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
                Affiliations
              </p>
              <h2 className="mt-3 font-serif text-4xl tracking-tight text-navy sm:text-5xl">
                Connected to global standards
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-slate">
                Geolystics maintains active relationships with leading industry
                bodies and professional networks worldwide.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
              {affiliations.map((name) => (
                <div
                  key={name}
                  className="flex items-center justify-center rounded-xl border border-slate-light/30 bg-white px-6 py-8 text-center transition-colors hover:border-teal/30"
                >
                  <p className="text-sm font-medium leading-snug text-slate-dark">
                    {name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-white px-6 py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-16 lg:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
                  Contact
                </p>
                <h2 className="mt-3 font-serif text-4xl tracking-tight text-navy sm:text-5xl">
                  Let&apos;s build something lasting
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-slate">
                  Whether you are exploring a new market, structuring a franchise
                  system, or strengthening your supply chain — we are ready to
                  start the conversation.
                </p>
                <dl className="mt-10 space-y-6">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-slate">
                      Location
                    </dt>
                    <dd className="mt-1 text-navy">Athens, Greece</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-slate">
                      Email
                    </dt>
                    <dd className="mt-1">
                      <a
                        href="mailto:info@geolystics.com"
                        className="text-navy underline decoration-teal/40 underline-offset-4 transition-colors hover:text-teal hover:decoration-teal"
                      >
                        info@geolystics.com
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-slate">
                      Founded
                    </dt>
                    <dd className="mt-1 text-navy">2014</dd>
                  </div>
                </dl>
              </div>
              <form className="rounded-2xl border border-slate-light/30 bg-off-white p-8 lg:p-10">
                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-navy"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="mt-1.5 w-full rounded-lg border border-slate-light/40 bg-white px-4 py-2.5 text-sm text-navy outline-none transition-colors placeholder:text-slate-light focus:border-teal focus:ring-1 focus:ring-teal"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-navy"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="mt-1.5 w-full rounded-lg border border-slate-light/40 bg-white px-4 py-2.5 text-sm text-navy outline-none transition-colors placeholder:text-slate-light focus:border-teal focus:ring-1 focus:ring-teal"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-navy"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="mt-1.5 w-full resize-none rounded-lg border border-slate-light/40 bg-white px-4 py-2.5 text-sm text-navy outline-none transition-colors placeholder:text-slate-light focus:border-teal focus:ring-1 focus:ring-teal"
                      placeholder="How can we help?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-full bg-teal px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-light"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-navy px-6 py-12 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
          <div>
            <p className="font-serif text-xl text-white">Geolystics</p>
            <p className="mt-1 text-sm text-slate-light">
              Business integration since 2014
            </p>
          </div>
          <ul className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-slate-light transition-colors hover:text-teal-light"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-sm text-slate-light">
            &copy; {new Date().getFullYear()} Geolystics. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
