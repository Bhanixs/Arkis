import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, Eye, Shield } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — ARKISAN Construction Intelligence Lab" },
      {
        name: "description",
        content:
          "Learn how Arkisan combines visionary engineering with master craftsmanship to redefine home construction in India.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: Briefcase,
    label: "Professionalism",
    color: "#374A67",
    description:
      "We operate with engineering-grade standards on every project, every time.",
  },
  {
    icon: Eye,
    label: "Transparency",
    color: "#B87333",
    description:
      "Full visibility into process, costs, and timelines — no surprises.",
  },
  {
    icon: Shield,
    label: "Integrity",
    color: "#374A67",
    description:
      "Every bolt, beam, and weld executed with precision and accountability.",
  },
];

function AboutPage() {
  return (
    <main>
      {/* ── SECTION 1: PAGE HERO ── */}
      <section className="bg-[#374A67] py-32">
        <div className="mx-auto max-w-[1280px] px-4 text-center sm:px-6 lg:px-8">
          <p
            className="mb-4 text-sm font-semibold uppercase tracking-widest"
            style={{
              color: "#B87333",
              fontFamily: "'Open Sans', system-ui, sans-serif",
            }}
          >
            OUR STORY
          </p>
          <h1
            className="mb-6 text-4xl font-bold text-white sm:text-5xl"
            style={{ fontFamily: "'Barlow', system-ui, sans-serif" }}
          >
            The Master Builder, Redefined.
          </h1>
          <p
            className="mx-auto max-w-2xl text-lg sm:text-xl"
            style={{
              color: "#B8C8D8",
              fontFamily: "'Open Sans', system-ui, sans-serif",
            }}
          >
            Combining the visionary scale of civil engineering with the
            meticulous detail of a master craftsman.
          </p>
        </div>
      </section>

      {/* ── SECTION 2: VISION ── */}
      <section className="bg-white py-20">
        <div className="mx-auto flex max-w-[1280px] justify-center px-4 sm:px-6 lg:px-8">
          <div
            className="w-full max-w-[800px] border-l-4 border-[#B87333] bg-[#F4F4F4] px-8 py-10 sm:px-12"
          >
            <p
              className="text-xl font-bold italic sm:text-2xl"
              style={{
                color: "#374A67",
                fontFamily: "'Barlow', system-ui, sans-serif",
              }}
            >
              'To make high-quality, professionally built homes accessible to
              every family, without compromise.'
            </p>
            <p
              className="mt-6 text-sm uppercase tracking-widest"
              style={{
                color: "#B87333",
                fontFamily: "'Open Sans', system-ui, sans-serif",
              }}
            >
              Our Vision
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: VALUES ── */}
      <section className="bg-[#F4F4F4] py-20">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <h2
            className="mb-12 text-center text-4xl font-bold"
            style={{
              fontFamily: "'Barlow', system-ui, sans-serif",
              color: "#2F2F2F",
            }}
          >
            Our Values
          </h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.label}
                  className="flex flex-col items-center text-center"
                >
                  <Icon size={40} color={value.color} className="mb-4" />
                  <h3
                    className="mb-2 text-xl font-semibold"
                    style={{
                      fontFamily: "'Barlow', system-ui, sans-serif",
                      color: "#2F2F2F",
                    }}
                  >
                    {value.label}
                  </h3>
                  <p
                    className="max-w-xs text-sm leading-relaxed"
                    style={{
                      fontFamily: "'Open Sans', system-ui, sans-serif",
                      color: "#617891",
                    }}
                  >
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
