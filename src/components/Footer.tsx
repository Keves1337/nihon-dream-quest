import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-foreground text-background">
      <div className="max-w-4xl mx-auto text-center">
        {/* Japanese pattern */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-sakura to-transparent" />
          <span className="text-sakura text-xl">愛</span>
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-sakura to-transparent" />
        </div>

        <h3 className="font-display text-2xl mb-2">
          Amit & Jonathan
        </h3>
        <p className="text-sm text-background/60 mb-4 font-display italic">
          Japan Honeymoon 2025/2026
        </p>

        <div className="flex items-center justify-center gap-2 text-sakura">
          <Heart className="w-4 h-4 fill-current" />
          <span className="text-sm">Made with love for our adventure</span>
          <Heart className="w-4 h-4 fill-current" />
        </div>

        <p className="mt-8 text-xs text-background/40">
          All prices are estimates and subject to change. 
          Book early for the best experience!
        </p>
      </div>
    </footer>
  );
};

export default Footer;
