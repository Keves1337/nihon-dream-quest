import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToContent = () => {
    document.getElementById("itinerary")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: `
            linear-gradient(180deg, 
              hsl(350 60% 92%) 0%, 
              hsl(350 50% 88%) 30%,
              hsl(30 50% 95%) 70%,
              hsl(30 50% 98%) 100%
            )
          `,
        }}
      />

      {/* Decorative shrine silhouette */}
      <div className="absolute bottom-0 left-0 right-0 h-64 z-0 opacity-10">
        <svg
          viewBox="0 0 1200 300"
          className="w-full h-full"
          preserveAspectRatio="xMidYMax slice"
          fill="hsl(0 75% 35%)"
        >
          {/* Torii Gate */}
          <rect x="500" y="100" width="20" height="200" />
          <rect x="680" y="100" width="20" height="200" />
          <rect x="470" y="80" width="260" height="25" rx="3" />
          <rect x="480" y="130" width="240" height="15" rx="2" />
          {/* Mountains */}
          <path d="M 0 300 L 150 150 L 300 300 Z" opacity="0.5" />
          <path d="M 200 300 L 400 100 L 600 300 Z" opacity="0.3" />
          <path d="M 800 300 L 950 180 L 1100 300 Z" opacity="0.4" />
        </svg>
      </div>

      {/* Decorative circles */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-sakura/20 blur-3xl" />
      <div className="absolute bottom-40 left-10 w-48 h-48 rounded-full bg-gold/10 blur-2xl" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        {/* Japanese pattern divider */}
        <div className="flex items-center justify-center gap-4 mb-8 animate-fade-up">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <span className="text-primary/60 text-2xl">桜</span>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground mb-4 animate-fade-up animation-delay-100">
          Amit & Jonathan
        </h1>
        
        <p className="font-display text-xl md:text-2xl text-primary italic mb-6 animate-fade-up animation-delay-200">
          ハネムーン • Honeymoon Journey
        </p>

        <div className="flex items-center justify-center gap-3 mb-8 animate-fade-up animation-delay-300">
          <span className="px-4 py-2 bg-primary/10 rounded-full text-primary font-medium">
            Dubai
          </span>
          <span className="text-gold">✈</span>
          <span className="px-4 py-2 bg-sakura/30 rounded-full text-primary font-medium">
            Japan
          </span>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-up animation-delay-500">
          9 magical days exploring the Land of the Rising Sun
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto mb-16 animate-fade-up animation-delay-700">
          <div className="text-center">
            <p className="font-display text-3xl md:text-4xl text-primary">9</p>
            <p className="text-sm text-muted-foreground">Days</p>
          </div>
          <div className="text-center">
            <p className="font-display text-3xl md:text-4xl text-primary">4</p>
            <p className="text-sm text-muted-foreground">Cities</p>
          </div>
          <div className="text-center">
            <p className="font-display text-3xl md:text-4xl text-primary">∞</p>
            <p className="text-sm text-muted-foreground">Memories</p>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToContent}
          className="animate-float text-primary/60 hover:text-primary transition-colors"
        >
          <ChevronDown className="w-8 h-8 mx-auto" />
          <span className="text-sm">Scroll to explore</span>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
