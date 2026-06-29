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
    title: "Supply Chain Strategy",
    description:
      "Design and strengthen supply chain structures that improve performance, resilience, and competitiveness.",
  },
  {
    title: "Franchising & Licensing",
    description:
      "Support structured expansion through franchise and licensing models with strategic and operational clarity.",
  },
  {
    title: "Business Integration",
    description:
      "Align processes, teams, and core business functions for stronger execution.",
  },
  {
    title: "Training & Standards Implementation",
    description:
      "Build internal capability through education, training, and practical standards adoption.",
  },
  {
    title: "Operational Excellence",
    description:
      "Improve workflows, consistency, and execution through better systems and management discipline.",
  },
  {
    title: "International Growth Support",
    description:
      "Help businesses prepare for expansion in global and cross-border markets.",
  },
  {
    title: "Robotics in Logistics",
    description:
      "Explore robotics-driven improvements in warehousing, handling, automation, and logistics performance.",
  },
  {
    title: "Mergers & Acquisitions",
    description:
      "Support integration strategy and operational alignment during acquisition, merger, or business transition.",
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
  tone = "dark",
}: {
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <p
      className={`section-label ${tone === "light" ? "text-grey-400" : "text-grey-500"}`}
    >
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Navigation */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-grey-200/80 bg-white/85 backdrop-blur-xl">
        <nav className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-6 lg:px-10">
          <a
            href="#"
            className="heading-display text-[1.35rem] text-grey-950"
          >
            Geolystics
          </a>
          <ul className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[0.8125rem] font-medium tracking-[0.04em] text-grey-600 transition-colors duration-200 hover:text-grey-950"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn-primary px-5 py-2.5">
            Get in Touch
          </a>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="hero-grid relative flex min-h-[100svh] items-center bg-grey-50">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute right-0 top-0 h-[min(70vw,520px)] w-[min(70vw,520px)] -translate-y-1/4 translate-x-1/4 rounded-full bg-grey-300/30 blur-[100px]" />
            <div className="absolute bottom-0 left-0 h-[min(60vw,480px)] w-[min(60vw,480px)] -translate-x-1/3 translate-y-1/3 rounded-full bg-grey-200/40 blur-[120px]" />
          </div>

          <div className="relative mx-auto w-full max-w-6xl px-6 pb-20 pt-36 lg:px-10 lg:pb-28 lg:pt-40">
            <div className="grid items-end gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
              <div className="max-w-2xl">
                <SectionLabel>Business Integration · Est. 2014</SectionLabel>
                <h1 className="heading-display mt-8 text-[clamp(2.75rem,6vw,4.5rem)] text-grey-950">
                  Integrating strategy, standards &amp; growth
                </h1>
                <p className="mt-8 max-w-lg text-[1.0625rem] leading-[1.8] text-grey-600">
                  Geolystics helps organizations strengthen competitiveness and
                  achieve sustainable growth through strategic guidance, global
                  business development, and practical expertise.
                </p>
                <div className="mt-12 flex flex-wrap items-center gap-4">
                  <a href="#services" className="btn-primary">
                    Explore Services
                  </a>
                  <a
                    href="#about"
                    className="inline-flex items-center rounded-full border border-grey-300 bg-white px-8 py-3.5 text-[0.8125rem] font-semibold tracking-wide text-grey-800 transition-all duration-200 hover:border-grey-400 hover:bg-grey-50"
                  >
                    About Geolystics
                  </a>
                </div>
              </div>

              <div className="hidden lg:block">
                <div className="rounded-2xl border border-grey-200 bg-white p-10 shadow-card">
                  <div className="divide-y divide-grey-200">
                    {[
                      { value: "2014", label: "Founded in Greece" },
                      { value: "Global", label: "Business reach" },
                      { value: "360°", label: "Integration approach" },
                    ].map((stat) => (
                      <div key={stat.label} className="py-7 first:pt-0 last:pb-0">
                        <p className="heading-display text-[2.25rem] text-grey-800">
                          {stat.value}
                        </p>
                        <p className="mt-1.5 text-[0.8125rem] tracking-wide text-grey-500">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-20 hidden items-center gap-3 text-grey-500 lg:flex">
              <span className="h-px w-12 bg-grey-300" />
              <span className="text-[0.6875rem] font-medium uppercase tracking-[0.2em]">
                Scroll to explore
              </span>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="section-pad bg-white">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
              <div className="lg:col-span-5">
                <SectionLabel>About</SectionLabel>
                <h2 className="heading-section mt-6 text-[clamp(2rem,4vw,3rem)] text-grey-950">
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
                      className="flex items-start gap-3.5 rounded-xl border border-grey-200 bg-grey-50 px-5 py-4"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-grey-200">
                        <svg
                          className="h-2.5 w-2.5 text-grey-700"
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
                      <span className="text-[0.9375rem] leading-snug text-grey-700">
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
        <section id="services" className="section-pad bg-grey-50">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <div className="mx-auto max-w-2xl text-center">
              <SectionLabel>Services</SectionLabel>
              <h2 className="heading-section mt-6 text-[clamp(2rem,4vw,3rem)] text-grey-950">
                Comprehensive integration expertise
              </h2>
              <p className="prose-body mt-5">
                From supply chain strategy to mergers and acquisitions, we deliver
                the strategic and operational support your organization needs to
                grow with confidence.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-4 sm:mt-20 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
              {services.map((service, index) => (
                <article
                  key={service.title}
                  className="card-surface group flex h-full flex-col bg-white p-6 sm:p-7 lg:p-6 xl:p-7"
                >
                  <span className="text-[0.6875rem] font-semibold tracking-[0.18em] text-grey-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-[1.0625rem] font-semibold leading-snug tracking-tight text-grey-950">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[0.9375rem] leading-[1.7] text-grey-600">
                    {service.description}
                  </p>
                  <div className="mt-6 h-px w-8 bg-grey-300 transition-all duration-300 group-hover:w-12 group-hover:bg-grey-500" />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section id="leadership" className="section-pad bg-grey-900">
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
                  <div className="flex h-64 w-64 items-center justify-center rounded-2xl border border-white/10 bg-grey-800 shadow-elevated">
                    <span className="heading-display text-[4.5rem] text-grey-400">
                      SO
                    </span>
                  </div>
                  <div className="absolute -bottom-3 -right-3 h-full w-full rounded-2xl border border-white/10" />
                </div>
                <div className="mt-10 text-center lg:text-left">
                  <h3 className="text-[1.375rem] font-semibold tracking-tight text-white">
                    Spyros Olympios
                  </h3>
                  <p className="mt-2 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-grey-400">
                    Founder &amp; Managing Director
                  </p>
                </div>
              </div>

              <div className="lg:col-span-8">
                <div className="space-y-6 border-l border-white/10 pl-8 lg:pl-12">
                  <p className="text-[1.0625rem] leading-[1.8] text-grey-300">
                    Spyros Olympios is the founder and managing director of
                    Geolystics, bringing over a decade of experience in business
                    integration, international market development, and
                    organizational transformation. Since establishing the company
                    in Greece in 2014, he has guided enterprises across sectors in
                    building competitive advantage through strategic planning,
                    supply chain excellence, and franchise system architecture.
                  </p>
                  <p className="text-[1.0625rem] leading-[1.8] text-grey-300">
                    A practitioner at heart, Spyros combines rigorous standards
                    implementation with hands-on education and training — ensuring
                    that every engagement delivers measurable, sustainable results
                    for clients pursuing global growth.
                  </p>
                </div>

                <div className="mt-12 rounded-2xl border border-white/10 bg-grey-800/50 p-8 lg:p-10">
                  <h4 className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-grey-400">
                    Selected Highlights
                  </h4>
                  <ul className="mt-6 space-y-4">
                    {highlights.map((item) => (
                      <li key={item} className="flex items-start gap-4">
                        <span className="mt-2.5 h-1 w-6 shrink-0 bg-grey-500" />
                        <span className="text-[0.9375rem] leading-[1.7] text-grey-300">
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
        <section id="affiliations" className="section-pad bg-white">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <div className="mx-auto max-w-2xl text-center">
              <SectionLabel>Affiliations</SectionLabel>
              <h2 className="heading-section mt-6 text-[clamp(2rem,4vw,3rem)] text-grey-950">
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
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-grey-200 bg-grey-100 text-[0.6875rem] font-bold tracking-wider text-grey-700">
                    {org.abbr}
                  </span>
                  <p className="mt-5 text-[0.875rem] font-medium leading-snug text-grey-700">
                    {org.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section-pad bg-grey-50">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
              <div>
                <SectionLabel>Contact</SectionLabel>
                <h2 className="heading-section mt-6 text-[clamp(2rem,4vw,3rem)] text-grey-950">
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
                      <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-grey-500">
                        {item.label}
                      </dt>
                      <dd className="mt-2 text-[1rem] text-grey-950">
                        {item.href ? (
                          <a
                            href={item.href}
                            className="underline decoration-grey-300 underline-offset-[5px] transition-colors hover:text-grey-600 hover:decoration-grey-500"
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

              <form className="card-surface bg-white p-8 lg:p-10">
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-grey-500">
                  Send an inquiry
                </p>
                <div className="mt-8 space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-[0.8125rem] font-medium text-grey-950"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="mt-2 w-full rounded-lg border border-grey-200 bg-grey-50 px-4 py-3 text-[0.9375rem] text-grey-950 outline-none transition-all placeholder:text-grey-400 focus:border-grey-400 focus:bg-white focus:ring-2 focus:ring-grey-200"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[0.8125rem] font-medium text-grey-950"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="mt-2 w-full rounded-lg border border-grey-200 bg-grey-50 px-4 py-3 text-[0.9375rem] text-grey-950 outline-none transition-all placeholder:text-grey-400 focus:border-grey-400 focus:bg-white focus:ring-2 focus:ring-grey-200"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-[0.8125rem] font-medium text-grey-950"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="mt-2 w-full resize-none rounded-lg border border-grey-200 bg-grey-50 px-4 py-3 text-[0.9375rem] text-grey-950 outline-none transition-all placeholder:text-grey-400 focus:border-grey-400 focus:bg-white focus:ring-2 focus:ring-grey-200"
                      placeholder="How can we help?"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-grey-800 bg-grey-950">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-10">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="heading-display text-[1.25rem] text-white">
                Geolystics
              </p>
              <p className="mt-2 text-[0.875rem] text-grey-400">
                Business integration since 2014
              </p>
            </div>
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[0.8125rem] text-grey-400 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-12 flex flex-col gap-3 border-t border-grey-800 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[0.8125rem] text-grey-500">
              &copy; {new Date().getFullYear()} Geolystics. All rights reserved.
            </p>
            <p className="text-[0.75rem] text-grey-600">
              Athens, Greece
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
