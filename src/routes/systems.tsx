import { createFileRoute } from "@tanstack/react-router";
import {
  Search,
  AlertTriangle,
  Lightbulb,
  Zap,
  RefreshCw,
  Wind,
  Droplets,
  Thermometer,
  Sun,
  Layout,
  Layers,
  CheckCircle,
} from "lucide-react";
import { CTABanner } from "@/components/CTABanner";

export const Route = createFileRoute("/systems")({
  head: () => ({
    meta: [
      { title: "Systems — ARKISAN Construction Intelligence Lab" },
      {
        name: "description",
        content:
          "Discover the ACS Framework — Arkisan's Adaptive Circular System built on ancient intelligence and modern engineering.",
      },
    ],
  }),
  component: SystemsPage,
});

const researchCards = [
  {
    icon: Search,
    question: "What made ancient buildings efficient and livable?",
    answer:
      "Buildings that responded to climate, resources, and human experience outlasted all others.",
  },
  {
    icon: AlertTriangle,
    question: "Why did some systems fail or disappear?",
    answer:
      "Intelligent systems fail when they are not maintainable, scalable, or clearly communicated.",
  },
  {
    icon: Lightbulb,
    question: "How can these lessons become modern systems?",
    answer:
      "By combining ancient intelligence with adaptive technology, we create buildings that truly perform.",
  },
];

const pillars = [
  {
    icon: Zap,
    title: "Adaptability (ALS)",
    description: "Buildings that evolve with how you live.",
  },
  {
    icon: RefreshCw,
    title: "Circular Resource Flow (CRS)",
    description: "Zero-waste thinking from design to delivery.",
  },
  {
    icon: Wind,
    title: "Climate Spatial System (CSS)",
    description: "Every space engineered for your local climate.",
  },
];

const systems = [
  {
    icon: Wind,
    label: "AIR SYSTEM",
    heading: "Adaptive Ventilation System",
    function:
      "Cross ventilation, stack effect, and responsive openings work together to move air naturally through the building without mechanical assistance.",
    values: [
      "Reduced cooling load year-round",
      "Improved indoor comfort and air quality",
    ],
  },
  {
    icon: Droplets,
    label: "WATER SYSTEM",
    heading: "Circular Water Loop",
    function:
      "Rainwater harvesting and greywater reuse systems create a closed-loop water cycle, minimizing dependency on external supply.",
    values: [
      "Up to 40% reduction in water consumption",
      "Groundwater recharge and microclimate cooling",
    ],
  },
  {
    icon: Thermometer,
    label: "THERMAL SYSTEM",
    heading: "Thermal Mass Control",
    function:
      "Material-based heat absorption and delayed release, combined with intelligent shading, keeps indoor temperatures stable across seasons.",
    values: [
      "Stable indoor temperatures without HVAC overdependence",
      "Significant long-term energy savings",
    ],
  },
  {
    icon: Sun,
    label: "LIGHT SYSTEM",
    heading: "Intelligent Daylighting",
    function:
      "Strategic window placement, light wells, and controlled shading maximize natural daylight while eliminating harsh glare.",
    values: [
      "Reduced electricity consumption",
      "Enhanced spatial experience and occupant wellbeing",
    ],
  },
  {
    icon: Layout,
    label: "SPACE SYSTEM",
    heading: "Adaptive Space Design",
    function:
      "Flexible layouts and multi-functional spaces are designed to evolve with the family — accommodating changing needs over decades.",
    values: [
      "Long-term usability without expensive renovation",
      "Maximum space efficiency per square foot",
    ],
  },
  {
    icon: Layers,
    label: "MATERIAL SYSTEM",
    heading: "Material Intelligence",
    function:
      "Context-based material selection uses the right material for the right application — balancing local availability, thermal performance, and cost.",
    values: [
      "Cost optimization without quality compromise",
      "Performance-matched materials for each climate zone",
    ],
  },
];

