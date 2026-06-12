import { Wind, Droplets, Thermometer, Sun, Layout, Layers } from "lucide-react";

const systems = [
  {
    icon: Wind,
    name: "Air System",
    description: "Adaptive cross-ventilation and stack effect for natural cooling.",
  },
  {
    icon: Droplets,
    name: "Water System",
    description: "Rainwater harvesting and greywater reuse for circular efficiency.",
  },
  {
    icon: Thermometer,
    name: "Thermal System",
    description: "Material-based heat control and intelligent shading systems.",
  },
  {
    icon: Sun,
    name: "Light System",
    description: "Daylight optimization reducing electricity use and enhancing space.",
  },
  {
    icon: Layout,
    name: "Space System",
    description: "Flexible, multi-functional layouts built for long-term adaptability.",
  },
  {
    icon: Layers,
    name: "Material System",
    description: "Context-based material selection for cost and performance.",
  },
];

export function ACSSystems() {
  return (
    <section className="bg-[#F4F4F4] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12 text-center">
          <p
            className="mb-4 text-sm font-semibold uppercase tracking-widest"
            style={{ fontFamily: "var(--font-opensans)", color: "#B87333" }}
          >
            THE ARKISAN SYSTEM
          </p>
          <h2
            className="mb-4 text-4xl font-bold"
            style={{ fontFamily: "var(--font-barlow)", color: "#2F2F2F" }}
          >
            Ancient Intelligence. Modern Systems.
          </h2>
          <p
            className="mx-auto max-w-[600px] text-lg"
            style={{ fontFamily: "var(--font-opensans)", color: "#617891" }}
          >
            The ACS Framework integrates 6 adaptive systems into every building we construct.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {systems.map((system) => {
            const Icon = system.icon;
            return (
              <div
                key={system.name}
                className="flex flex-col border border-[#DDDDDD] bg-white p-6 transition-all duration-300 hover:border-[#B87333] hover:shadow-lg"
                style={{ borderRadius: "0px" }}
              >
                <Icon size={36} color="#B87333" className="mb-4" />
                <h3
                  className="mb-2 text-xl font-bold"
                  style={{ fontFamily: "var(--font-barlow)", color: "#374A67" }}
                >
                  {system.name}
                </h3>
                <p
                  className="mb-4 text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-opensans)", color: "#617891" }}
                >
                  {system.description}
                </p>
                <span
                  className="mt-auto inline-block text-sm font-medium transition-colors hover:opacity-80 cursor-pointer"
                  style={{ color: "#B87333", fontFamily: "var(--font-opensans)" }}
                >
                  Learn More →
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
