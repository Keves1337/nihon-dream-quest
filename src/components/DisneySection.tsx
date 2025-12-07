import { Sparkles, Star, Heart, Castle, Info } from "lucide-react";
import { Card } from "@/components/ui/card";
import disneyAnime from "@/assets/disney-beauty-beast-anime.png";

// USD to NIS conversion rate
const USD_TO_NIS = 3.7;

const DisneySection = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: `
            linear-gradient(135deg, 
              hsl(350 50% 94%) 0%, 
              hsl(280 40% 92%) 50%,
              hsl(43 60% 95%) 100%
            )
          `,
        }}
      />

      {/* Animated decorative sparkles */}
      <div className="absolute top-10 left-10 text-gold opacity-40 animate-pulse">
        <Sparkles className="w-8 h-8" />
      </div>
      <div className="absolute top-20 right-20 text-sakura opacity-40 animate-pulse animation-delay-500">
        <Star className="w-6 h-6" />
      </div>
      <div className="absolute bottom-20 left-1/4 text-gold opacity-30 animate-pulse animation-delay-1000">
        <Star className="w-5 h-5" />
      </div>
      <div className="absolute top-1/3 right-10 text-sakura opacity-30 animate-float">
        <Heart className="w-4 h-4" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Castle className="w-6 h-6 text-primary animate-sway" />
            <span className="text-primary font-display text-lg">Tokyo Disney Resort</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            חווית היפה והחיה
          </h2>
          <div className="section-divider mb-6" />
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Image card with anime illustration */}
          <Card className="card-elevated overflow-hidden aspect-[4/3] relative group">
            <img 
              src={disneyAnime}
              alt="Beauty and the Beast ballroom scene"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
            
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <span className="px-4 py-2 bg-gold/90 text-foreground text-sm rounded-full font-medium shadow-lg animate-pulse">
                ✨ זמין מ-1 באפריל 2026
              </span>
            </div>
          </Card>

          {/* Details */}
          <div className="space-y-6">
            <Card className="card-japanese p-6 group hover:shadow-sakura transition-shadow duration-300">
              <h3 className="font-display text-xl text-foreground mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-primary group-hover:animate-pulse" />
                תכונות החדר
              </h3>
              <ul className="space-y-3">
                {[
                  "עיצוב סוחף של היפה והחיה בכל החדר",
                  "אלמנטים של סצנות הספרייה ואולם הנשפים",
                  "פרטי דמויות בלעדיים: בל, החיה והחברים",
                  "חדר בגודל 40 מ״ר, מיטות זוגיות או נפרדות",
                  "קיבולת: עד 4 אורחים",
                ].map((item, i) => (
                  <li 
                    key={i}
                    className="flex items-start gap-3 text-muted-foreground opacity-0 animate-fade-up"
                    style={{ animationDelay: `${i * 100}ms`, animationFillMode: 'forwards' }}
                  >
                    <span className="text-gold">✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="card-japanese p-6 group hover:shadow-sakura transition-shadow duration-300">
              <h3 className="font-display text-xl text-foreground mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-gold group-hover:animate-spin" />
                הטבות לאורחים
              </h3>
              <ul className="space-y-3">
                {[
                  { label: "Happy Entry:", desc: "כניסה 15 דק׳ לפני הפתיחה" },
                  { label: "גישה ישירה", desc: "לדיסנילנד טוקיו" },
                  { label: "פינת מתנות", desc: "עם סחורה בלעדית" },
                  { label: "ארוחת בוקר", desc: "עם דמויות זמינה" },
                ].map((item, i) => (
                  <li 
                    key={i}
                    className="flex items-start gap-3 text-muted-foreground opacity-0 animate-fade-up"
                    style={{ animationDelay: `${(i + 5) * 100}ms`, animationFillMode: 'forwards' }}
                  >
                    <span className="text-sakura">♡</span>
                    <span><strong>{item.label}</strong> {item.desc}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-4 bg-gold/10 border-gold/30">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-gold flex-shrink-0 mt-0.5 animate-bounce" />
                <div>
                  <p className="text-sm font-medium text-foreground">הערה להזמנה</p>
                  <p className="text-sm text-muted-foreground">
                    ניתן להזמין מלונות דיסני רק חודשיים מראש. 
                    חדר היפה והחיה זמין מ-1 באפריל 2026.
                  </p>
                </div>
              </div>
            </Card>

            <div className="flex gap-4 pt-4">
              <div className="flex-1 text-center p-4 rounded-lg bg-primary/10 hover:scale-105 transition-transform duration-300">
                <p className="text-2xl font-display text-primary">~₪{Math.round(900 * USD_TO_NIS).toLocaleString()}</p>
                <p className="text-xs text-muted-foreground">לכל לילה (משוער)</p>
              </div>
              <div className="flex-1 text-center p-4 rounded-lg bg-sakura/20 hover:scale-105 transition-transform duration-300">
                <p className="text-2xl font-display text-primary">2</p>
                <p className="text-xs text-muted-foreground">לילות מתוכננים</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisneySection;
