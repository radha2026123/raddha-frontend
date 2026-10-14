"use client";

import ContactSection from "./ContactSection";
import FeaturesSection from "./FeaturesSection";
import IntroSection from "./IntroSection";
import MediaSection from "./MediaSection";
import SectionBadge from "./SectionBadge";
import TeamSection from "./TeamSection";



export default function MissionVisionComponent() {
  return (
    <div className="mt-10 flex w-full flex-col items-center">
      <SectionBadge
        label="About Us"
        className="mb-6 rounded px-4 py-2 shadow md:mr-240"
      />

      <IntroSection />
      <FeaturesSection />
      <TeamSection />
      <ContactSection />
    </div>
  );
}
