import SakuraPetals from "@/components/SakuraPetals";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ItinerarySection from "@/components/ItinerarySection";
import DisneySection from "@/components/DisneySection";
import BudgetSummary from "@/components/BudgetSummary";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Floating sakura petals */}
      <SakuraPetals />

      <Navigation />
      <main>
        <HeroSection />
        <ItinerarySection />
        <DisneySection />
        <BudgetSummary />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
