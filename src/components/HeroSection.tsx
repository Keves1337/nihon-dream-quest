import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-sakura-shrine.png";
import { useLanguage } from "@/hooks/useLanguage";

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToContent = () => {
    document.getElementById("itinerary")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Overlay gradient */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: `
            linear-gradient(180deg, 
              hsl(350 60% 92% / 0.7) 0%, 
              hsl(350 50% 88% / 0.6) 30%,
              hsl(30 50% 95% / 0.5) 70%,
              hsl(30 50% 98% / 0.8) 100%
            )
          `,
        }}
      />

      {/* Decorative circles with animation - hidden on mobile */}
      <div className="absolute top-20 right-20 w-32 md:w-64 h-32 md:h-64 rounded-full bg-sakura/20 blur-3xl animate-pulse" />
      <div className="absolute bottom-40 left-10 w-24 md:w-48 h-24 md:h-48 rounded-full bg-gold/10 blur-2xl animate-pulse animation-delay-1000" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 md:px-6 max-w-4xl mx-auto pt-16 md:pt-0">
        {/* Japanese character */}
        <span className="text-primary/40 font-display text-xs md:text-sm tracking-widest uppercase mb-4 md:mb-6 block animate-fade-up">桜</span>

        <h1 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-8xl text-foreground mb-3 md:mb-4 animate-fade-up animation-delay-100 drop-shadow-lg">
          Amit & Jonathan
        </h1>
        
        <p className="font-display text-base sm:text-lg md:text-2xl text-primary italic mb-4 md:mb-6 animate-fade-up animation-delay-200">
          {t("Honeymoon in Japan", "ירח דבש ביפן")} • ハネムーン
        </p>

        <div className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4 animate-fade-up animation-delay-300">
          <span className="px-3 py-1.5 md:px-4 md:py-2 bg-primary/10 backdrop-blur-sm rounded-full text-primary text-sm md:text-base font-medium border border-primary/20">
            {t("Israel", "ישראל")}
          </span>
          <span className="text-gold text-xl md:text-2xl animate-float">✈️</span>
          <span className="px-3 py-1.5 md:px-4 md:py-2 bg-sakura/30 backdrop-blur-sm rounded-full text-primary text-sm md:text-base font-medium border border-sakura/30">
            {t("Japan", "יפן")}
          </span>
        </div>

        {/* Date badge */}
        <div className="inline-block px-4 py-1.5 md:px-6 md:py-2 bg-gold/20 backdrop-blur-sm rounded-full border border-gold/30 mb-6 md:mb-8 animate-fade-up animation-delay-300">
          <p className="text-xs md:text-sm font-medium text-foreground">
            {t("February 11-21, 2026", "11-21 בפברואר 2026")}
          </p>
        </div>

        <p className="text-sm sm:text-base md:text-xl text-foreground max-w-2xl mx-auto mb-8 md:mb-12 animate-fade-up animation-delay-500 px-2 font-medium [text-shadow:_0_1px_12px_rgb(255_255_255_/_90%),_0_0_20px_rgb(255_255_255_/_80%)]">
          {t("10 magical days in the Land of the Rising Sun", "10 ימים קסומים בארץ השמש העולה")}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 md:gap-4 max-w-sm md:max-w-md mx-auto mb-10 md:mb-16 animate-fade-up animation-delay-700">
          <div className="text-center p-2 md:p-4 rounded-xl bg-background/50 backdrop-blur-sm border border-border/30 hover:scale-105 hover:bg-sakura/20 transition-all duration-300 group">
            <p className="font-display text-2xl md:text-4xl text-primary">10</p>
            <p className="text-xs md:text-sm text-muted-foreground">{t("Days", "ימים")}</p>
          </div>
          <div className="text-center p-2 md:p-4 rounded-xl bg-background/50 backdrop-blur-sm border border-border/30 hover:scale-105 hover:bg-sakura/20 transition-all duration-300 group">
            <p className="font-display text-2xl md:text-4xl text-primary">4</p>
            <p className="text-xs md:text-sm text-muted-foreground">{t("Cities", "ערים")}</p>
          </div>
          <div className="text-center p-2 md:p-4 rounded-xl bg-background/50 backdrop-blur-sm border border-border/30 hover:scale-105 hover:bg-sakura/20 transition-all duration-300 group">
            <p className="font-display text-2xl md:text-4xl text-primary">∞</p>
            <p className="text-xs md:text-sm text-muted-foreground">{t("Memories", "זיכרונות")}</p>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToContent}
          className="animate-float text-primary/60 hover:text-primary transition-colors"
        >
          <ChevronDown className="w-6 h-6 md:w-8 md:h-8 mx-auto" />
          <span className="text-xs md:text-sm">{t("Scroll down", "גללו למטה")}</span>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
