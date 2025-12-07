import { Plane, Hotel, Train, Utensils, Ticket, ShoppingBag, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

interface BudgetItem {
  category: string;
  icon: React.ReactNode;
  items: { name: string; cost: number; notes?: string }[];
  color: string;
}

const budgetData: BudgetItem[] = [
  {
    category: "Flights",
    icon: <Plane className="w-5 h-5" />,
    color: "ocean",
    items: [
      { name: "Dubai → Tokyo (Round Trip)", cost: 2400, notes: "2 passengers, Economy" },
    ],
  },
  {
    category: "Accommodation",
    icon: <Hotel className="w-5 h-5" />,
    color: "sakura",
    items: [
      { name: "Tokyo Disneyland Hotel (Beauty & Beast Room)", cost: 1800, notes: "2 nights" },
      { name: "Tokyo Hotel (Shibuya area)", cost: 600, notes: "2 nights" },
      { name: "Kyoto Ryokan Experience", cost: 800, notes: "2 nights" },
      { name: "Osaka Hotel", cost: 400, notes: "2 nights" },
    ],
  },
  {
    category: "Transportation",
    icon: <Train className="w-5 h-5" />,
    color: "bamboo",
    items: [
      { name: "7-Day JR Pass", cost: 660, notes: "2 × ¥50,000 (~$330 each)" },
      { name: "Tokyo Metro & Local Transport", cost: 150, notes: "IC Cards, local buses" },
      { name: "Airport Transfers", cost: 100, notes: "Narita Express / Limousine Bus" },
    ],
  },
  {
    category: "Food & Dining",
    icon: <Utensils className="w-5 h-5" />,
    color: "gold",
    items: [
      { name: "Daily Meals", cost: 1350, notes: "~$150/day for 2 people × 9 days" },
      { name: "Special Dining Experiences", cost: 400, notes: "Kaiseki, Omakase sushi" },
    ],
  },
  {
    category: "Activities & Attractions",
    icon: <Ticket className="w-5 h-5" />,
    color: "primary",
    items: [
      { name: "Tokyo Disneyland (2-Day Pass)", cost: 400, notes: "2 × 2-day passes" },
      { name: "Tokyo DisneySea (1-Day)", cost: 200, notes: "2 adult tickets" },
      { name: "Kyoto Temple Entries", cost: 100, notes: "Fushimi Inari, Kinkaku-ji, etc." },
      { name: "Osaka Castle & Attractions", cost: 80, notes: "Various entry fees" },
      { name: "Onsen Experience", cost: 150, notes: "Private onsen session" },
    ],
  },
  {
    category: "Shopping & Souvenirs",
    icon: <ShoppingBag className="w-5 h-5" />,
    color: "accent",
    items: [
      { name: "Souvenirs & Gifts", cost: 500, notes: "Estimated" },
      { name: "Miscellaneous", cost: 200, notes: "Emergencies, extras" },
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
            <Sparkles className="w-6 h-6 text-gold" />
            <span className="text-gold font-display text-lg">予算</span>
            <Sparkles className="w-6 h-6 text-gold" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Trip Budget
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            Estimated costs for your 9-day honeymoon adventure in Japan
          </p>
        </div>

        {/* Budget Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {budgetData.map((category, idx) => (
            <Card
              key={category.category}
              className="card-elevated p-6 animate-fade-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg bg-${category.color}/10 text-${category.color}`}>
                  {category.icon}
                </div>
                <h3 className="font-display text-xl text-foreground">
                  {category.category}
                </h3>
              </div>

              <div className="space-y-3 mb-4">
                {category.items.map((item, i) => (
                  <div key={i} className="flex justify-between items-start">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">{item.name}</p>
                      {item.notes && (
                        <p className="text-xs text-muted-foreground">{item.notes}</p>
                      )}
                    </div>
                    <span className="text-sm font-semibold text-primary ml-2">
                      ${item.cost.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-border">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Subtotal</span>
                  <span className="font-display text-lg text-primary">
                    ${calculateCategoryTotal(category.items).toLocaleString()}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Grand Total */}
        <Card className="card-elevated max-w-2xl mx-auto p-8 bg-gradient-to-br from-primary/5 to-sakura/10">
          <div className="text-center">
            <p className="text-muted-foreground mb-2">Estimated Total Budget</p>
            <p className="font-display text-5xl md:text-6xl text-primary mb-2">
              ${grandTotal.toLocaleString()}
            </p>
            <p className="text-sm text-muted-foreground">
              ≈ ¥{(grandTotal * 150).toLocaleString()} (at ¥150/$1)
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              ≈ AED {(grandTotal * 3.67).toLocaleString()} 
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-border/50">
            <p className="text-sm text-center text-muted-foreground">
              💡 <strong>Tip:</strong> Prices are estimates and may vary based on season, 
              availability, and exchange rates. Book early for better deals!
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default BudgetSummary;
