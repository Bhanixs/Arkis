import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/systems", label: "Systems" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M16 3L29 28H22.5L16 14.5L9.5 28H3L16 3Z" fill="#B8732F" />
      <path d="M11.5 22H20.5L18.8 18.5H13.2L11.5 22Z" fill="#B8732F" />
    </svg>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const shellBg =
    scrolled || open
      ? "bg-[#374A67] shadow-md"
      : "bg-transparent";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${shellBg}`}
    >
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-4 md:px-8 lg:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <LogoMark className="h-8 w-8 lg:h-9 lg:w-9" />
          <span
            className="text-white text-xl lg:text-2xl font-bold tracking-[0.15em]"
            style={{ fontFamily: "'Barlow', system-ui, sans-serif" }}
          >
            ARKISAN
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              activeProps={{
                className:
                  "text-[#D4943B] after:scale-x-100",
              }}
              className="relative text-white text-sm font-medium tracking-wide transition-colors hover:text-[#D4943B] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#D4943B] after:transition-transform after:duration-200 hover:after:scale-x-100"
              style={{ fontFamily: "'Open Sans', system-ui, sans-serif" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-[#B8732F] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#9A6428]"
            style={{ borderRadius: "4px", fontFamily: "'Open Sans', system-ui, sans-serif" }}
          >
            Book Consultation
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center p-2 text-white"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile slide-down nav */}
      <div
        className={`md:hidden overflow-hidden bg-[#374A67] transition-[max-height] duration-300 ease-in-out ${
          open ? "max-h-[480px]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-4 pb-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              activeProps={{ className: "text-[#D4943B]" }}
              className="border-b border-white/10 py-4 text-white text-base font-medium tracking-wide"
              style={{ fontFamily: "'Open Sans', system-ui, sans-serif" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-5 inline-flex items-center justify-center bg-[#B8732F] px-5 py-3 text-base font-semibold text-white transition-colors hover:bg-[#9A6428]"
            style={{ borderRadius: "4px", fontFamily: "'Open Sans', system-ui, sans-serif" }}
          >
            Book Consultation
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
