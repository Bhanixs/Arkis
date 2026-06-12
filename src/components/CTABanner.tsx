export function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-[#374A67] py-20">
      {/* Geometric triangle pattern — top-left */}
      <div
        className="pointer-events-none absolute -left-8 -top-8 opacity-[0.08]"
        style={{ color: "#B87333" }}
      >
        <svg width="200" height="200" viewBox="0 0 200 200" fill="currentColor">
          <polygon points="0,0 200,0 0,200" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        {/* Heading */}
        <h2
          className="mb-4 text-4xl font-bold text-white"
          style={{ fontFamily: "var(--font-barlow)" }}
        >
          Ready to Build Your Dream Home?
        </h2>

        {/* Subtext */}
        <p
          className="mx-auto mb-8 max-w-xl text-lg"
          style={{ fontFamily: "var(--font-opensans)", color: "#B8C8D8" }}
        >
          Free consultation. No commitment. Just clarity and a plan.
        </p>

        {/* Primary CTA */}
        <button
          className="mb-4 inline-block px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-[#9A6428]"
          style={{ backgroundColor: "#B87333", fontFamily: "var(--font-barlow)", borderRadius: "4px" }}
        >
          Start Your Home Journey
        </button>

        {/* Small text */}
        <p
          className="text-xs"
          style={{ fontFamily: "var(--font-opensans)", color: "#617891" }}
        >
          No obligation · Response within 24 hours
        </p>
      </div>
    </section>
  );
}
