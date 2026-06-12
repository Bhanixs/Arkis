import { Link } from "@tanstack/react-router";
import { Linkedin, Instagram, Twitter } from "lucide-react";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/systems", label: "Systems" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

const SERVICE_LINKS = [
  "Residential Construction",
  "Commercial Buildings",
  "Turnkey Homes",
  "ACS Systems",
] as const;

function ColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3
      className="mb-5 text-sm font-bold uppercase tracking-widest"
      style={{ color: "#B87333", fontFamily: "'Barlow', system-ui, sans-serif" }}
    >
      {children}
    </h3>
  );
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="block text-sm transition-colors duration-200 hover:text-white"
      style={{ color: "#617891", fontFamily: "'Open Sans', system-ui, sans-serif" }}
    >
      {children}
    </Link>
  );
}

function FooterText({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="block text-sm"
      style={{ color: "#617891", fontFamily: "'Open Sans', system-ui, sans-serif" }}
    >
      {children}
    </span>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#2F2F2F]">
      <div className="mx-auto max-w-[1280px] px-4 py-14 md:px-8 md:py-16">
        {/* Main grid: 4 cols desktop, 2 cols tablet, 1 col mobile */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 — Brand */}
          <div>
            <h2
              className="text-2xl font-bold tracking-[0.15em] text-white"
              style={{ fontFamily: "'Barlow', system-ui, sans-serif" }}
            >
              ARKISAN
            </h2>
            <p
              className="mt-2 text-sm font-semibold"
              style={{ color: "#B87333", fontFamily: "'Open Sans', system-ui, sans-serif" }}
            >
              Modern. Strong. Reliable.
            </p>
            <p
              className="mt-4 text-sm leading-relaxed"
              style={{ color: "#617891", fontFamily: "'Open Sans', system-ui, sans-serif" }}
            >
              Building the future of construction through intelligence, innovation, and precision engineering.
            </p>
          </div>

          {/* Column 2 — Navigation */}
          <div>
            <ColumnHeading>Navigation</ColumnHeading>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <FooterLink key={link.to} to={link.to}>
                  {link.label}
                </FooterLink>
              ))}
            </nav>
          </div>

          {/* Column 3 — Services */}
          <div>
            <ColumnHeading>Services</ColumnHeading>
            <nav className="flex flex-col gap-3">
              {SERVICE_LINKS.map((label) => (
                <Link
                  key={label}
                  to="/services"
                  className="block text-sm transition-colors duration-200 hover:text-white"
                  style={{ color: "#617891", fontFamily: "'Open Sans', system-ui, sans-serif" }}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <ColumnHeading>Contact</ColumnHeading>
            <div className="flex flex-col gap-3">
              <FooterText>info@arkisan.com</FooterText>
              <FooterText>+91 80 1234 5678</FooterText>
              <FooterText>Bengaluru, India</FooterText>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#374A67]">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-4 px-4 py-6 md:flex-row md:px-8">
          <p
            className="text-sm"
            style={{ color: "#617891", fontFamily: "'Open Sans', system-ui, sans-serif" }}
          >
            &copy; {new Date().getFullYear()} ARKISAN. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[#617891] transition-colors duration-200 hover:text-white"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-[#617891] transition-colors duration-200 hover:text-white"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-[#617891] transition-colors duration-200 hover:text-white"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
