import { Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-[#374A67]"
      aria-label="Hero"
    >
      {/* Optional construction site background overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.12] mix-blend-overlay"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=80')",
        }}
      />

      {/* Subtle triangle pattern overlay, bottom-right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 -right-10 h-[600px] w-[600px] opacity-[0.08]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><polygon points='0,80 40,0 80,80' fill='none' stroke='%23B87333' stroke-width='1.5'/><polygon points='20,80 40,40 60,80' fill='none' stroke='%23B87333' stroke-width='1'/></svg>\")",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col items-center gap-12 px-6 py-24 md:px-10 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
        {/* Text block */}
        <div className="flex w-full flex-col items-center text-center lg:w-[60%] lg:items-start lg:text-left">
          <h1
            className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
            style={{ fontFamily: "'Barlow', system-ui, sans-serif" }}
          >
            <span className="block text-white">Building Homes</span>
            <span className="block text-[#B87333]">Built on Intelligence.</span>
          </h1>

          <p
            className="mt-6 max-w-[600px] text-lg text-[#B8C8D8] sm:text-xl"
            style={{ fontFamily: "'Open Sans', system-ui, sans-serif" }}
          >
            Arkisan is a construction intelligence lab that combines ancient
            architectural wisdom with modern adaptive systems — to build homes
            that truly perform.
          </p>

          <div className="mt-10 flex w-full flex-col gap-4 sm:flex-row sm:gap-4 lg:w-auto">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded bg-[#B87333] px-7 py-4 text-base font-semibold text-white shadow-md transition-colors duration-200 hover:bg-[#9A6428] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2 focus-visible:ring-offset-[#374A67]"
              style={{ fontFamily: "'Barlow', system-ui, sans-serif" }}
            >
              Start Your Home Journey
            </Link>
            <Link
              to="/systems"
              className="inline-flex items-center justify-center rounded border-2 border-white bg-transparent px-7 py-4 text-base font-semibold text-white transition-colors duration-200 hover:bg-white hover:text-[#374A67] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#374A67]"
              style={{ fontFamily: "'Barlow', system-ui, sans-serif" }}
            >
              Explore Our Systems
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="mt-14 flex w-full justify-center lg:justify-start">
            <ChevronDown
              className="h-7 w-7 animate-bounce text-[#B87333]"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Decorative element (right 40%) */}
        <div className="hidden lg:flex lg:w-[40%] lg:items-center lg:justify-center">
          <div className="relative h-[420px] w-[420px]">
            {/* Concentric geometric frames */}
            <div className="absolute inset-0 rounded-sm border border-[#B87333]/40 rotate-[8deg]" />
            <div className="absolute inset-6 rounded-sm border border-[#B87333]/30 -rotate-[6deg]" />
            <div className="absolute inset-14 rounded-sm border border-white/15 rotate-[3deg]" />
            {/* Center triangle mark */}
            <svg
              viewBox="0 0 200 200"
              className="absolute inset-0 m-auto h-48 w-48 text-[#B87333]"
              fill="none"
              aria-hidden="true"
            >
              <polygon
                points="100,20 180,170 20,170"
                stroke="currentColor"
                strokeWidth="2"
              />
              <polygon
                points="100,70 145,160 55,160"
                stroke="currentColor"
                strokeWidth="1.5"
                opacity="0.7"
              />
              <line
                x1="100"
                y1="20"
                x2="100"
                y2="170"
                stroke="currentColor"
                strokeWidth="1"
                opacity="0.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
