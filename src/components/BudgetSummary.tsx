import { Train, Utensils, Ticket, ShoppingBag, Sparkles, Cherry, Leaf } from "lucide-react";
import { Card } from "@/components/ui/card";
import ramenAnime from "@/assets/japan-ramen-anime.png";
import shinkansenAnime from "@/assets/shinkansen-anime.png";
import kyotoAnime from "@/assets/kyoto-torii-anime.png";
import osakaAnime from "@/assets/osaka-dotonbori-anime.png";

interface BudgetItem {
  category: string;
  icon: React.ReactNode;
  items: { name: string; cost: number; notes?: string }[];
  image?: string;
  emoji: string;
}

const budgetData: BudgetItem[] = [
  {
    category: "תחבורה",
    icon: <Train className="w-5 h-5" />,
    emoji: "🚄",
    image: shinkansenAnime,
    items: [
      { name: "JR Pass ל-7 ימים", cost: 2400, notes: "2 כרטיסים × ¥50,000" },
      { name: "מטרו טוקיו ותחבורה מקומית", cost: 400, notes: "כרטיסי IC, אוטובוסים" },
      { name: "העברות משדה התעופה", cost: 300, notes: "Narita Express" },
    ],
  },
  {
    category: "אוכל ושתייה",
    icon: <Utensils className="w-5 h-5" />,
    emoji: "🍜",
    image: ramenAnime,
    items: [
      { name: "ארוחות יומיות", cost: 4000, notes: "כ-₪400 ליום × 10 ימים" },
      { name: "חוויות קולינריות מיוחדות", cost: 800, notes: "ארוחת ולנטיינז, איזקאיה" },
    ],
  },
  {
    category: "אטרקציות וכניסות",
    icon: <Ticket className="w-5 h-5" />,
    emoji: "🎢",
    image: kyotoAnime,
    items: [
      { name: "דיסנילנד טוקיו (יום אחד)", cost: 700, notes: "2 כרטיסים" },
      { name: "דיסני-סי טוקיו (יום אחד)", cost: 700, notes: "2 כרטיסים" },
      { name: "מקדשים בקיוטו", cost: 200, notes: "פושימי אינארי, קינקקו-ג׳י ועוד" },
      { name: "טירת אוסקה ואטרקציות נוספות", cost: 200, notes: "דמי כניסה שונים" },
      { name: "חוויית אונסן", cost: 400, notes: "אונסן בריוקאן" },
    ],
  },
  {
    category: "קניות ומזכרות",
    icon: <ShoppingBag className="w-5 h-5" />,
    emoji: "🛍️",
    image: osakaAnime,
    items: [
      { name: "מזכרות ומתנות", cost: 1500, notes: "הערכה" },
      { name: "הוצאות שונות", cost: 500, notes: "חירום ותוספות" },
    ],
  },
];

const BudgetSummary = () => {
  const calculateCategoryTotal = (items: { cost: number }[]) => 
    items.reduce((sum, item) => sum + item.cost, 0);

  const grandTotal = budgetData.reduce(
    (sum, category) => sum + calculateCategoryTotal(category.items),
    0
  );

  return (
    <section id="budget" className="py-20 px-6 bg-muted/30 relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 text-4xl animate-float opacity-20">🌸</div>
      <div className="absolute top-40 right-20 text-3xl animate-float animation-delay-500 opacity-20">🎋</div>
      <div className="absolute bottom-32 left-1/4 text-2xl animate-float animation-delay-1000 opacity-20">🏯</div>
      <div className="absolute bottom-20 right-10 text-3xl animate-float animation-delay-700 opacity-20">⛩️</div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-6 h-6 text-gold animate-pulse" />
            <span className="text-gold font-display text-lg">予算</span>
            <Sparkles className="w-6 h-6 text-gold animate-pulse" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            תקציב הטיול
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            הוצאות משוערות במהלך הטיול • ללא טיסות ולינה
          </p>
        </div>

        {/* Budget Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {budgetData.map((category, idx) => (
            <Card
              key={category.category}
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
                    alt={category.category}
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
                    {category.category}
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
                        <p className="text-sm font-medium text-foreground">{item.name}</p>
                        {item.notes && (
                          <p className="text-xs text-muted-foreground">{item.notes}</p>
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
                    <span className="text-sm text-muted-foreground">סה״כ קטגוריה</span>
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
            <p className="text-muted-foreground mb-2 text-lg">סה״כ הוצאות בטיול</p>
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
              <p className="text-xs text-muted-foreground">ממוצע ליום</p>
            </div>
            <div className="p-3 rounded-lg bg-background/50 hover:bg-sakura/10 transition-colors duration-300">
              <p className="text-xl font-display text-primary">₪{Math.round(grandTotal / 2).toLocaleString()}</p>
              <p className="text-xs text-muted-foreground">לכל אחד</p>
            </div>
          </div>

          <div className="mt-6 p-4 rounded-lg bg-gold/10 border border-gold/20">
            <p className="text-sm text-center text-muted-foreground">
              💡 <strong>שימו לב:</strong> תקציב זה אינו כולל טיסות ולינה. 
              מחירים משוערים ועשויים להשתנות.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default BudgetSummary;
