import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle, ArrowRight } from "lucide-react";
import { CTABanner } from "@/components/CTABanner";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — ARKISAN Construction Intelligence Lab" },
      {
        name: "description",
        content:
          "Arkisan delivers ACS-integrated residential and commercial construction — engineered systems, full transparency, turnkey delivery.",
      },
    ],
  }),
  component: ServicesPage,
});

const residentialFeatures = [
  "Self-sustaining homes with full ACS integration",
  "Climate-responsive layouts for Indian conditions",
  "Turnkey delivery — design to handover",
  "Full cost and process transparency throughout",
];

const commercialFeatures = [
  "Reduced operational costs through passive systems",
  "Energy-efficient design from foundation up",
  "Scalable systems for any commercial footprint",
  "Engineer-led project management end-to-end",
];

function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-4">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <CheckCircle
            size={20}
            className="mt-0.5 shrink-0"
            style={{ color: "#B87333" }}
          />
          <span
            className="text-base leading-relaxed"
            style={{
              fontFamily: "'Open Sans', system-ui, sans-serif",
              color: "#2F2F2F",
            }}
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

function ServicesPage() {
  return (
    <main>
      {/* ── SECTION 1: PAGE HERO ── */}
      <section className="bg-[#374A67] py-32">
        <div className="mx-auto max-w-[1280px] px-4 text-center sm:px-6 lg:px-8">
          <p
            className="mb-6 text-sm font-semibold uppercase tracking-widest"
            style={{
              color: "#B87333",
              fontFamily: "'Open Sans', system-ui, sans-serif",
            }}
          >
            WHAT WE BUILD
          </p>
          <h1
            className="mb-6 text-4xl font-bold leading-tight sm:text-5xl"
            style={{ fontFamily: "'Barlow', system-ui, sans-serif" }}
          >
            <span className="block text-white">We Don't Just Build Homes.</span>
            <span className="block" style={{ color: "#B87333" }}>
              We Build Systems.
            </span>
          </h1>
          <p
            className="mx-auto max-w-2xl text-lg sm:text-xl"
            style={{
              color: "#B8C8D8",
              fontFamily: "'Open Sans', system-ui, sans-serif",
            }}
          >
            Every Arkisan project integrates the ACS Framework — delivering
            homes that perform, adapt, and endure.
          </p>
        </div>
      </section>

      {/* ── SECTION 2: RESIDENTIAL SERVICES ── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
            {/* Content — 55% */}
            <div className="w-full lg:w-[55%]">
              <p
                className="mb-3 text-sm font-semibold uppercase tracking-widest"
                style={{
                  color: "#B87333",
                  fontFamily: "'Open Sans', system-ui, sans-serif",
                }}
              >
                RESIDENTIAL
              </p>
              <h2
                className="mb-6 text-3xl font-bold"
                style={{
                  fontFamily: "'Barlow', system-ui, sans-serif",
                  color: "#2F2F2F",
                }}
              >
                Homes Engineered for Life
              </h2>
              <FeatureList items={residentialFeatures} />
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center justify-center px-8 py-3 text-base font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#9A6428]"
                style={{
                  backgroundColor: "#B87333",
                  borderRadius: "4px",
                  fontFamily: "'Barlow', system-ui, sans-serif",
                }}
              >
                Start Your Home Journey
              </Link>
            </div>

            {/* Image placeholder — 45% */}
            <div className="w-full lg:w-[45%]">
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#E8DFD3]">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                  alt="Residential construction by Arkisan"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: COMMERCIAL SERVICES ── */}
      <section className="bg-[#F4F4F4] py-20">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
            {/* Image placeholder — 45% (left on desktop) */}
            <div className="w-full lg:w-[45%]">
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#D5C8B5]">
                <img
                  src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=800&q=80"
                  alt="Commercial construction by Arkisan"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Content — 55% (right on desktop) */}
            <div className="w-full lg:w-[55%]">
              <p
                className="mb-3 text-sm font-semibold uppercase tracking-widest"
                style={{
                  color: "#B87333",
                  fontFamily: "'Open Sans', system-ui, sans-serif",
                }}
              >
                COMMERCIAL
              </p>
              <h2
                className="mb-6 text-3xl font-bold"
                style={{
                  fontFamily: "'Barlow', system-ui, sans-serif",
                  color: "#2F2F2F",
                }}
              >
                Performance-Driven Buildings
              </h2>
              <FeatureList items={commercialFeatures} />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: OUR PROCESS (How It Works — white-on-blue variant) ── */}
      <section className="bg-[#374A67] py-20">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <h2
            className="mb-12 text-center text-4xl font-bold text-white"
            style={{ fontFamily: "'Barlow', system-ui, sans-serif" }}
          >
            How We Build Your Home
          </h2>
          <div className="relative flex flex-col gap-8 lg:flex-row lg:gap-0">
            {/* Dashed connector — desktop only */}
            <div
              className="absolute top-[20px] left-[12.5%] right-[12.5%] hidden border-t-2 border-dashed lg:block"
              style={{ borderColor: "rgba(255,255,255,0.2)" }}
            />
            {[
              { number: 1, title: "Free Consultation", description: "We listen, understand your needs, site, and budget." },
              { number: 2, title: "Design & Planning", description: "ACS-integrated design, engineered for your climate and lifestyle." },
              { number: 3, title: "Construction", description: "Professional team, transparent process, zero compromise." },
              { number: 4, title: "Handover", description: "Your home. Delivered. Exactly as promised." },
            ].map((step) => (
              <div
                key={step.number}
                className="relative z-10 flex flex-1 flex-col items-center text-center"
              >
                <div
                  className="mb-4 flex h-10 w-10 items-center justify-center text-lg font-bold text-white"
                  style={{
                    backgroundColor: "#B87333",
                    borderRadius: "50%",
                    fontFamily: "'Barlow', system-ui, sans-serif",
                  }}
                >
                  {step.number}
                </div>
                <h3
                  className="mb-2 text-xl font-semibold text-white"
                  style={{ fontFamily: "'Barlow', system-ui, sans-serif" }}
                >
                  {step.title}
                </h3>
                <p
                  className="max-w-[220px] text-sm leading-relaxed"
                  style={{
                    fontFamily: "'Open Sans', system-ui, sans-serif",
                    color: "#B8C8D8",
                  }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: THE ARKISAN DIFFERENCE ── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <h2
            className="mb-12 text-center text-4xl font-bold"
            style={{
              fontFamily: "'Barlow', system-ui, sans-serif",
              color: "#2F2F2F",
            }}
          >
            The Arkisan Difference
          </h2>
          <div className="flex flex-col gap-0 divide-y divide-[#EEEEEE]">
            {[
              {
                name: "System-Based Design",
                description: "Every decision is driven by performance data, not aesthetics.",
              },
              {
                name: "Circular Construction",
                description: "Resource efficiency built into the process from day one.",
              },
              {
                name: "Fully Integrated Technology",
                description: "Smart systems that are part of the building, not bolted on.",
              },
              {
                name: "Adaptive Spaces",
                description: "Homes that evolve with your family over time.",
              },
              {
                name: "Radical Transparency",
                description: "You see every cost, every step, every decision.",
              },
            ].map((item) => (
              <div
                key={item.name}
                className="flex flex-col gap-2 py-6 sm:flex-row sm:items-center sm:gap-5"
              >
                <ArrowRight
                  size={24}
                  className="shrink-0"
                  style={{ color: "#B87333" }}
                />
                <span
                  className="text-base font-bold"
                  style={{
                    fontFamily: "'Barlow', system-ui, sans-serif",
                    color: "#374A67",
                    minWidth: "220px",
                  }}
                >
                  {item.name}
                </span>
                <span
                  className="text-base leading-relaxed"
                  style={{
                    fontFamily: "'Open Sans', system-ui, sans-serif",
                    color: "#617891",
                  }}
                >
                  {item.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: CTA BANNER ── */}
      <CTABanner />
    </main>
  );
}
