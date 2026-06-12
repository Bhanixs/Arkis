import { Briefcase, Eye, Shield } from "lucide-react";

const values = [
  {
    icon: Briefcase,
    label: "Professionalism",
    color: "#374A67",
    description: "We operate with engineering-grade standards on every project, every time.",
  },
  {
    icon: Eye,
    label: "Transparency",
    color: "#B87333",
    description: "Full visibility into process, costs, and timelines — no surprises.",
  },
  {
    icon: Shield,
    label: "Integrity",
    color: "#374A67",
    description: "Every bolt, beam, and weld executed with precision and accountability.",
  },
];

export function OurValues() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <h2
          className="mb-12 text-center text-4xl font-bold"
          style={{ fontFamily: "var(--font-barlow)", color: "#2F2F2F" }}
        >
          Our Values
        </h2>

        {/* Values grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div key={value.label} className="flex flex-col items-center text-center">
                <Icon size={40} color={value.color} className="mb-4" />
                <h3
                  className="mb-2 text-xl font-semibold"
                  style={{ fontFamily: "var(--font-barlow)", color: "#2F2F2F" }}
                >
                  {value.label}
                </h3>
                <p
                  className="max-w-xs text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-opensans)", color: "#617891" }}
                >
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
