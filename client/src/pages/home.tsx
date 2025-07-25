import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import Features from "@/components/features";

import UseCases from "@/components/use-cases";
import TechSpecs from "@/components/tech-specs";
import FAQ from "@/components/faq";
import Demo from "@/components/demo";
import AboutUsSection from "@/components/AboutSection";

import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">

      <Navigation />
      <Hero />
      <Features />
      {/* <Demo /> */}
      <UseCases />
      <TechSpecs />
      <FAQ />
      {/* <FinalCTA /> */}
      <AboutUsSection />
      <Footer />
    </div>
  );
}
