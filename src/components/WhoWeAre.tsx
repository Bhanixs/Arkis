import { Link } from "@tanstack/react-router";

export function WhoWeAre() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start">
          {/* Left column — 55% */}
          <div className="w-full lg:w-[55%]">
            {/* Small orange label */}
            <p
              className="mb-4 text-sm font-semibold uppercase tracking-widest"
              style={{ fontFamily: "var(--font-opensans)", color: "#B87333" }}
            >
              WHO WE ARE
            </p>

            {/* Heading */}
            <h2
              className="mb-8 text-4xl font-bold leading-tight"
              style={{ fontFamily: "var(--font-barlow)", color: "#2F2F2F" }}
            >
              A Forward-Thinking Construction Company
            </h2>

            {/* Body card */}
            <div className="mb-6 bg-[#374A67] p-8 text-white" style={{ borderRadius: "0px" }}>
              <p className="text-base leading-relaxed" style={{ fontFamily: "var(--font-opensans)" }}>
                Arkisan is a forward-thinking home construction company rooted in engineering precision and ethical practices. Founded with the mission to restore dignity and professionalism to India's home-building process, we bring structure, reliability, and transparency to what is often a chaotic and unregulated experience.
              </p>
            </div>

            {/* Italic paragraph */}
            <p
              className="mb-6 text-lg italic"
              style={{ fontFamily: "var(--font-opensans)", color: "#374A67" }}
            >
              At Arkisan, we don’t just build homes — we build trust, stability, and the future of every family we work with.
            </p>

            {/* CTA link */}
            <Link
              to="/about"
              className="inline-block text-base font-semibold transition-colors hover:opacity-80"
              style={{ color: "#B87333", fontFamily: "var(--font-opensans)" }}
            >
              Learn More About Us →
            </Link>
          </div>

          {/* Right column — 45% */}
          <div className="w-full lg:w-[45%]">
            <div className="aspect-[4/3] w-full bg-[#E8DFD3]" style={{ borderRadius: "0px" }}>
              {/* Placeholder image area */}
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
                alt="Construction team at work"
                className="h-full w-full object-cover"
                style={{ borderRadius: "0px" }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
