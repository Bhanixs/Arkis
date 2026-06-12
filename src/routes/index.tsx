import { createFileRoute } from "@tanstack/react-router";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import { WhoWeAre } from "@/components/WhoWeAre";
import { ACSSystems } from "@/components/ACSSystems";
import { MissionStrip } from "@/components/MissionStrip";
import { OurValues } from "@/components/OurValues";
import { HowItWorks } from "@/components/HowItWorks";
import { CTABanner } from "@/components/CTABanner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ARKISAN — Construction Intelligence Lab" },
      { name: "description", content: "ARKISAN is a Construction Intelligence Lab building systems for the built environment." },
      { property: "og:title", content: "ARKISAN — Construction Intelligence Lab" },
      { property: "og:description", content: "ARKISAN is a Construction Intelligence Lab building systems for the built environment." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <WhoWeAre />
      <ACSSystems />
      <MissionStrip />
      <OurValues />
      <HowItWorks />
      <CTABanner />
    </main>
  );
}
