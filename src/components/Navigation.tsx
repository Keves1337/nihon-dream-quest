import { useState, useEffect } from "react";
import { Map, DollarSign } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-soft py-2 md:py-3"
          : "bg-transparent py-3 md:py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display text-base md:text-lg text-primary hover:text-primary/80 transition-colors"
        >
          A & J
        </button>

        {/* Navigation Links */}
        <div className="flex items-center gap-3 md:gap-6">
          <button
            onClick={() => scrollTo("itinerary")}
            className="flex items-center gap-1 md:gap-2 text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Map className="w-3 h-3 md:w-4 md:h-4" />
            <span className="hidden sm:inline">{t("Itinerary", "מסלול")}</span>
          </button>
          <button
            onClick={() => scrollTo("budget")}
            className="flex items-center gap-1 md:gap-2 text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <DollarSign className="w-3 h-3 md:w-4 md:h-4" />
            <span className="hidden sm:inline">{t("Budget", "תקציב")}</span>
          </button>
        </div>

        {/* Language Toggle */}
        <button
          onClick={toggleLanguage}
          className="px-2 py-1 md:px-3 md:py-1.5 text-xs md:text-sm font-medium rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-colors"
        >
          {language === "en" ? "עב" : "EN"}
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
