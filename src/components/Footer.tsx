import { Heart } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-8 md:py-12 px-4 md:px-6 bg-ink text-cream relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Japanese character */}
        <span className="text-sakura text-lg md:text-xl mb-4 md:mb-6 block font-bold">愛</span>

        <h3 className="font-display text-2xl md:text-3xl mb-2 text-cream">
          Amit & Jonathan
        </h3>
        <p className="text-sm md:text-base text-cream/80 mb-3 md:mb-4 font-display italic">
          {t("Honeymoon in Japan • February 2026", "ירח דבש ביפן • פברואר 2026")}
        </p>

        <div className="flex items-center justify-center gap-2 text-sakura mb-4 md:mb-6">
          <Heart className="w-4 h-4 md:w-5 md:h-5 fill-current" />
          <span className="text-sm md:text-base font-medium">{t("Made with love for our adventure", "נוצר באהבה להרפתקה שלנו")}</span>
          <Heart className="w-4 h-4 md:w-5 md:h-5 fill-current" />
        </div>

        <div className="pt-4 md:pt-6 border-t border-cream/20">
          <p className="text-sm text-cream/70">
            Developed, Designed and tested by Jonathan Milrad
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
