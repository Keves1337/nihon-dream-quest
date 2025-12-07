import { Train, Utensils, Ticket, ShoppingBag, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";
import ramenAnime from "@/assets/japan-ramen-anime.png";
import shinkansenAnime from "@/assets/shinkansen-anime.png";
import kyotoAnime from "@/assets/kyoto-torii-anime.png";
import osakaAnime from "@/assets/osaka-dotonbori-anime.png";

interface BudgetItem {
  categoryEn: string;
  categoryHe: string;
  icon: React.ReactNode;
  items: { nameEn: string; nameHe: string; cost: number; notesEn?: string; notesHe?: string }[];
  image?: string;
  emoji: string;
}

const budgetData: BudgetItem[] = [
  {
    categoryEn: "Transportation",
    categoryHe: "תחבורה",
    icon: <Train className="w-5 h-5" />,
    emoji: "🚄",
    image: shinkansenAnime,
    items: [
      { nameEn: "7-Day JR Pass", nameHe: "JR Pass ל-7 ימים", cost: 2400, notesEn: "2 tickets × ¥50,000", notesHe: "2 כרטיסים × ¥50,000" },
      { nameEn: "Tokyo Metro & Local Transport", nameHe: "מטרו טוקיו ותחבורה מקומית", cost: 400, notesEn: "IC cards, buses", notesHe: "כרטיסי IC, אוטובוסים" },
      { nameEn: "Airport Transfers", nameHe: "העברות משדה התעופה", cost: 300, notesEn: "Narita Express", notesHe: "Narita Express" },
    ],
  },
  {
    categoryEn: "Food & Drinks",
    categoryHe: "אוכל ושתייה",
    icon: <Utensils className="w-5 h-5" />,
    emoji: "🍜",
    image: ramenAnime,
    items: [
      { nameEn: "Daily Meals", nameHe: "ארוחות יומיות", cost: 4000, notesEn: "~₪400/day × 10 days", notesHe: "כ-₪400 ליום × 10 ימים" },
      { nameEn: "Special Dining Experiences", nameHe: "חוויות קולינריות מיוחדות", cost: 800, notesEn: "Valentine's dinner, izakaya", notesHe: "ארוחת ולנטיינז, איזקאיה" },
    ],
  },
  {
    categoryEn: "Attractions & Tickets",
    categoryHe: "אטרקציות וכניסות",
    icon: <Ticket className="w-5 h-5" />,
    emoji: "🎢",
    image: kyotoAnime,
    items: [
      { nameEn: "Tokyo Disneyland (1 day)", nameHe: "דיסנילנד טוקיו (יום אחד)", cost: 700, notesEn: "2 tickets", notesHe: "2 כרטיסים" },
      { nameEn: "Tokyo DisneySea (1 day)", nameHe: "דיסני-סי טוקיו (יום אחד)", cost: 700, notesEn: "2 tickets", notesHe: "2 כרטיסים" },
      { nameEn: "Kyoto Temples", nameHe: "מקדשים בקיוטו", cost: 200, notesEn: "Fushimi Inari, Kinkaku-ji & more", notesHe: "פושימי אינארי, קינקקו-ג׳י ועוד" },
      { nameEn: "Osaka Castle & More", nameHe: "טירת אוסקה ואטרקציות נוספות", cost: 200, notesEn: "Various entry fees", notesHe: "דמי כניסה שונים" },
      { nameEn: "Onsen Experience", nameHe: "חוויית אונסן", cost: 400, notesEn: "Ryokan onsen", notesHe: "אונסן בריוקאן" },
    ],
  },
  {
    categoryEn: "Shopping & Souvenirs",
    categoryHe: "קניות ומזכרות",
    icon: <ShoppingBag className="w-5 h-5" />,
    emoji: "🛍️",
    image: osakaAnime,
    items: [
      { nameEn: "Souvenirs & Gifts", nameHe: "מזכרות ומתנות", cost: 1500, notesEn: "Estimate", notesHe: "הערכה" },
      { nameEn: "Miscellaneous", nameHe: "הוצאות שונות", cost: 500, notesEn: "Emergency & extras", notesHe: "חירום ותוספות" },
    ],
  },
];

const BudgetSummary = () => {
  const { t } = useLanguage();

  const calculateCategoryTotal = (items: { cost: number }[]) => 
    items.reduce((sum, item) => sum + item.cost, 0);

  const grandTotal = budgetData.reduce(
    (sum, category) => sum + calculateCategoryTotal(category.items),
    0
  );

  return (
    <section id="budget" className="py-20 px-6 bg-muted/30 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-gold/60 font-display text-sm tracking-widest uppercase mb-2 block">予算</span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            {t("Trip Budget", "תקציב הטיול")}
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t("Estimated expenses during the trip • Excluding flights and accommodation", "הוצאות משוערות במהלך הטיול • ללא טיסות ולינה")}
          </p>
        </div>

        {/* Budget Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {budgetData.map((category, idx) => (
            <Card
              key={t(category.categoryEn, category.categoryHe)}
              className="card-elevated overflow-hidden animate-fade-up group relative"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              {/* Floating emoji decoration */}
              <div className="absolute top-4 right-4 text-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-125 group-hover:-rotate-12 z-20">
                {category.emoji}
              </div>
              
              {/* Category image */}
              {category.image && (
                <div className="h-36 overflow-hidden relative">
                  <img 
                    src={category.image} 
                    alt={t(category.categoryEn, category.categoryHe)}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  
                  {/* Sparkle overlay on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-4 left-4 text-gold animate-pulse">✨</div>
                    <div className="absolute top-8 right-12 text-sakura animate-pulse animation-delay-200">✨</div>
                    <div className="absolute bottom-12 left-8 text-gold animate-pulse animation-delay-500">✨</div>
                  </div>
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:bg-sakura/20">
                    {category.icon}
                  </div>
                  <h3 className="font-display text-xl text-foreground">
                    {t(category.categoryEn, category.categoryHe)}
                  </h3>
                </div>

                <div className="space-y-3 mb-4">
                  {category.items.map((item, i) => (
                    <div 
                      key={i} 
                      className="flex justify-between items-start opacity-0 animate-fade-up hover:bg-sakura/5 p-2 -mx-2 rounded-lg transition-colors duration-300"
                      style={{ animationDelay: `${(idx * 150) + (i * 75)}ms`, animationFillMode: 'forwards' }}
                    >
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">{t(item.nameEn, item.nameHe)}</p>
                        {(item.notesEn || item.notesHe) && (
                          <p className="text-xs text-muted-foreground">{t(item.notesEn || "", item.notesHe || "")}</p>
                        )}
                      </div>
                      <span className="text-sm font-semibold text-primary ml-2 tabular-nums">
                        ₪{item.cost.toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-border group-hover:border-sakura/30 transition-colors duration-300">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{t("Category Total", "סה״כ קטגוריה")}</span>
                    <span className="font-display text-xl text-primary group-hover:scale-110 transition-transform duration-300">
                      ₪{calculateCategoryTotal(category.items).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Grand Total */}
        <Card className="card-elevated max-w-xl mx-auto p-8 bg-gradient-to-br from-primary/5 via-sakura/10 to-gold/5 relative overflow-hidden group">
          {/* Animated decorations */}
          <div className="absolute top-2 right-2 text-2xl animate-sway">🌸</div>
          <div className="absolute bottom-2 left-2 text-2xl animate-sway animation-delay-500">🎌</div>
          <div className="absolute top-1/2 right-4 text-gold/20 animate-pulse">
            <Sparkles className="w-8 h-8" />
          </div>
          <div className="absolute top-1/2 left-4 text-sakura/20 animate-pulse animation-delay-700">
            <Sparkles className="w-6 h-6" />
          </div>
          
          <div className="text-center relative z-10">
            <p className="text-muted-foreground mb-2 text-lg">{t("Total Trip Expenses", "סה״כ הוצאות בטיול")}</p>
            <p className="font-display text-5xl md:text-6xl text-primary mb-3 animate-scale-in group-hover:scale-105 transition-transform duration-300">
              ₪{grandTotal.toLocaleString()}
            </p>
            <div className="flex justify-center gap-4 text-sm text-muted-foreground">
              <span>≈ ${Math.round(grandTotal / 3.7).toLocaleString()}</span>
              <span>•</span>
              <span>≈ ¥{Math.round(grandTotal * 40.5).toLocaleString()}</span>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-border/50 grid grid-cols-2 gap-4 text-center">
            <div className="p-3 rounded-lg bg-background/50 hover:bg-sakura/10 transition-colors duration-300">
              <p className="text-xl font-display text-primary">₪{Math.round(grandTotal / 10).toLocaleString()}</p>
              <p className="text-xs text-muted-foreground">{t("Average per day", "ממוצע ליום")}</p>
            </div>
            <div className="p-3 rounded-lg bg-background/50 hover:bg-sakura/10 transition-colors duration-300">
              <p className="text-xl font-display text-primary">₪{Math.round(grandTotal / 2).toLocaleString()}</p>
              <p className="text-xs text-muted-foreground">{t("Per person", "לכל אחד")}</p>
            </div>
          </div>

          <div className="mt-6 p-4 rounded-lg bg-gold/10 border border-gold/20">
            <p className="text-sm text-center text-muted-foreground">
              💡 <strong>{t("Note:", "שימו לב:")}</strong> {t(
                "This budget excludes flights and accommodation. Prices are estimates and may vary.",
                "תקציב זה אינו כולל טיסות ולינה. מחירים משוערים ועשויים להשתנות."
              )}
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default BudgetSummary;
