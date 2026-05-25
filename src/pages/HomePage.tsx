import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import HighlightSection from "../components/HighlightSection";

// ======================================================
// HOMEPAGE
// ======================================================

export function HomePage() {
  return (
    <>
      {/* ======================================================
          HERO SECTION
      ====================================================== */}
      <HeroSection />

      {/* ======================================================
          ABOUT SECTION
      ====================================================== */}
      <AboutSection />

      {/* ======================================================
          SPEAKERS / HIGHLIGHT SECTION
      ====================================================== */}
      <HighlightSection />
    </>
  );
}

export default HomePage;