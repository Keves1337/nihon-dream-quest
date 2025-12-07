import { MapPin, Sparkles, Heart, Camera, UtensilsCrossed, Castle, TreePine } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";

import tokyoAnime from "@/assets/tokyo-shibuya-anime.png";
import disneyAnime from "@/assets/disney-beauty-beast-anime.png";
import kyotoAnime from "@/assets/kyoto-torii-anime.png";
import naraAnime from "@/assets/nara-deer-anime.png";
import osakaAnime from "@/assets/osaka-dotonbori-anime.png";
import ramenAnime from "@/assets/japan-ramen-anime.png";

interface DayPlan {
  day: number;
  dateEn: string;
  dateHe: string;
  fullDateEn: string;
  fullDateHe: string;
  locationEn: string;
  locationHe: string;
  titleEn: string;
  titleHe: string;
  highlightsEn: string[];
  highlightsHe: string[];
  icon: React.ReactNode;
  moodEn: string;
  moodHe: string;
  image?: string;
  emoji: string;
}

const itinerary: DayPlan[] = [
  {
    day: 1,
    dateEn: "Day 1",
    dateHe: "יום 1",
    fullDateEn: "February 11, 2026",
    fullDateHe: "11 בפברואר 2026",
    locationEn: "Tokyo",
    locationHe: "טוקיו",
    titleEn: "Arrival & Shibuya",
    titleHe: "הגעה ושיבויה",
    highlightsEn: [
      "Landing at Narita/Haneda Airport",
      "Check-in at Tokyo hotel (Shibuya area)",
      "Famous Shibuya Crossing & Hachiko statue",
      "Evening stroll in Harajuku",
      "Dinner in Omotesando",
    ],
    highlightsHe: [
      "נחיתה בשדה התעופה נריטה/הנדה",
      "צ׳ק-אין במלון בטוקיו (אזור שיבויה)",
      "מעבר החציה המפורסם בשיבויה ופסל האצ׳יקו",
      "טיול ערב בהראג׳וקו",
      "ארוחת ערב באומוטסאנדו",
    ],
    icon: <Sparkles className="w-5 h-5" />,
    moodEn: "Excitement",
    moodHe: "התרגשות",
    image: tokyoAnime,
    emoji: "🗼",
  },
  {
    day: 2,
    dateEn: "Day 2",
    dateHe: "יום 2",
    fullDateEn: "February 12, 2026",
    fullDateHe: "12 בפברואר 2026",
    locationEn: "Tokyo",
    locationHe: "טוקיו",
    titleEn: "Traditional Tokyo",
    titleHe: "טוקיו המסורתית",
    highlightsEn: [
      "Morning at Senso-ji Temple (Asakusa)",
      "Nakamise shopping street",
      "Lunch at traditional ramen restaurant",
      "Afternoon in Akihabara",
      "Evening at TeamLab or Tokyo Skytree",
    ],
    highlightsHe: [
      "בוקר במקדש סנסו-ג׳י (אסאקוסה)",
      "רחוב הקניות נאקאמיסה",
      "צהריים במסעדת ראמן מסורתית",
      "אחה״צ באקיהאבארה",
      "ערב בטים-לאב או מגדל טוקיו סקייטרי",
    ],
    icon: <TreePine className="w-5 h-5" />,
    moodEn: "Culture",
    moodHe: "תרבות",
    image: tokyoAnime,
    emoji: "⛩️",
  },
  {
    day: 3,
    dateEn: "Day 3",
    dateHe: "יום 3",
    fullDateEn: "February 13, 2026",
    fullDateHe: "13 בפברואר 2026",
    locationEn: "Tokyo Disney",
    locationHe: "דיסני טוקיו",
    titleEn: "Disney Magic",
    titleHe: "קסם דיסני",
    highlightsEn: [
      "Check-in at Tokyo Disneyland Hotel",
      "Staying in Beauty & the Beast room!",
      "Full day at Tokyo Disneyland",
      "Beauty & the Beast attraction",
      "Night parade and fireworks",
    ],
    highlightsHe: [
      "צ׳ק-אין במלון דיסנילנד טוקיו",
      "לינה בחדר היפה והחיה!",
      "יום מלא בדיסנילנד טוקיו",
      "אטרקציית היפה והחיה",
      "מצעד לילי וזיקוקים",
    ],
    icon: <Castle className="w-5 h-5" />,
    moodEn: "Magical",
    moodHe: "קסום",
    image: disneyAnime,
    emoji: "🏰",
  },
  {
    day: 4,
    dateEn: "Day 4",
    dateHe: "יום 4",
    fullDateEn: "February 14, 2026 💕",
    fullDateHe: "14 בפברואר 2026 💕",
    locationEn: "Tokyo Disney",
    locationHe: "דיסני טוקיו",
    titleEn: "Valentine's at DisneySea",
    titleHe: "ולנטיינז בדיסני-סי",
    highlightsEn: [
      "Morning: Breakfast at hotel",
      "Full day at Tokyo DisneySea",
      "Journey to the Center of the Earth",
      "Mediterranean Harbor at sunset",
      "Romantic Valentine's dinner 💕",
    ],
    highlightsHe: [
      "בוקר: ארוחת בוקר במלון",
      "יום מלא בטוקיו דיסני-סי",
      "מסע אל מרכז כדור הארץ",
      "נמל הים התיכון בשקיעה",
      "ארוחת ערב רומנטית לולנטיינז 💕",
    ],
    icon: <Heart className="w-5 h-5" />,
    moodEn: "Romance",
    moodHe: "רומנטיקה",
    image: disneyAnime,
    emoji: "💕",
  },
  {
    day: 5,
    dateEn: "Day 5",
    dateHe: "יום 5",
    fullDateEn: "February 15, 2026",
    fullDateHe: "15 בפברואר 2026",
    locationEn: "Kyoto",
    locationHe: "קיוטו",
    titleEn: "Shinkansen to Kyoto",
    titleHe: "שינקאנסן לקיוטו",
    highlightsEn: [
      "Morning: Bullet train to Kyoto",
      "Check-in at traditional Ryokan",
      "Afternoon: Fushimi Inari (10,000 torii gates)",
      "Evening: Stroll through Gion district",
      "Maybe spot some Geishas",
    ],
    highlightsHe: [
      "בוקר: נסיעה לקיוטו ברכבת המהירה",
      "צ׳ק-אין בריוקאן מסורתי",
      "אחה״צ: מקדש פושימי אינארי (10,000 שערי טורי)",
      "ערב: טיול ברובע גיון",
      "אולי נראה גיישות",
    ],
    icon: <Camera className="w-5 h-5" />,
    moodEn: "Traditional",
    moodHe: "מסורתי",
    image: kyotoAnime,
    emoji: "🚄",
  },
  {
    day: 6,
    dateEn: "Day 6",
    dateHe: "יום 6",
    fullDateEn: "February 16, 2026",
    fullDateHe: "16 בפברואר 2026",
    locationEn: "Kyoto",
    locationHe: "קיוטו",
    titleEn: "Temples & Gardens",
    titleHe: "מקדשים וגנים",
    highlightsEn: [
      "Morning: Kinkaku-ji (Golden Pavilion)",
      "Arashiyama Bamboo Forest",
      "Lunch: Kyoto-style Kaiseki",
      "Afternoon: Nijo Castle",
      "Evening: Private onsen experience",
    ],
    highlightsHe: [
      "בוקר: קינקאקו-ג׳י (הביתן הזהוב)",
      "יער הבמבוק בארשיאמה",
      "צהריים: קייסקי בסגנון קיוטו",
      "אחה״צ: טירת ניג׳ו",
      "ערב: חוויית אונסן פרטית",
    ],
    icon: <TreePine className="w-5 h-5" />,
    moodEn: "Serenity",
    moodHe: "שלווה",
    image: kyotoAnime,
    emoji: "🎋",
  },
  {
    day: 7,
    dateEn: "Day 7",
    dateHe: "יום 7",
    fullDateEn: "February 17, 2026",
    fullDateHe: "17 בפברואר 2026",
    locationEn: "Nara & Osaka",
    locationHe: "נארה ואוסקה",
    titleEn: "Day Trip to Nara",
    titleHe: "טיול יום לנארה",
    highlightsEn: [
      "Morning: Day trip to Nara",
      "Feed the sacred deer at Nara Park",
      "Visit Todai-ji Temple",
      "Afternoon: Travel to Osaka",
      "Evening: Dotonbori nightlife",
    ],
    highlightsHe: [
      "בוקר: טיול יום לנארה",
      "האכלת האיילים הקדושים בפארק נארה",
      "ביקור במקדש טודאי-ג׳י",
      "אחה״צ: נסיעה לאוסקה",
      "ערב: חיי הלילה של דוטונבורי",
    ],
    icon: <Sparkles className="w-5 h-5" />,
    moodEn: "Adventure",
    moodHe: "הרפתקה",
    image: naraAnime,
    emoji: "🦌",
  },
  {
    day: 8,
    dateEn: "Day 8",
    dateHe: "יום 8",
    fullDateEn: "February 18, 2026",
    fullDateHe: "18 בפברואר 2026",
    locationEn: "Osaka",
    locationHe: "אוסקה",
    titleEn: "Osaka Food Tour",
    titleHe: "סיור אוכל באוסקה",
    highlightsEn: [
      "Morning: Osaka Castle",
      "Kuromon Market - culinary tour",
      "Best takoyaki and okonomiyaki",
      "Afternoon: Shinsekai district",
      "Last shopping in Shinsaibashi",
      "Farewell dinner at upscale izakaya",
    ],
    highlightsHe: [
      "בוקר: טירת אוסקה",
      "שוק קורומון - סיור קולינרי",
      "הטאקויאקי והאוקונומיאקי הטובים ביותר",
      "אחה״צ: רובע שינסקאי",
      "קניות אחרונות בשינסאיבאשי",
      "ארוחת פרידה באיזקאיה יוקרתית",
    ],
    icon: <UtensilsCrossed className="w-5 h-5" />,
    moodEn: "Foodie",
    moodHe: "אוכל",
    image: osakaAnime,
    emoji: "🍜",
  },
  {
    day: 9,
    dateEn: "Day 9",
    dateHe: "יום 9",
    fullDateEn: "February 19, 2026",
    fullDateHe: "19 בפברואר 2026",
    locationEn: "Osaka",
    locationHe: "אוסקה",
    titleEn: "Free Day in Osaka",
    titleHe: "יום חופשי באוסקה",
    highlightsEn: [
      "Morning: Universal Studios Japan (optional)",
      "Or: Free exploration of Osaka",
      "Visit Osaka Aquarium",
      "Shopping in Namba",
      "Last evening in Japan",
    ],
    highlightsHe: [
      "בוקר: יוניברסל סטודיוז יפן (אופציונלי)",
      "או: חקירה חופשית של אוסקה",
      "ביקור באקווריום אוסקה",
      "קניות בנאמבה",
      "ערב אחרון ביפן",
    ],
    icon: <Sparkles className="w-5 h-5" />,
    moodEn: "Freedom",
    moodHe: "חופש",
    image: osakaAnime,
    emoji: "🎡",
  },
  {
    day: 10,
    dateEn: "Day 10",
    dateHe: "יום 10",
    fullDateEn: "February 20, 2026",
    fullDateHe: "20 בפברואר 2026",
    locationEn: "Departure",
    locationHe: "יציאה",
    titleEn: "Goodbye Japan",
    titleHe: "להתראות יפן",
    highlightsEn: [
      "Last morning in Osaka",
      "Travel to Kansai Airport",
      "Last airport shopping",
      "Flight back to Israel",
      "Hearts full of memories ❤️",
    ],
    highlightsHe: [
      "בוקר אחרון באוסקה",
      "נסיעה לשדה התעופה קאנסאי",
      "קניות אחרונות בשדה התעופה",
      "טיסה חזרה לישראל",
      "לבבות מלאים בזיכרונות ❤️",
    ],
    icon: <Heart className="w-5 h-5" />,
    moodEn: "Bittersweet",
    moodHe: "מתוק-מר",
    image: ramenAnime,
    emoji: "✈️",
  },
];

