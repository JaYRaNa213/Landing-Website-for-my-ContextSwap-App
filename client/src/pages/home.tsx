import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import Features from "@/components/features";

import UseCases from "@/components/use-cases";
import TechSpecs from "@/components/tech-specs";
import FAQ from "@/components/faq";
import Demo from "@/components/demo";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Navigation />
      <Hero />
      <Features />
      <Demo />
      <UseCases />
      <TechSpecs />
      <FAQ />
      {/* <FinalCTA /> */}
      <Footer />
    </div>
  );
}
