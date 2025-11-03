import Link from "next/link";

const icons = {
  route: (className = "size-6") => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.5 4.5h9a2 2 0 0 1 2 2v1.882a2 2 0 0 1-.586 1.414l-9.828 9.828a2 2 0 0 1-1.414.586H6.5a2 2 0 0 1-2-2V15" />
      <circle cx="6.5" cy="6.5" r="1.75" />
      <circle cx="17.5" cy="17.5" r="1.75" />
    </svg>
  ),
  recycle: (className = "size-6") => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 3.5 6.5 8h4l1.5 2.5" />
      <path d="M15 20.5 17.5 16h-4l-1.5-2.5" />
      <path d="M20 10.5 17.5 6l-2 3.5" />
      <path d="M3 13.25S4.25 17 8.5 17s7-4.5 7-4.5" />
    </svg>
  ),
  analytics: (className = "size-6") => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="12" width="4" height="8" rx="1.5" />
      <rect x="10" y="6" width="4" height="14" rx="1.5" />
      <rect x="17" y="3" width="4" height="17" rx="1.5" />
      <path d="M4 7 9.5 4l4.5 2 6-3" />
    </svg>
  ),
  insights: (className = "size-6") => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 3h14l1.5 5.5H3.5L5 3Z" />
      <path d="M3.5 8.5 5.5 21h13L20.5 8.5" />
      <path d="M9 12v4" />
      <path d="M12 10v6" />
      <path d="M15 13v3" />
    </svg>
  ),
  programs: (className = "size-6") => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="7" r="4" />
      <path d="M4 19c0-3.314 3.134-6 7-6h2c3.866 0 7 2.686 7 6" />
      <path d="M7 11c-1.105 0-2-.895-2-2" />
      <path d="M17 11c1.105 0 2-.895 2-2" />
    </svg>
  ),
  dashboard: (className = "size-6") => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3.5 5.5h17v12h-17Z" />
      <path d="M3.5 11.5h17" />
      <path d="M9.5 5.5v12" />
    </svg>
  ),
  leaf: (className = "size-5") => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 21s-4-4-4-8a4 4 0 0 1 4-4 4 4 0 0 1 4 4c0 4-4 8-4 8Z" />
      <path d="M12 13a3 3 0 0 1 3-3h5" />
    </svg>
  ),
};