const ItinerarySection = () => {
  const { t } = useLanguage();

  return (
    <section id="itinerary" className="py-20 px-6 relative overflow-hidden">
      {/* Floating decorations */}
      <div className="absolute top-10 right-10 text-4xl animate-float opacity-20">🌸</div>
      <div className="absolute top-1/3 left-5 text-3xl animate-float animation-delay-700 opacity-20">🎐</div>
      <div className="absolute bottom-20 right-20 text-3xl animate-float animation-delay-1000 opacity-20">🏯</div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <MapPin className="w-6 h-6 text-primary animate-bounce" />
            <span className="text-primary font-display text-lg">旅程</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            {t("Your Journey", "המסע שלכם")}
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t("February 11-20, 2026 • 10 magical days in Japan", "11-20 בפברואר 2026 • 10 ימים קסומים ביפן")}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-sakura via-primary to-gold" />

          {/* Days */}
          {itinerary.map((day, idx) => (
            <div
              key={day.day}
              className={`relative flex flex-col md:flex-row gap-6 mb-12 ${
                idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline node */}
              <div className="absolute left-4 md:left-1/2 w-10 h-10 -ml-5 rounded-full bg-background border-4 border-primary flex items-center justify-center z-10 transition-all duration-300 hover:scale-125 hover:border-sakura group">
                <span className="text-sm group-hover:hidden">{day.day}</span>
                <span className="text-lg hidden group-hover:block">{day.emoji}</span>
              </div>

              {/* Card */}
              <Card
                className={`card-elevated ml-14 md:ml-0 md:w-[calc(50%-2.5rem)] overflow-hidden animate-fade-up group ${
                  idx % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                }`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Day image */}
                {day.image && (
                  <div className="h-40 overflow-hidden relative">
                    <img 
                      src={day.image} 
                      alt={t(day.titleEn, day.titleHe)}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                    
                    {/* Floating emoji on hover */}
                    <div className="absolute top-3 left-3 text-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-125 group-hover:rotate-12">
                      {day.emoji}
                    </div>
                    
                    {/* Mood badge on image */}
                    <span className="absolute top-3 right-3 text-xs px-3 py-1 rounded-full bg-sakura/80 backdrop-blur-sm text-primary font-medium transition-all duration-300 group-hover:bg-gold/80">
                      {t(day.moodEn, day.moodHe)}
                    </span>
                    
                    {/* Sparkle effects */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute top-8 right-16 text-gold animate-pulse">✨</div>
                      <div className="absolute bottom-16 left-8 text-sakura animate-pulse animation-delay-300">✨</div>
                    </div>
                  </div>
                )}

                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-xs text-gold font-medium">{t(day.fullDateEn, day.fullDateHe)}</p>
                      <h3 className="font-display text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                        {t(day.titleEn, day.titleHe)}
                      </h3>
                      <p className="text-sm text-primary flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3" /> {t(day.locationEn, day.locationHe)}
                      </p>
                    </div>
                    <div className="p-2 rounded-lg bg-sakura/20 text-primary transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 group-hover:bg-gold/20">
                      {day.icon}
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {(t(day.highlightsEn.join("|"), day.highlightsHe.join("|"))).split("|").map((highlight, i) => (
                      <li 
                        key={i} 
                        className="text-sm text-muted-foreground flex items-start gap-2 opacity-0 animate-fade-up hover:text-foreground transition-colors duration-200"
                        style={{ animationDelay: `${(idx * 100) + (i * 50)}ms`, animationFillMode: 'forwards' }}
                      >
                        <span className="text-gold mt-0.5 group-hover:animate-pulse">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ItinerarySection;
