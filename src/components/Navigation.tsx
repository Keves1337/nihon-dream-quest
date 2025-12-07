import { useState, useEffect } from "react";
import { Plane, Map, DollarSign, Castle } from "lucide-react";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

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
          ? "bg-background/90 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display text-lg text-primary hover:text-primary/80 transition-colors"
        >
          A & J
        </button>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollTo("itinerary")}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Map className="w-4 h-4" />
            Itinerary
          </button>
          <button
            onClick={() => scrollTo("budget")}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <DollarSign className="w-4 h-4" />
            Budget
          </button>
        </div>

        {/* Japanese text */}
        <span className="text-sm text-muted-foreground font-japanese hidden sm:block">
          日本へようこそ
        </span>
      </div>
    </nav>
  );
};

export default Navigation;
