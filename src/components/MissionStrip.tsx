import { Hammer, Home, Users } from "lucide-react";

const cards = [
  {
    icon: Hammer,
    text: "To build homes that are engineered by professionals, powered by systems, and delivered with zero compromise.",
  },
  {
    icon: Home,
    text: "To offer turnkey and ready-to-own homes that balance affordability with uncompromising quality.",
  },
  {
    icon: Users,
    text: "To empower families through transparent processes, skilled teams, and tech-enabled construction.",
  },
];

export function MissionStrip() {
  return (
    <section className="bg-[#374A67] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <h2
          className="mb-12 text-center text-4xl font-bold text-white"
          style={{ fontFamily: "var(--font-barlow)" }}
        >
          Our Mission
        </h2>

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center bg-[#B87333] p-8 text-center text-white"
                style={{ borderRadius: "0px" }}
              >
                <Icon size={40} color="white" className="mb-4" />
                <p
                  className="text-base leading-relaxed"
                  style={{ fontFamily: "var(--font-opensans)" }}
                >
                  {card.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