const navigation = [
  { label: "Solutions", href: "#solutions" },
  { label: "Analytics", href: "#analytics" },
  { label: "Programs", href: "#programs" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
] as const;

const services = [
  {
    title: "Smart Collection & Routing",
    description:
      "IoT-enabled bins and fleet orchestration reduce fuel use and overflow incidents across your municipality or campus.",
    highlights: ["Sensor retrofits", "Dynamic route planning", "Camera vision"],
    icon: icons.route,
  },
  {
    title: "Material Recovery Hubs",
    description:
      "Modular sorting hubs and reverse logistics programs that double diversion rates while protecting staff safety.",
    highlights: ["AI material scanning", "Vendor marketplace", "Worker analytics"],
    icon: icons.recycle,
  },
  {
    title: "Circular Partnerships",
    description:
      "Design corporate and community reuse programs with measurable social outcomes and localized impact.",
    highlights: ["Recommerce audits", "Take-back operations", "Impact reporting"],
    icon: icons.programs,
  },
] as const;

const stats = [
  { value: "62%", label: "Average landfill diversion after 9 months" },
  { value: "38%", label: "Collection cost reduction with live routing" },
  { value: "4.8M", label: "kg of CO₂-e mitigated for our clients" },
  { value: "120+", label: "Cities, campuses, and resorts served globally" },
] as const;

const analytics = [
  {
    title: "Live Material Streams",
    description:
      "Track contamination rates and bin fullness in real time with sensor dashboards and predictive thresholds.",
  },
  {
    title: "Executive Sustainability KPIs",
    description:
      "Instant ESG-grade reporting with automated monthly roll-ups aligned to local regulatory frameworks.",
  },
  {
    title: "Revenue Optimization",
    description:
      "Forecast commodity pricing, incentive performance, and contract savings with integrated financial models.",
  },
] as const;

const programs = [
  {
    name: "EcoTrack for Cities",
    details:
      "Build zero-waste neighborhoods with citizen engagement apps, curbside gamification, and circular procurement.",
    audience: "Municipal & smart city teams",
  },
  {
    name: "EcoTrack for Campuses",
    details:
      "Unify custodial routes, lab waste segregation, and student-led recovery campaigns across multi-site campuses.",
    audience: "Universities & innovation districts",
  },
  {
    name: "EcoTrack for Resorts",
    details:
      "Deliver luxury-grade experiences with back-of-house automation, F&B diversion, and guest storytelling.",
    audience: "Hospitality & destination venues",
  },
] as const;

const process = [
  {
    step: "01 Discover",
    title: "Circular Opportunity Mapping",
    copy: "Waste audits, stakeholder journey mapping, and material flow models create the baseline for transformation.",
  },
  {
    step: "02 Activate",
    title: "Deploy Smart Infrastructure",
    copy: "Install sensors, configure the EcoTrack Control Tower, and onboard partners with change-management toolkits.",
  },
  {
    step: "03 Optimize",
    title: "Continuously Measure & Improve",
    copy: "Blend telemetry, sustainability KPIs, and behavioral nudges to deliver ongoing savings and public impact.",
  },
] as const;

const testimonials = [
  {
    quote:
      "EcoTrack helped us prove that circularity is financially viable. In under a year we aligned routes, monetized recyclables, and earned national recognition.",
    name: "Asha Dhawan",
    role: "Director of Sanitation Innovation, City of Harborview",
  },
  {
    quote:
      "Our resorts now track every bag from suite to sorting line, all while giving guests a luxurious, sustainability-forward experience.",
    name: "Miguel Alvarez",
    role: "VP Operations, Solstice Hospitality",
  },
] as const;

const resources = [
  {
    title: "Waste Modernization Playbook",
    description: "A tactical guide for city leaders to implement tech-enabled waste operations within one budget cycle.",
    href: "#",
  },
  {
    title: "Circular Procurement Checklist",
    description: "Unlock supplier diversity, reuse innovation, and climate resilience in your next RFP.",
    href: "#",
  },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-night-950">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(36,171,114,0.22),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-y-0 right-[-40%] w-[80%] rounded-full bg-[radial-gradient(circle_at_center,_rgba(50,165,255,0.18),transparent_60%)] blur-3xl" />
      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 pb-24 pt-10 sm:px-6 lg:px-8">
        <header className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex size-9 items-center justify-center rounded-2xl bg-brand-500/20 text-brand-300 shadow-glow-brand">
              {icons.leaf("size-4")}
            </span>
            <div className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-200">
              EcoTrack
            </div>
          </Link>
          <nav className="flex flex-wrap items-center gap-3 text-sm text-slate-200/80">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full border border-transparent px-4 py-2 transition hover:border-white/10 hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-brand-500/60 bg-brand-500/20 px-4 py-2 text-sm font-medium text-brand-100 transition hover:bg-brand-500/30 hover:text-white"
          >
            Schedule a pilot
            <svg
              className="size-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </Link>
        </header>

        <section className="relative mt-16 flex flex-col gap-14 rounded-[3rem] border border-white/10 bg-white/[0.03] px-6 py-14 shadow-[0_60px_120px_-60px_rgba(36,171,114,0.45)] backdrop-blur sm:px-10 lg:px-16">
          <div className="absolute inset-x-12 inset-y-6 rounded-[2.75rem] border border-brand-500/10" />
          <div className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-8">
              <p className="inline-flex items-center gap-2 rounded-full border border-brand-500/40 bg-brand-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-brand-200">
                Waste intelligence for circular cities
              </p>
              <h1 className="text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                Design waste systems that are{" "}
                <span className="text-brand-300">climate-positive</span> from
                the start.
              </h1>
              <p className="max-w-xl text-lg text-slate-300/80">
                EcoTrack combines smart infrastructure, analytics, and community
                programs to eliminate landfill reliance while lowering
                operational spend. Launch a pilot in weeks—not quarters.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-night-950 shadow-glow-brand transition hover:bg-brand-400"
                >
                  Explore deployment kits
                  <svg
                    className="size-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </Link>
                <Link
                  href="#analytics"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-brand-400 hover:text-brand-200"
                >
                  See analytics in action
                  <span aria-hidden>→</span>
                </Link>
              </div>
              <div className="flex flex-wrap items-center gap-6">
                <div className="text-2xl font-semibold text-white">21%</div>
                <p className="max-w-xs text-sm text-slate-300/70">
                  Average emissions reduction in the first year across municipal
                  deployments with EcoTrack telemetry.
                </p>
              </div>
            </div>
            <div className="relative flex flex-col justify-center gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-transparent to-brand-500/10 p-6 text-sm text-slate-200 shadow-[0_30px_90px_-50px_rgba(59,130,246,0.35)]">
              <div className="absolute inset-0 rounded-3xl border border-brand-500/10" />
              <div className="relative rounded-2xl border border-white/5 bg-night-950/60 p-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-[0.3em] text-slate-400">
                    Control Tower
                  </span>
                  <span className="rounded-full bg-brand-500/20 px-3 py-1 text-xs font-semibold text-brand-100">
                    Live
                  </span>
                </div>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/5 px-4 py-3">
                    <div>
                      <p className="text-sm font-medium text-white">
                        Diversion Rate
                      </p>
                      <p className="text-xs text-slate-400">Goal 65%</p>
                    </div>
                    <span className="text-lg font-semibold text-brand-300">
                      72.4%
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/5 px-4 py-3">
                    <div>
                      <p className="text-sm font-medium text-white">
                        Route Efficiency
                      </p>
                      <p className="text-xs text-slate-400">
                        IoT bins reporting
                      </p>
                    </div>
                    <span className="text-lg font-semibold text-brand-300">
                      +41%
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/5 px-4 py-3">
                    <div>
                      <p className="text-sm font-medium text-white">
                        Contamination Risk
                      </p>
                      <p className="text-xs text-slate-400">AI camera feeds</p>
                    </div>
                    <span className="text-lg font-semibold text-amber-300">
                      ↓18%
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative rounded-2xl border border-white/5 bg-white/5 p-5">
                <div className="mb-4 flex items-center gap-2">
                  <span className="flex size-8 items-center justify-center rounded-full bg-brand-500/20 text-brand-200">
                    {icons.analytics("size-4")}
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                      Predictive Insight
                    </p>
                    <p className="text-sm font-medium text-white">
                      Glass surge expected
                    </p>
                  </div>
                </div>
                <p className="text-sm text-slate-300/80">
                  Commodity marketplace shows 12% price lift. Recommend
                  adjusting recovery shifts Thursday–Saturday.
                </p>
              </div>
            </div>
          </div>

          <div className="relative grid gap-10 rounded-3xl border border-white/5 bg-night-950/50 p-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label} className="space-y-3">
                <p className="text-3xl font-semibold text-white">{item.value}</p>
                <p className="text-sm text-slate-300/70">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="solutions" className="mt-24 space-y-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-brand-200">
                Solutions
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
                Built for every step of the waste value chain
              </h2>
            </div>
            <p className="max-w-xl text-sm text-slate-300/80">
              From IoT-enabled routes to circular materials marketplaces,
              EcoTrack delivers launch-ready modules that integrate with your
              existing infrastructure and partners.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group relative flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition hover:border-brand-400/70 hover:bg-white/[0.07]"
              >
                <div className="flex size-12 items-center justify-center rounded-2xl bg-brand-500/15 text-brand-200">
                  {service.icon("size-6")}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-300/75">
                    {service.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {service.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200/70 transition group-hover:border-brand-300/30 group-hover:text-brand-200"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-300 opacity-0 transition group-hover:opacity-100">
                  Learn about deployment
                  <span aria-hidden>→</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="analytics"
          className="mt-24 grid gap-8 rounded-[2.75rem] border border-brand-500/20 bg-gradient-to-br from-brand-500/20 via-transparent to-slate-900/80 p-10 lg:grid-cols-[1fr_0.95fr]"
        >
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-100">
              Control tower analytics
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Sustainability metrics that stand up to audits
            </h2>
            <p className="text-sm text-brand-50/80">
              EcoTrack unifies real-time IoT data, vendor reporting, and
              workforce productivity into a single ESG-ready platform with role
              based access.
            </p>
            <div className="grid gap-4 text-sm text-brand-50/80">
              {analytics.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-night-950/60 p-5"
                >
                  <p className="text-base font-semibold text-white">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm text-slate-300/70">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex flex-col gap-5 rounded-3xl border border-white/10 bg-night-950/70 p-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Material Mix</span>
                <span>Last 30 days</span>
              </div>
              <div className="mt-6 flex justify-center">
                <div className="relative size-40">
                  <svg viewBox="0 0 36 36" className="size-40">
                    <path
                      d="M18 2.0845
                         a 15.9155 15.9155 0 0 1 0 31.831
                         a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="rgba(36,171,114,0.8)"
                      strokeWidth="3"
                      strokeDasharray="60 40"
                      strokeLinecap="round"
                    />
                    <path
                      d="M18 2.0845
                         a 15.9155 15.9155 0 0 1 0 31.831"
                      fill="none"
                      stroke="rgba(148,163,184,0.4)"
                      strokeWidth="3"
                      strokeDasharray="40 60"
                      strokeDashoffset="-60"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 text-sm font-semibold text-white">
                    68%
                    <span className="text-xs font-normal text-slate-400">
                      Recovery
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-6 grid gap-2 text-xs text-slate-300/70">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-brand-400" />
                    Organics
                  </span>
                  <span>32%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-emerald-300" />
                    Fiber
                  </span>
                  <span>21%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-blue-300" />
                    Containers
                  </span>
                  <span>15%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-slate-500" />
                    Residual
                  </span>
                  <span>12%</span>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Service Alerts</span>
                <span>4 open</span>
              </div>
              <div className="mt-4 space-y-3 text-xs">
                <div className="rounded-xl border border-amber-400/20 bg-amber-400/10 px-4 py-3 text-amber-100">
                  Downtown Hub contamination trending ↑
                </div>
                <div className="rounded-xl border border-brand-400/20 bg-brand-400/10 px-4 py-3 text-brand-100">
                  Fleet electrification rebate unlocked
                </div>
                <div className="rounded-xl border border-slate-500/40 bg-slate-500/10 px-4 py-3 text-slate-200/90">
                  Partner MRF maintenance scheduled Friday
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="programs"
          className="mt-24 rounded-[2.75rem] border border-white/10 bg-white/[0.03] p-10"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-brand-200">
                Industry programs
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
                Designed to scale with your stakeholders
              </h2>
            </div>
            <p className="max-w-xl text-sm text-slate-300/80">
              Choose a launch template, tailor behavior change campaigns, and
              integrate your vendor ecosystem with EcoTrack’s partner APIs.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {programs.map((program) => (
              <div
                key={program.name}
                className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-night-950/70 p-7"
              >
                <div className="rounded-full border border-brand-500/20 bg-brand-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-200">
                  {program.audience}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {program.name}
                  </h3>
                  <p className="mt-3 text-sm text-slate-300/75">
                    {program.details}
                  </p>
                </div>
                <Link
                  href="#contact"
                  className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-brand-200 transition hover:text-brand-100"
                >
                  Talk to a strategist <span aria-hidden>→</span>
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section
          id="process"
          className="mt-24 grid gap-10 rounded-[2.75rem] border border-white/10 bg-night-950/60 p-10 lg:grid-cols-[0.85fr_1.15fr]"
        >
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-200">
              Engagement blueprint
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              A proven arc from audit to continuous innovation
            </h2>
            <p className="text-sm text-slate-300/80">
              Deploy EcoTrack through collaborative sprints that fast-track
              adoption, align budgets, and embed sustainability wins into daily
              operations.
            </p>
            <div className="rounded-3xl border border-brand-500/20 bg-brand-500/10 p-6 text-sm text-brand-50/90">
              <p className="text-base font-semibold text-white">
                90-day pilot guarantee
              </p>
              <p className="mt-2">
                Hit 3+ mutually defined KPIs or roll off with the entire playbook
                at no charge.
              </p>
            </div>
          </div>
          <div className="grid gap-6">
            {process.map((item) => (
              <div
                key={item.step}
                className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/5 p-6 sm:flex-row sm:gap-6"
              >
                <div className="flex-shrink-0 rounded-2xl border border-brand-500/30 bg-brand-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand-100">
                  {item.step}
                </div>
                <div className="space-y-3">
                  <p className="text-lg font-semibold text-white">
                    {item.title}
                  </p>
                  <p className="text-sm text-slate-300/80">{item.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="testimonials"
          className="mt-24 rounded-[2.75rem] border border-white/10 bg-white/[0.02] p-10"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-brand-200">
                Proof in the field
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
                Trusted by sustainability leaders
              </h2>
            </div>
            <p className="max-w-xl text-sm text-slate-300/80">
              EcoTrack teams collaborate with public works, facilities, and
              hospitality crews to deliver measurable impact across continents.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-night-950/70 p-8"
              >
                <p className="text-lg italic text-slate-200">
                  “{testimonial.quote}”
                </p>
                <div>
                  <p className="text-sm font-semibold text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-24 grid gap-8 rounded-[2.75rem] border border-white/10 bg-gradient-to-br from-brand-500/25 via-night-950 to-night-950 p-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-100">
              Resources
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Tools to accelerate your zero-waste roadmap
            </h2>
            <p className="text-sm text-brand-50/80">
              Download playbooks, interact with ROI models, and share success
              stories with stakeholders.
            </p>
            <div className="grid gap-4">
              {resources.map((resource) => (
                <Link
                  key={resource.title}
                  href={resource.href}
                  className="group rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:border-brand-300/50 hover:bg-white/10"
                >
                  <p className="text-base font-semibold text-white">
                    {resource.title}
                  </p>
                  <p className="mt-2 text-sm text-slate-300/80">
                    {resource.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand-200">
                    Open resource <span aria-hidden>→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-between gap-6 rounded-3xl border border-white/10 bg-night-950/80 p-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-200">
                Platform snapshots
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                Weekly signal intelligence
              </h3>
              <p className="mt-4 text-sm text-slate-300/80">
                Join 6,000+ operations leaders analyzing waste policies,
                technologies, and market pricing from across the EcoTrack
                network.
              </p>
            </div>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400"
                >
                  Work email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="alex@city.gov"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-brand-300 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-2xl bg-brand-500 py-3 text-sm font-semibold text-night-950 transition hover:bg-brand-400"
              >
                Subscribe to insights
              </button>
            </form>
          </div>
        </section>

        <section
          id="contact"
          className="mt-24 grid gap-10 rounded-[2.75rem] border border-white/10 bg-night-950/80 p-10 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-200">
              Reach out
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Ready to transform your waste operations?
            </h2>
            <p className="text-sm text-slate-300/80">
              Tell us about your sustainability goals. An EcoTrack strategist
              will design a pilot tailored to your budgets, regulations, and
              partner network.
            </p>
            <div className="space-y-3 text-sm text-slate-300/70">
              <p className="flex items-center gap-3">
                <span className="inline-flex size-9 items-center justify-center rounded-2xl bg-brand-500/15 text-brand-300">
                  {icons.dashboard("size-5")}
                </span>
                Platform demo within 5 business days
              </p>
              <p className="flex items-center gap-3">
                <span className="inline-flex size-9 items-center justify-center rounded-2xl bg-brand-500/15 text-brand-300">
                  {icons.programs("size-5")}
                </span>
                Custom deployment blueprint & ROI model
              </p>
              <p className="flex items-center gap-3">
                <span className="inline-flex size-9 items-center justify-center rounded-2xl bg-brand-500/15 text-brand-300">
                  {icons.recycle("size-5")}
                </span>
                Access to EcoTrack partner ecosystem
              </p>
            </div>
          </div>
          <form className="grid gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-sm text-slate-200">
            <div className="grid gap-2">
              <label
                htmlFor="name"
                className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400"
              >
                Full name
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder="Jordan Akers"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-brand-300 focus:outline-none"
              />
            </div>
            <div className="grid gap-2">
              <label
                htmlFor="organization"
                className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400"
              >
                Organization
              </label>
              <input
                id="organization"
                type="text"
                required
                placeholder="City of Harborview"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-brand-300 focus:outline-none"
              />
            </div>
            <div className="grid gap-2">
              <label
                htmlFor="scope"
                className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400"
              >
                Program scope
              </label>
              <select
                id="scope"
                className="w-full appearance-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white focus:border-brand-300 focus:outline-none"
              >
                <option className="bg-night-950 text-white">
                  Citywide collections
                </option>
                <option className="bg-night-950 text-white">
                  Campus operations
                </option>
                <option className="bg-night-950 text-white">
                  Hospitality & venues
                </option>
                <option className="bg-night-950 text-white">
                  Industrial & logistics
                </option>
              </select>
            </div>
            <div className="grid gap-2">
              <label
                htmlFor="message"
                className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400"
              >
                What challenges are you tackling?
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Share goals, pain points, timelines..."
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-brand-300 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="mt-2 w-full rounded-2xl bg-brand-500 py-3 text-sm font-semibold text-night-950 transition hover:bg-brand-400"
            >
              Request strategy session
            </button>
            <p className="text-xs text-slate-400">
              By submitting, you agree to EcoTrack processing your information in
              line with our privacy commitments.
            </p>
          </form>
        </section>

        <footer className="mt-24 flex flex-col items-start justify-between gap-6 rounded-[2.75rem] border border-white/10 bg-night-950/80 p-10 sm:flex-row">
          <div className="space-y-3 text-sm text-slate-300/80">
            <div className="flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-2xl bg-brand-500/20 text-brand-300">
                {icons.leaf("size-4")}
              </span>
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-200">
                EcoTrack
              </span>
            </div>
            <p className="max-w-sm">
              EcoTrack Waste Solutions empowers cities, campuses, and resorts to
              build circular waste systems that benefit people and the planet.
            </p>
          </div>
          <div className="flex flex-col items-start gap-2 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} EcoTrack Waste Solutions.</p>
            <p>Global HQ · Seattle · Singapore · Barcelona</p>
          </div>
        </footer>
      </div>
    </main>
  );
}
