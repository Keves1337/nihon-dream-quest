import { useState } from "react";
import FlightAnimation from "@/components/FlightAnimation";
import SakuraPetals from "@/components/SakuraPetals";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ItinerarySection from "@/components/ItinerarySection";
import DisneySection from "@/components/DisneySection";
import BudgetSummary from "@/components/BudgetSummary";
import Footer from "@/components/Footer";

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      {/* Flight Animation Intro */}
      {showIntro && <FlightAnimation onComplete={() => setShowIntro(false)} />}

      {/* Floating sakura petals */}
      {!showIntro && <SakuraPetals />}

      {/* Main content */}
      {!showIntro && (
        <>
          <Navigation />
          <main>
            <HeroSection />
            <ItinerarySection />
            <DisneySection />
            <BudgetSummary />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Index;
