import type { ReactNode } from "react";

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
  { name: "International Franchise Association", abbr: "IFA" },
  { name: "ISO Standards Network", abbr: "ISO" },
  { name: "European Supply Chain Council", abbr: "ESCC" },
  { name: "Global Business Alliance", abbr: "GBA" },
  { name: "Hellenic Enterprise Federation", abbr: "HEF" },
  { name: "World Licensing Industry Council", abbr: "WLIC" },
];

function SectionLabel({
  children,
  tone = "light",
}: {
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <p
      className={`section-label ${tone === "light" ? "text-teal-light" : "text-teal"}`}
    >
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Navigation */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-navy/80 backdrop-blur-xl">
        <nav className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-6 lg:px-10">
          <a
            href="#"
            className="heading-display text-[1.35rem] text-white"
          >
            Geolystics
          </a>
          <ul className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[0.8125rem] font-medium tracking-[0.04em] text-slate-light transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="rounded-full bg-teal px-5 py-2.5 text-[0.8125rem] font-semibold tracking-wide text-white shadow-[0_4px_14px_rgb(42_157_143/0.35)] transition-all duration-200 hover:bg-teal-light hover:shadow-[0_6px_20px_rgb(42_157_143/0.4)]"
          >
            Get in Touch
          </a>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="hero-grid relative flex min-h-[100svh] items-center bg-navy">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute right-0 top-0 h-[min(70vw,520px)] w-[min(70vw,520px)] -translate-y-1/4 translate-x-1/4 rounded-full bg-teal/[0.07] blur-[100px]" />
            <div className="absolute bottom-0 left-0 h-[min(60vw,480px)] w-[min(60vw,480px)] -translate-x-1/3 translate-y-1/3 rounded-full bg-teal/[0.04] blur-[120px]" />
          </div>

          <div className="relative mx-auto w-full max-w-6xl px-6 pb-20 pt-36 lg:px-10 lg:pb-28 lg:pt-40">
            <div className="grid items-end gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
              <div className="max-w-2xl">
                <SectionLabel tone="light">Business Integration · Est. 2014</SectionLabel>
                <h1 className="heading-display mt-8 text-[clamp(2.75rem,6vw,4.5rem)] text-white">
                  Integrating strategy, standards &amp; growth
                </h1>
                <p className="mt-8 max-w-lg text-[1.0625rem] leading-[1.8] text-slate-light">
                  Geolystics helps organizations strengthen competitiveness and
                  achieve sustainable growth through strategic guidance, global
                  business development, and practical expertise.
                </p>
                <div className="mt-12 flex flex-wrap items-center gap-4">
                  <a
                    href="#services"
                    className="inline-flex items-center rounded-full bg-teal px-8 py-3.5 text-[0.8125rem] font-semibold tracking-wide text-white shadow-[0_4px_14px_rgb(42_157_143/0.35)] transition-all duration-200 hover:bg-teal-light"
                  >
                    Explore Services
                  </a>
                  <a
                    href="#about"
                    className="inline-flex items-center rounded-full border border-white/15 px-8 py-3.5 text-[0.8125rem] font-semibold tracking-wide text-white/90 transition-all duration-200 hover:border-white/30 hover:text-white"
                  >
                    About Geolystics
                  </a>
                </div>
              </div>

              <div className="hidden lg:block">
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-10 backdrop-blur-sm">
                  <div className="divide-y divide-white/[0.08]">
                    {[
                      { value: "2014", label: "Founded in Greece" },
                      { value: "Global", label: "Business reach" },
                      { value: "360°", label: "Integration approach" },
                    ].map((stat) => (
                      <div key={stat.label} className="py-7 first:pt-0 last:pb-0">
                        <p className="heading-display text-[2.25rem] text-teal-light">
                          {stat.value}
                        </p>
                        <p className="mt-1.5 text-[0.8125rem] tracking-wide text-slate-light">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-20 hidden items-center gap-3 text-slate-light lg:flex">
              <span className="h-px w-12 bg-white/20" />
              <span className="text-[0.6875rem] font-medium uppercase tracking-[0.2em]">
                Scroll to explore
              </span>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="section-pad bg-off-white">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
              <div className="lg:col-span-5">
                <SectionLabel>About</SectionLabel>
                <h2 className="heading-section mt-6 text-[clamp(2rem,4vw,3rem)] text-navy">
                  Bridging ambition with execution
                </h2>
              </div>
              <div className="lg:col-span-7">
                <p className="prose-body max-w-2xl">
                  Geolystics is a business integration company founded in Greece
                  in 2014, focused on global business, supply chain development,
                  and brand franchising and licensing. The company helps
                  organizations improve competitiveness and sustainable growth
                  through strategic guidance, standards implementation, education,
                  and practical training.
                </p>
                <ul className="mt-12 grid gap-5 sm:grid-cols-2">
                  {[
                    "Strategic guidance aligned with market realities",
                    "Standards implementation for operational excellence",
                    "Education and training that drives lasting change",
                    "End-to-end support from concept to execution",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3.5 rounded-xl border border-slate-muted/40 bg-white px-5 py-4"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-muted">
                        <svg
                          className="h-2.5 w-2.5 text-teal"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={3}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                      </span>
                      <span className="text-[0.9375rem] leading-snug text-slate-dark">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="section-pad bg-white">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <div className="mx-auto max-w-2xl text-center">
              <SectionLabel>Services</SectionLabel>
              <h2 className="heading-section mt-6 text-[clamp(2rem,4vw,3rem)] text-navy">
                Comprehensive integration expertise
              </h2>
              <p className="prose-body mt-5">
                From global market entry to franchise system design, we deliver
                the strategic and operational support your organization needs to
                grow with confidence.
              </p>
            </div>

            <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <article
                  key={service.title}
                  className="card-surface group flex flex-col p-8 lg:p-9"
                >
                  <span className="text-[0.6875rem] font-semibold tracking-[0.18em] text-teal">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-[1.0625rem] font-semibold leading-snug tracking-tight text-navy">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[0.9375rem] leading-[1.7] text-slate">
                    {service.description}
                  </p>
                  <div className="mt-6 h-px w-8 bg-teal/30 transition-all duration-300 group-hover:w-12 group-hover:bg-teal/60" />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section id="leadership" className="section-pad bg-navy">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <div className="max-w-xl">
              <SectionLabel tone="light">Leadership</SectionLabel>
              <h2 className="heading-section mt-6 text-[clamp(2rem,4vw,3rem)] text-white">
                Guided by experience
              </h2>
            </div>

            <div className="mt-20 grid gap-16 lg:grid-cols-12 lg:gap-20">
              <div className="flex flex-col items-center lg:col-span-4 lg:items-start">
                <div className="relative">
                  <div className="flex h-64 w-64 items-center justify-center rounded-2xl border border-white/[0.08] bg-navy-mid shadow-elevated">
                    <span className="heading-display text-[4.5rem] text-teal-light/80">
                      SO
                    </span>
                  </div>
                  <div className="absolute -bottom-3 -right-3 h-full w-full rounded-2xl border border-teal/20" />
                </div>
                <div className="mt-10 text-center lg:text-left">
                  <h3 className="text-[1.375rem] font-semibold tracking-tight text-white">
                    Spyros Olympios
                  </h3>
                  <p className="mt-2 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-teal-light">
                    Founder &amp; Managing Director
                  </p>
                </div>
              </div>

              <div className="lg:col-span-8">
                <div className="space-y-6 border-l border-white/[0.08] pl-8 lg:pl-12">
                  <p className="text-[1.0625rem] leading-[1.8] text-slate-light">
                    Spyros Olympios is the founder and managing director of
                    Geolystics, bringing over a decade of experience in business
                    integration, international market development, and
                    organizational transformation. Since establishing the company
                    in Greece in 2014, he has guided enterprises across sectors in
                    building competitive advantage through strategic planning,
                    supply chain excellence, and franchise system architecture.
                  </p>
                  <p className="text-[1.0625rem] leading-[1.8] text-slate-light">
                    A practitioner at heart, Spyros combines rigorous standards
                    implementation with hands-on education and training — ensuring
                    that every engagement delivers measurable, sustainable results
                    for clients pursuing global growth.
                  </p>
                </div>

                <div className="mt-12 rounded-2xl border border-white/[0.08] bg-navy-mid/50 p-8 lg:p-10">
                  <h4 className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-teal-light">
                    Selected Highlights
                  </h4>
                  <ul className="mt-6 space-y-4">
                    {highlights.map((item) => (
                      <li key={item} className="flex items-start gap-4">
                        <span className="mt-2.5 h-1 w-6 shrink-0 bg-teal/50" />
                        <span className="text-[0.9375rem] leading-[1.7] text-slate-light">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Affiliations */}
        <section id="affiliations" className="section-pad bg-off-white">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <div className="mx-auto max-w-2xl text-center">
              <SectionLabel>Affiliations</SectionLabel>
              <h2 className="heading-section mt-6 text-[clamp(2rem,4vw,3rem)] text-navy">
                Connected to global standards
              </h2>
              <p className="prose-body mt-5">
                Geolystics maintains active relationships with leading industry
                bodies and professional networks worldwide.
              </p>
            </div>

            <div className="mt-20 grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-5">
              {affiliations.map((org) => (
                <div
                  key={org.name}
                  className="card-surface flex flex-col items-center px-6 py-9 text-center"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-teal/15 bg-teal-muted text-[0.6875rem] font-bold tracking-wider text-teal">
                    {org.abbr}
                  </span>
                  <p className="mt-5 text-[0.875rem] font-medium leading-snug text-slate-dark">
                    {org.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section-pad bg-white">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
              <div>
                <SectionLabel>Contact</SectionLabel>
                <h2 className="heading-section mt-6 text-[clamp(2rem,4vw,3rem)] text-navy">
                  Let&apos;s build something lasting
                </h2>
                <p className="prose-body mt-6 max-w-md">
                  Whether you are exploring a new market, structuring a franchise
                  system, or strengthening your supply chain — we are ready to
                  start the conversation.
                </p>

                <dl className="mt-14 space-y-8">
                  {[
                    { label: "Location", value: "Athens, Greece" },
                    {
                      label: "Email",
                      value: "info@geolystics.com",
                      href: "mailto:info@geolystics.com",
                    },
                    { label: "Founded", value: "2014" },
                  ].map((item) => (
                    <div key={item.label}>
                      <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-slate">
                        {item.label}
                      </dt>
                      <dd className="mt-2 text-[1rem] text-navy">
                        {item.href ? (
                          <a
                            href={item.href}
                            className="underline decoration-teal/30 underline-offset-[5px] transition-colors hover:text-teal hover:decoration-teal"
                          >
                            {item.value}
                          </a>
                        ) : (
                          item.value
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <form className="card-surface p-8 lg:p-10">
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-slate">
                  Send an inquiry
                </p>
                <div className="mt-8 space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-[0.8125rem] font-medium text-navy"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="mt-2 w-full rounded-lg border border-slate-muted/50 bg-off-white px-4 py-3 text-[0.9375rem] text-navy outline-none transition-all placeholder:text-slate-light focus:border-teal focus:bg-white focus:ring-2 focus:ring-teal/10"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[0.8125rem] font-medium text-navy"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="mt-2 w-full rounded-lg border border-slate-muted/50 bg-off-white px-4 py-3 text-[0.9375rem] text-navy outline-none transition-all placeholder:text-slate-light focus:border-teal focus:bg-white focus:ring-2 focus:ring-teal/10"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-[0.8125rem] font-medium text-navy"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="mt-2 w-full resize-none rounded-lg border border-slate-muted/50 bg-off-white px-4 py-3 text-[0.9375rem] text-navy outline-none transition-all placeholder:text-slate-light focus:border-teal focus:bg-white focus:ring-2 focus:ring-teal/10"
                      placeholder="How can we help?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-full bg-teal px-8 py-3.5 text-[0.8125rem] font-semibold tracking-wide text-white shadow-[0_4px_14px_rgb(42_157_143/0.3)] transition-all duration-200 hover:bg-teal-light"
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
      <footer className="border-t border-white/[0.06] bg-navy">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-10">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="heading-display text-[1.25rem] text-white">
                Geolystics
              </p>
              <p className="mt-2 text-[0.875rem] text-slate-light">
                Business integration since 2014
              </p>
            </div>
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[0.8125rem] text-slate-light transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-12 flex flex-col gap-3 border-t border-white/[0.06] pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[0.8125rem] text-slate-light">
              &copy; {new Date().getFullYear()} Geolystics. All rights reserved.
            </p>
            <p className="text-[0.75rem] text-slate-light/70">
              Athens, Greece
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
