"use client";

import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import LogosStrip from "@/components/LogosStrip";
import Moment from "@/components/Moment";
import Ticker from "@/components/Ticker";
import SkillsSection from "@/components/SkillsSection";
import WorkSection from "@/components/WorkSection";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import NoiseOverlay from "@/components/NoiseOverlay";

export default function Home() {
  return (
    <>
      <NoiseOverlay />
      <CursorGlow />
      <Nav />
      <main>
        {/* First viewport: hero + logos strip together */}
        <div style={{ minHeight: "calc(100vh - 56px)", display: "flex", flexDirection: "column" }}>
          <Hero />
          <LogosStrip />
        </div>
        <Moment />
        <Ticker />
        <SkillsSection />
        <WorkSection />
      </main>
      <Footer />
    </>
  );
}
