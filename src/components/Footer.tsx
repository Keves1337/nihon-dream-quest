import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-foreground text-background relative overflow-hidden">
      {/* Floating decorations */}
      <div className="absolute top-4 left-10 text-2xl opacity-20 animate-float">🌸</div>
      <div className="absolute top-8 right-16 text-xl opacity-20 animate-float animation-delay-500">⛩️</div>
      <div className="absolute bottom-4 left-1/4 text-xl opacity-20 animate-float animation-delay-1000">🎐</div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Japanese pattern */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-sakura to-transparent" />
          <span className="text-sakura text-xl animate-pulse">愛</span>
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-sakura to-transparent" />
        </div>

        <h3 className="font-display text-2xl mb-2">
          Amit & Jonathan
        </h3>
        <p className="text-sm text-background/60 mb-4 font-display italic">
          ירח דבש ביפן • פברואר 2026
        </p>

        <div className="flex items-center justify-center gap-2 text-sakura">
          <Heart className="w-4 h-4 fill-current animate-pulse" />
          <span className="text-sm">נוצר באהבה להרפתקה שלנו</span>
          <Heart className="w-4 h-4 fill-current animate-pulse" />
        </div>

        <p className="mt-8 text-xs text-background/40">
          כל המחירים הם הערכות וכפופים לשינויים. 
          הזמינו מוקדם לחוויה הטובה ביותר!
        </p>
      </div>
    </footer>
  );
};

export default Footer;
