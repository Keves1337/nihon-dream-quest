import { Sparkles, Star, Heart, Castle, Info } from "lucide-react";
import { Card } from "@/components/ui/card";

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

      {/* Decorative sparkles */}
      <div className="absolute top-10 left-10 text-gold opacity-40 animate-pulse">
        <Sparkles className="w-8 h-8" />
      </div>
      <div className="absolute top-20 right-20 text-sakura opacity-40 animate-pulse animation-delay-500">
        <Star className="w-6 h-6" />
      </div>
      <div className="absolute bottom-20 left-1/4 text-gold opacity-30 animate-pulse animation-delay-1000">
        <Star className="w-5 h-5" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Castle className="w-6 h-6 text-primary" />
            <span className="text-primary font-display text-lg">Tokyo Disney Resort</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Beauty & the Beast Experience
          </h2>
          <div className="section-divider mb-6" />
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Image placeholder card */}
          <Card className="card-elevated overflow-hidden aspect-[4/3] relative group">
            <div 
              className="absolute inset-0 bg-gradient-to-br from-primary/20 via-sakura/30 to-gold/20"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8">
                <Castle className="w-16 h-16 text-primary mx-auto mb-4" />
                <p className="font-display text-2xl text-foreground mb-2">
                  Beauty & the Beast Room
                </p>
                <p className="text-sm text-muted-foreground">
                  Tokyo Disneyland Hotel
                </p>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <span className="px-3 py-1 bg-gold/90 text-foreground text-xs rounded-full">
                ✨ Available from April 1, 2026
              </span>
            </div>
          </Card>

          {/* Details */}
          <div className="space-y-6">
            <Card className="card-japanese p-6">
              <h3 className="font-display text-xl text-foreground mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-primary" />
                Room Features
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-gold">✦</span>
                  <span>Immersive Beauty & the Beast theming throughout</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-gold">✦</span>
                  <span>Library scenes and ballroom design elements</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-gold">✦</span>
                  <span>Exclusive character details: Belle, Beast, and friends</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-gold">✦</span>
                  <span>40 m² room size, Twin or Double bed options</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-gold">✦</span>
                  <span>Capacity: Up to 4 guests</span>
                </li>
              </ul>
            </Card>

            <Card className="card-japanese p-6">
              <h3 className="font-display text-xl text-foreground mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-gold" />
                Guest Benefits
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-sakura">♡</span>
                  <span><strong>Happy Entry:</strong> Enter parks 15 min early</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-sakura">♡</span>
                  <span><strong>Direct access</strong> to Tokyo Disneyland</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-sakura">♡</span>
                  <span><strong>Gift Corner</strong> with exclusive merchandise</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-sakura">♡</span>
                  <span><strong>Character breakfast</strong> available</span>
                </li>
              </ul>
            </Card>

            <Card className="p-4 bg-gold/10 border-gold/30">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-foreground">Booking Note</p>
                  <p className="text-sm text-muted-foreground">
                    Disney Hotels can only be booked 2 months in advance. 
                    The Beauty & the Beast room is available from April 1, 2026.
                  </p>
                </div>
              </div>
            </Card>

            <div className="flex gap-4 pt-4">
              <div className="flex-1 text-center p-4 rounded-lg bg-primary/10">
                <p className="text-2xl font-display text-primary">~$900</p>
                <p className="text-xs text-muted-foreground">Per Night (Est.)</p>
              </div>
              <div className="flex-1 text-center p-4 rounded-lg bg-sakura/20">
                <p className="text-2xl font-display text-primary">2</p>
                <p className="text-xs text-muted-foreground">Nights Planned</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisneySection;
