export default function TrustStrip() {
  const stats = [
    { number: "50+", label: "Homes Built" },
    { number: "8+", label: "Years Experience" },
    { number: "5", label: "Cities Served" },
    { number: "100%", label: "Transparent Process" },
  ];

  return (
    <section
      className="w-full border-y border-[#DDDDDD] bg-[#F4F4F4] py-12"
      aria-label="Trust statistics"
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-0">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center"
            >
              <span
                className="text-4xl font-bold text-[#374A67] sm:text-5xl lg:text-6xl"
                style={{ fontFamily: "'Barlow', system-ui, sans-serif" }}
              >
                {stat.number}
              </span>
              <span
                className="mt-2 text-sm font-normal text-[#2F2F2F] sm:text-base"
                style={{ fontFamily: "'Open Sans', system-ui, sans-serif" }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
