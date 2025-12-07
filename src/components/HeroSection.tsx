import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-sakura-shrine.png";

const HeroSection = () => {
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

      {/* Decorative circles with animation */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-sakura/20 blur-3xl animate-pulse" />
      <div className="absolute bottom-40 left-10 w-48 h-48 rounded-full bg-gold/10 blur-2xl animate-pulse animation-delay-1000" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        {/* Japanese pattern divider */}
        <div className="flex items-center justify-center gap-4 mb-8 animate-fade-up">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <span className="text-primary/60 text-2xl animate-sway">桜</span>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground mb-4 animate-fade-up animation-delay-100 drop-shadow-lg">
          Amit & Jonathan
        </h1>
        
        <p className="font-display text-xl md:text-2xl text-primary italic mb-6 animate-fade-up animation-delay-200">
          ハネムーン • ירח דבש ביפן
        </p>

        <div className="flex items-center justify-center gap-3 mb-8 animate-fade-up animation-delay-300">
          <span className="px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full text-primary font-medium border border-primary/20">
            Dubai
          </span>
          <span className="text-gold text-2xl animate-float">✈</span>
          <span className="px-4 py-2 bg-sakura/30 backdrop-blur-sm rounded-full text-primary font-medium border border-sakura/30">
            Japan
          </span>
        </div>

        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-12 animate-fade-up animation-delay-500 drop-shadow-sm">
          9 ימים קסומים בארץ השמש העולה
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto mb-16 animate-fade-up animation-delay-700">
          <div className="text-center p-4 rounded-xl bg-background/50 backdrop-blur-sm border border-border/30 hover:scale-105 transition-transform duration-300">
            <p className="font-display text-3xl md:text-4xl text-primary">9</p>
            <p className="text-sm text-muted-foreground">ימים</p>
          </div>
          <div className="text-center p-4 rounded-xl bg-background/50 backdrop-blur-sm border border-border/30 hover:scale-105 transition-transform duration-300">
            <p className="font-display text-3xl md:text-4xl text-primary">4</p>
            <p className="text-sm text-muted-foreground">ערים</p>
          </div>
          <div className="text-center p-4 rounded-xl bg-background/50 backdrop-blur-sm border border-border/30 hover:scale-105 transition-transform duration-300">
            <p className="font-display text-3xl md:text-4xl text-primary">∞</p>
            <p className="text-sm text-muted-foreground">זכרונות</p>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToContent}
          className="animate-float text-primary/60 hover:text-primary transition-colors"
        >
          <ChevronDown className="w-8 h-8 mx-auto" />
          <span className="text-sm">גלול למטה</span>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
