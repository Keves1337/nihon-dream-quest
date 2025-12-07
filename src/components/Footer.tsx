import { Heart } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-12 px-6 bg-foreground text-background relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Japanese character */}
        <span className="text-sakura/60 text-sm mb-6 block">愛</span>

        <h3 className="font-display text-2xl mb-2">
          Amit & Jonathan
        </h3>
        <p className="text-sm text-background/60 mb-4 font-display italic">
          {t("Honeymoon in Japan • February 2026", "ירח דבש ביפן • פברואר 2026")}
        </p>

        <div className="flex items-center justify-center gap-2 text-sakura mb-6">
          <Heart className="w-4 h-4 fill-current" />
          <span className="text-sm">{t("Made with love for our adventure", "נוצר באהבה להרפתקה שלנו")}</span>
          <Heart className="w-4 h-4 fill-current" />
        </div>

        <p className="text-xs text-background/40 mb-6">
          {t(
            "All prices are estimates and subject to change. Book early for the best experience!",
            "כל המחירים הם הערכות וכפופים לשינויים. הזמינו מוקדם לחוויה הטובה ביותר!"
          )}
        </p>

        <div className="pt-6 border-t border-background/10">
          <p className="text-xs text-background/50">
            Developed, Designed and tested by Jonathan Milrad
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