function SystemsPage() {
  return (
    <main>
      {/* ── SECTION 1: PAGE HERO ── */}
      <section className="bg-[#2F2F2F] py-32">
        <div className="mx-auto max-w-[1280px] px-4 text-center sm:px-6 lg:px-8">
          <p
            className="mb-6 text-sm font-semibold uppercase tracking-widest"
            style={{
              color: "#B87333",
              fontFamily: "'Open Sans', system-ui, sans-serif",
            }}
          >
            CONSTRUCTION INTELLIGENCE
          </p>
          <h1
            className="mb-6 text-4xl font-bold leading-tight sm:text-5xl"
            style={{ fontFamily: "'Barlow', system-ui, sans-serif" }}
          >
            <span className="block text-white">Ancient Intelligence.</span>
            <span className="block" style={{ color: "#B87333" }}>
              Modern Systems.
            </span>
          </h1>
          <p
            className="mx-auto max-w-[700px] text-lg sm:text-xl"
            style={{
              color: "#8A9BAD",
              fontFamily: "'Open Sans', system-ui, sans-serif",
            }}
          >
            Arkisan studies why ancient buildings succeeded, why modern ones
            fail, and transforms those lessons into systems that perform.
          </p>
        </div>
      </section>

      {/* ── SECTION 2: RESEARCH PHILOSOPHY ── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <h2
            className="mb-12 text-center text-4xl font-bold"
            style={{
              fontFamily: "'Barlow', system-ui, sans-serif",
              color: "#2F2F2F",
            }}
          >
            Our Research Foundation
          </h2>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {researchCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.question}
                  className="border-t-4 border-[#B87333] bg-[#F4F4F4] p-8"
                  style={{ borderRadius: "0px" }}
                >
                  <Icon size={32} className="mb-5" style={{ color: "#B87333" }} />
                  <h3
                    className="mb-3 text-xl font-semibold leading-snug"
                    style={{
                      fontFamily: "'Barlow', system-ui, sans-serif",
                      color: "#2F2F2F",
                    }}
                  >
                    {card.question}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      fontFamily: "'Open Sans', system-ui, sans-serif",
                      color: "#617891",
                    }}
                  >
                    {card.answer}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: ACS FRAMEWORK INTRO ── */}
      <section className="bg-[#374A67] py-20">
        <div className="mx-auto max-w-[1280px] px-4 text-center sm:px-6 lg:px-8">
          <h2
            className="mb-3 text-4xl font-bold text-white"
            style={{ fontFamily: "'Barlow', system-ui, sans-serif" }}
          >
            The ACS Framework
          </h2>
          <p
            className="mb-14 text-lg"
            style={{
              color: "#B8C8D8",
              fontFamily: "'Open Sans', system-ui, sans-serif",
            }}
          >
            ACS = Adaptive Circular System
          </p>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="flex flex-col items-center text-center"
                >
                  <Icon size={40} className="mb-5" style={{ color: "#B87333" }} />
                  <h3
                    className="mb-3 text-xl font-semibold text-white"
                    style={{ fontFamily: "'Barlow', system-ui, sans-serif" }}
                  >
                    {pillar.title}
                  </h3>
                  <p
                    className="max-w-xs text-sm leading-relaxed"
                    style={{
                      color: "#B8C8D8",
                      fontFamily: "'Open Sans', system-ui, sans-serif",
                    }}
                  >
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTIONS 4–9: 6 SYSTEMS DEEP DIVE ── */}
      {systems.map((system, index) => {
        const Icon = system.icon;
        const isOdd = index % 2 === 0; // 0-indexed: 0,2,4 = odd systems (1,3,5)
        const bg = isOdd ? "bg-white" : "bg-[#F4F4F4]";

        const textBlock = (
          <div className="flex flex-col justify-center">
            <p
              className="mb-3 text-sm font-semibold uppercase tracking-widest"
              style={{
                color: "#B87333",
                fontFamily: "'Open Sans', system-ui, sans-serif",
              }}
            >
              {system.label}
            </p>
            <h2
              className="mb-4 text-3xl font-bold"
              style={{
                fontFamily: "'Barlow', system-ui, sans-serif",
                color: "#2F2F2F",
              }}
            >
              {system.heading}
            </h2>
            <p
              className="mb-6 text-base leading-relaxed"
              style={{
                fontFamily: "'Open Sans', system-ui, sans-serif",
                color: "#617891",
              }}
            >
              {system.function}
            </p>
            <ul className="flex flex-col gap-3">
              {system.values.map((val) => (
                <li key={val} className="flex items-start gap-3">
                  <CheckCircle
                    size={20}
                    className="mt-0.5 shrink-0"
                    style={{ color: "#B87333" }}
                  />
                  <span
                    className="text-sm leading-relaxed"
                    style={{
                      fontFamily: "'Open Sans', system-ui, sans-serif",
                      color: "#2F2F2F",
                    }}
                  >
                    {val}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        );

        const iconBlock = (
          <div className="flex items-center justify-center">
            <Icon
              size={120}
              style={{ color: "#374A67", opacity: 0.15 }}
            />
          </div>
        );

        return (
          <section key={system.label} className={`${bg} py-16`}>
            <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
                {/* Mobile: icon always on top; Desktop: alternate sides */}
                <div className="lg:hidden flex justify-center">
                  <Icon size={100} style={{ color: "#374A67", opacity: 0.15 }} />
                </div>
                {isOdd ? (
                  <>
                    <div className="hidden lg:flex lg:items-center lg:justify-center">
                      {iconBlock}
                    </div>
                    <div>{textBlock}</div>
                  </>
                ) : (
                  <>
                    <div>{textBlock}</div>
                    <div className="hidden lg:flex lg:items-center lg:justify-center">
                      {iconBlock}
                    </div>
                  </>
                )}
              </div>
            </div>
          </section>
        );
      })}

      {/* ── CTA BANNER ── */}
      <CTABanner />
    </main>
  );
}
