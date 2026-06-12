
const steps = [
  {
    number: 1,
    title: "Free Consultation",
    description: "We listen, understand your needs, site, and budget.",
  },
  {
    number: 2,
    title: "Design & Planning",
    description: "ACS-integrated design, engineered for your climate and lifestyle.",
  },
  {
    number: 3,
    title: "Construction",
    description: "Professional team, transparent process, zero compromise.",
  },
  {
    number: 4,
    title: "Handover",
    description: "Your home. Delivered. Exactly as promised.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-[#F4F4F4] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <h2
          className="mb-12 text-center text-4xl font-bold"
          style={{ fontFamily: "var(--font-barlow)", color: "#2F2F2F" }}
        >
          How We Build Your Home
        </h2>

        {/* Steps */}
        <div className="relative flex flex-col gap-8 lg:flex-row lg:gap-0">
          {/* Dashed connector line — desktop only */}
          <div
            className="absolute top-[20px] left-[12.5%] right-[12.5%] hidden border-t-2 border-dashed lg:block"
            style={{ borderColor: "#DDDDDD" }}
          />

          {steps.map((step) => {
            return (
              <div
                key={step.number}
                className="relative z-10 flex flex-1 flex-col items-center text-center"
              >
                {/* Orange circle number */}
                <div
                  className="mb-4 flex h-10 w-10 items-center justify-center text-lg font-bold text-white"
                  style={{ backgroundColor: "#B87333", borderRadius: "50%", fontFamily: "'Barlow', system-ui, sans-serif" }}
                >
                  {step.number}
                </div>

                {/* Step title */}
                <h3
                  className="mb-2 text-xl font-semibold"
                  style={{ fontFamily: "var(--font-barlow)", color: "#374A67" }}
                >
                  {step.title}
                </h3>

                {/* Step description */}
                <p
                  className="max-w-[220px] text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-opensans)", color: "#617891" }}
                >
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
