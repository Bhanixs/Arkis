import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — ARKISAN Construction Intelligence Lab" },
      {
        name: "description",
        content:
          "Book a free consultation with Arkisan. No commitment — just clarity, a plan, and a path to your dream home.",
      },
    ],
  }),
  component: ContactPage,
});

const inputBase: React.CSSProperties = {
  fontFamily: "'Open Sans', system-ui, sans-serif",
  borderRadius: "0px",
  color: "#2F2F2F",
};

const labelStyle: React.CSSProperties = {
  fontFamily: "'Open Sans', system-ui, sans-serif",
  color: "#2F2F2F",
  fontSize: "14px",
  fontWeight: 600,
  display: "block",
  marginBottom: "6px",
};

function ContactPage() {
  const [fields, setFields] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    projectType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    console.log("Arkisan enquiry submitted:", fields);
  };

  return (
    <main>
      {/* ── SECTION 1: PAGE HERO ── */}
      <section className="bg-[#374A67] py-24">
        <div className="mx-auto max-w-[1280px] px-4 text-center sm:px-6 lg:px-8">
          <h1
            className="mb-4 text-4xl font-bold text-white sm:text-5xl"
            style={{ fontFamily: "'Barlow', system-ui, sans-serif" }}
          >
            Start Your Home Journey.
          </h1>
          <p
            className="mx-auto max-w-xl text-lg sm:text-xl"
            style={{
              color: "#B8C8D8",
              fontFamily: "'Open Sans', system-ui, sans-serif",
            }}
          >
            Free consultation. No commitment. Just clarity and a plan.
          </p>
        </div>
      </section>

      {/* ── SECTION 2: FORM + INFO ── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">

            {/* ── LEFT: CONTACT FORM (60%) ── */}
            <div className="w-full lg:w-[60%]">
              <div
                className="border border-[#DDDDDD] bg-[#F4F4F4] p-8 sm:p-10"
                style={{ borderRadius: "0px" }}
              >
                <div className="flex flex-col gap-5">
                  {/* Full Name */}
                  <div>
                    <label style={labelStyle}>Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={fields.fullName}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full border border-[#DDDDDD] bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[#374A67]"
                      style={inputBase}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label style={labelStyle}>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={fields.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full border border-[#DDDDDD] bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[#374A67]"
                      style={inputBase}
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label style={labelStyle}>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={fields.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full border border-[#DDDDDD] bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[#374A67]"
                      style={inputBase}
                    />
                  </div>

                  {/* City */}
                  <div>
                    <label style={labelStyle}>City</label>
                    <input
                      type="text"
                      name="city"
                      value={fields.city}
                      onChange={handleChange}
                      placeholder="Bengaluru, Mumbai..."
                      className="w-full border border-[#DDDDDD] bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[#374A67]"
                      style={inputBase}
                    />
                  </div>

                  {/* Project Type */}
                  <div>
                    <label style={labelStyle}>Project Type</label>
                    <select
                      name="projectType"
                      value={fields.projectType}
                      onChange={handleChange}
                      className="w-full border border-[#DDDDDD] bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[#374A67]"
                      style={{ ...inputBase, color: fields.projectType ? "#2F2F2F" : "#9CA3AF" }}
                    >
                      <option value="" disabled>Select a project type</option>
                      <option value="Residential Home">Residential Home</option>
                      <option value="Commercial Building">Commercial Building</option>
                      <option value="Renovation">Renovation</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label style={labelStyle}>Message / Project Details</label>
                    <textarea
                      name="message"
                      value={fields.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your project, site, budget, and timeline..."
                      className="w-full resize-none border border-[#DDDDDD] bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[#374A67]"
                      style={inputBase}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="mt-1 w-full py-4 text-base font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#9A6428]"
                    style={{
                      backgroundColor: "#B87333",
                      borderRadius: "4px",
                      fontFamily: "'Barlow', system-ui, sans-serif",
                    }}
                  >
                    Send My Enquiry
                  </button>
                </div>
              </div>
            </div>

            {/* ── RIGHT: CONTACT INFO (40%) ── */}
            <div className="w-full lg:w-[40%]">
              <div className="flex flex-col gap-8">
                {/* Info blocks */}
                {[
                  {
                    icon: Mail,
                    label: "Email Us",
                    value: "hello@arkisan.in",
                  },
                  {
                    icon: Phone,
                    label: "Call Us",
                    value: "+91 98765 43210",
                  },
                  {
                    icon: MapPin,
                    label: "Find Us",
                    value: "Bengaluru, Karnataka, India",
                  },
                ].map((info) => {
                  const Icon = info.icon;
                  return (
                    <div key={info.label} className="flex items-start gap-4">
                      <Icon size={32} className="shrink-0 mt-0.5" style={{ color: "#B87333" }} />
                      <div>
                        <p
                          className="text-base font-bold"
                          style={{
                            fontFamily: "'Barlow', system-ui, sans-serif",
                            color: "#2F2F2F",
                          }}
                        >
                          {info.label}
                        </p>
                        <p
                          className="mt-1 text-sm"
                          style={{
                            fontFamily: "'Open Sans', system-ui, sans-serif",
                            color: "#617891",
                          }}
                        >
                          {info.value}
                        </p>
                      </div>
                    </div>
                  );
                })}

                {/* Tagline card */}
                <div
                  className="mt-4 bg-[#374A67] p-8"
                  style={{ borderRadius: "0px" }}
                >
                  <p
                    className="mb-3 text-xl font-bold"
                    style={{
                      fontFamily: "'Barlow', system-ui, sans-serif",
                      color: "#B87333",
                    }}
                  >
                    Modern. Strong. Reliable.
                  </p>
                  <p
                    className="text-sm leading-relaxed text-white"
                    style={{ fontFamily: "'Open Sans', system-ui, sans-serif" }}
                  >
                    Every family deserves a home built with precision,
                    transparency, and care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
