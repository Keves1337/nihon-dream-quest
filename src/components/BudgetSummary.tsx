import { Plane, Hotel, Train, Utensils, Ticket, ShoppingBag, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import ramenAnime from "@/assets/japan-ramen-anime.png";
import shinkansenAnime from "@/assets/shinkansen-anime.png";

interface BudgetItem {
  category: string;
  icon: React.ReactNode;
  items: { name: string; cost: number; notes?: string }[];
  color: string;
  image?: string;
}

const budgetData: BudgetItem[] = [
  {
    category: "טיסות",
    icon: <Plane className="w-5 h-5" />,
    color: "ocean",
    items: [
      { name: "דובאי → טוקיו (הלוך-חזור)", cost: 7000, notes: "2 נוסעים, מחלקת תיירים" },
    ],
  },
  {
    category: "לינה",
    icon: <Hotel className="w-5 h-5" />,
    color: "sakura",
    items: [
      { name: "מלון דיסנילנד טוקיו (חדר היפה והחיה)", cost: 5000, notes: "2 לילות" },
      { name: "מלון בטוקיו (אזור שיבויה)", cost: 1500, notes: "2 לילות" },
      { name: "ריוקאן בקיוטו", cost: 2000, notes: "2 לילות" },
      { name: "מלון באוסקה", cost: 1800, notes: "3 לילות" },
    ],
  },
  {
    category: "תחבורה",
    icon: <Train className="w-5 h-5" />,
    color: "bamboo",
    image: shinkansenAnime,
    items: [
      { name: "JR Pass ל-7 ימים", cost: 2400, notes: "2 × ¥50,000" },
      { name: "מטרו טוקיו ותחבורה מקומית", cost: 400, notes: "כרטיסי IC, אוטובוסים" },
      { name: "העברות משדה התעופה", cost: 300, notes: "Narita Express" },
    ],
  },
  {
    category: "אוכל",
    icon: <Utensils className="w-5 h-5" />,
    color: "gold",
    image: ramenAnime,
    items: [
      { name: "ארוחות יומיות", cost: 4000, notes: "~₪400/יום × 10 ימים" },
      { name: "חוויות אוכל מיוחדות", cost: 800, notes: "ארוחת ולנטיינז, איזקאיה" },
    ],
  },
  {
    category: "אטרקציות",
    icon: <Ticket className="w-5 h-5" />,
    color: "primary",
    items: [
      { name: "דיסנילנד טוקיו (יום אחד)", cost: 700, notes: "2 כרטיסים" },
      { name: "דיסני-סי טוקיו (יום אחד)", cost: 700, notes: "2 כרטיסים" },
      { name: "כניסה למקדשים בקיוטו", cost: 200, notes: "פושימי אינארי, קינקקו-ג'י" },
      { name: "טירת אוסקה ואטרקציות", cost: 200, notes: "דמי כניסה שונים" },
      { name: "חווית אונסן", cost: 400, notes: "אונסן בריוקאן" },
    ],
  },
  {
    category: "קניות ומזכרות",
    icon: <ShoppingBag className="w-5 h-5" />,
    color: "accent",
    items: [
      { name: "מזכרות ומתנות", cost: 1500, notes: "משוער" },
      { name: "שונות", cost: 500, notes: "חירום, תוספות" },
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
    <section id="budget" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
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
            עלויות משוערות לירח הדבש שלכם • 11-20 בפברואר 2026
          </p>
        </div>

        {/* Budget Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {budgetData.map((category, idx) => (
            <Card
              key={category.category}
              className="card-elevated overflow-hidden animate-fade-up group"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Category image if available */}
              {category.image && (
                <div className="h-32 overflow-hidden relative">
                  <img 
                    src={category.image} 
                    alt={category.category}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12`}>
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
                      className="flex justify-between items-start opacity-0 animate-fade-up"
                      style={{ animationDelay: `${(idx * 100) + (i * 50)}ms`, animationFillMode: 'forwards' }}
                    >
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">{item.name}</p>
                        {item.notes && (
                          <p className="text-xs text-muted-foreground">{item.notes}</p>
                        )}
                      </div>
                      <span className="text-sm font-semibold text-primary ml-2">
                        ₪{item.cost.toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">סה״כ</span>
                    <span className="font-display text-lg text-primary">
                      ₪{calculateCategoryTotal(category.items).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Grand Total */}
        <Card className="card-elevated max-w-2xl mx-auto p-8 bg-gradient-to-br from-primary/5 to-sakura/10 relative overflow-hidden">
          {/* Animated background sparkles */}
          <div className="absolute top-4 right-4 text-gold/30 animate-pulse">
            <Sparkles className="w-8 h-8" />
          </div>
          <div className="absolute bottom-4 left-4 text-sakura/30 animate-pulse animation-delay-500">
            <Sparkles className="w-6 h-6" />
          </div>
          
          <div className="text-center relative z-10">
            <p className="text-muted-foreground mb-2">סה״כ תקציב משוער</p>
            <p className="font-display text-5xl md:text-6xl text-primary mb-2 animate-scale-in">
              ₪{grandTotal.toLocaleString()}
            </p>
            <p className="text-sm text-muted-foreground">
              ≈ ${Math.round(grandTotal / 3.7).toLocaleString()} דולר
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              ≈ ¥{Math.round(grandTotal * 40.5).toLocaleString()} ין
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-border/50 grid grid-cols-2 gap-4 text-center">
            <div>
              <p className="text-2xl font-display text-primary">₪{Math.round(grandTotal / 10).toLocaleString()}</p>
              <p className="text-xs text-muted-foreground">ממוצע ליום</p>
            </div>
            <div>
              <p className="text-2xl font-display text-primary">₪{Math.round(grandTotal / 2).toLocaleString()}</p>
              <p className="text-xs text-muted-foreground">לכל אחד</p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-border/50">
            <p className="text-sm text-center text-muted-foreground">
              💡 <strong>טיפ:</strong> תקציב בינוני שמאפשר חוויות מיוחדות תוך שמירה על סבירות. 
              הזמינו מוקדם לקבלת מחירים טובים יותר!
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default BudgetSummary;
