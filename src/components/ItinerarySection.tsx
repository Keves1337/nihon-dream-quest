import { MapPin, Sparkles, Heart, Camera, UtensilsCrossed, Castle, TreePine, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import tokyoAnime from "@/assets/tokyo-shibuya-anime.png";
import tokyoSensojiAnime from "@/assets/tokyo-sensoji-anime.png";
import disneyAnime from "@/assets/disney-beauty-beast-anime.png";
import disneyseaAnime from "@/assets/disneysea-anime.png";
import kyotoAnime from "@/assets/kyoto-torii-anime.png";
import kyotoBambooAnime from "@/assets/kyoto-bamboo-anime.png";
import naraAnime from "@/assets/nara-deer-anime.png";
import osakaAnime from "@/assets/osaka-dotonbori-anime.png";
import osakaUniversalAnime from "@/assets/osaka-universal-anime.png";
import departureAnime from "@/assets/japan-departure-anime.png";

// Highlight images
import naritaAirportAnime from "@/assets/highlights/narita-airport-anime.png";
import shibuyaHachikoAnime from "@/assets/highlights/shibuya-hachiko-anime.png";
import harajukuAnime from "@/assets/highlights/harajuku-anime.png";
import omotesandoAnime from "@/assets/highlights/omotesando-anime.png";
import sensojiTempleAnime from "@/assets/highlights/sensoji-temple-anime.png";
import nakamiseAnime from "@/assets/highlights/nakamise-anime.png";
import ramenAnime from "@/assets/highlights/ramen-anime.png";
import akihabaraAnime from "@/assets/highlights/akihabara-anime.png";
import teamlabAnime from "@/assets/highlights/teamlab-anime.png";
import disneyHotelAnime from "@/assets/highlights/disney-hotel-anime.png";
import beautyBeastRoomAnime from "@/assets/highlights/beauty-beast-room-anime.png";
import disneyParadeAnime from "@/assets/highlights/disney-parade-anime.png";
import disneyseaHarborAnime from "@/assets/highlights/disneysea-harbor-anime.png";
import shinkansenTrainAnime from "@/assets/highlights/shinkansen-train-anime.png";
import ryokanAnime from "@/assets/highlights/ryokan-anime.png";
import fushimiInariAnime from "@/assets/highlights/fushimi-inari-anime.png";
import gionGeishaAnime from "@/assets/highlights/gion-geisha-anime.png";
import kinkakujiAnime from "@/assets/highlights/kinkakuji-anime.png";
import bambooForestAnime from "@/assets/highlights/bamboo-forest-anime.png";
import kaisekiAnime from "@/assets/highlights/kaiseki-anime.png";
import nijoCastleAnime from "@/assets/highlights/nijo-castle-anime.png";
import onsenAnime from "@/assets/highlights/onsen-anime.png";
import naraDeerParkAnime from "@/assets/highlights/nara-deer-park-anime.png";
import todaijiTempleAnime from "@/assets/highlights/todaiji-temple-anime.png";
import dotonboriNightAnime from "@/assets/highlights/dotonbori-night-anime.png";
import osakaCastleAnime from "@/assets/highlights/osaka-castle-anime.png";
import kuromonMarketAnime from "@/assets/highlights/kuromon-market-anime.png";
import takoyakiAnime from "@/assets/highlights/takoyaki-anime.png";
import shinsekaiAnime from "@/assets/highlights/shinsekai-anime.png";
import izakayaAnime from "@/assets/highlights/izakaya-anime.png";
import universalStudiosAnime from "@/assets/highlights/universal-studios-anime.png";
import aquariumAnime from "@/assets/highlights/aquarium-anime.png";
import nambaShoppingAnime from "@/assets/highlights/namba-shopping-anime.png";
import kansaiAirportAnime from "@/assets/highlights/kansai-airport-anime.png";
import flightHomeAnime from "@/assets/highlights/flight-home-anime.png";
import valentineDinnerAnime from "@/assets/highlights/valentine-dinner-anime.png";
import skytreeAnime from "@/assets/highlights/skytree-anime.png";
import beautyBeastRideAnime from "@/assets/highlights/beauty-beast-ride-anime.png";
import journeyCenterEarthAnime from "@/assets/highlights/journey-center-earth-anime.png";
import hotelBreakfastAnime from "@/assets/highlights/hotel-breakfast-anime.png";
import airportShoppingAnime from "@/assets/highlights/airport-shopping-anime.png";
import memoriesHeartAnime from "@/assets/highlights/memories-heart-anime.png";
import shinsaibashiAnime from "@/assets/highlights/shinsaibashi-anime.png";
import tokyoHotelAnime from "@/assets/highlights/tokyo-hotel-anime.png";

interface HighlightItem {
  textEn: string;
  textHe: string;
  image: string;
}

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
  highlights: HighlightItem[];
  icon: React.ReactNode;
  moodEn: string;
  moodHe: string;
  image: string;
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
    highlights: [
      { textEn: "Landing at Narita/Haneda Airport", textHe: "נחיתה בשדה התעופה נריטה/הנדה", image: naritaAirportAnime },
      { textEn: "Check-in at Tokyo hotel (Shibuya area)", textHe: "צ׳ק-אין במלון בטוקיו (אזור שיבויה)", image: tokyoHotelAnime },
      { textEn: "Famous Shibuya Crossing & Hachiko statue", textHe: "מעבר החציה המפורסם בשיבויה ופסל האצ׳יקו", image: shibuyaHachikoAnime },
      { textEn: "Evening stroll in Harajuku", textHe: "טיול ערב בהראג׳וקו", image: harajukuAnime },
      { textEn: "Dinner in Omotesando", textHe: "ארוחת ערב באומוטסאנדו", image: omotesandoAnime },
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
    highlights: [
      { textEn: "Morning at Senso-ji Temple (Asakusa)", textHe: "בוקר במקדש סנסו-ג׳י (אסאקוסה)", image: sensojiTempleAnime },
      { textEn: "Nakamise shopping street", textHe: "רחוב הקניות נאקאמיסה", image: nakamiseAnime },
      { textEn: "Lunch at traditional ramen restaurant", textHe: "צהריים במסעדת ראמן מסורתית", image: ramenAnime },
      { textEn: "Afternoon in Akihabara", textHe: "אחה״צ באקיהאבארה", image: akihabaraAnime },
      { textEn: "Evening at TeamLab or Tokyo Skytree", textHe: "ערב בטים-לאב או מגדל טוקיו סקייטרי", image: teamlabAnime },
    ],
    icon: <TreePine className="w-5 h-5" />,
    moodEn: "Culture",
    moodHe: "תרבות",
    image: tokyoSensojiAnime,
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
    highlights: [
      { textEn: "Check-in at Tokyo Disneyland Hotel", textHe: "צ׳ק-אין במלון דיסנילנד טוקיו", image: disneyHotelAnime },
      { textEn: "Staying in Beauty & the Beast room!", textHe: "לינה בחדר היפה והחיה!", image: beautyBeastRoomAnime },
      { textEn: "Full day at Tokyo Disneyland", textHe: "יום מלא בדיסנילנד טוקיו", image: disneyAnime },
      { textEn: "Beauty & the Beast attraction", textHe: "אטרקציית היפה והחיה", image: beautyBeastRideAnime },
      { textEn: "Night parade and fireworks", textHe: "מצעד לילי וזיקוקים", image: disneyParadeAnime },
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
    highlights: [
      { textEn: "Morning: Breakfast at hotel", textHe: "בוקר: ארוחת בוקר במלון", image: hotelBreakfastAnime },
      { textEn: "Full day at Tokyo DisneySea", textHe: "יום מלא בטוקיו דיסני-סי", image: disneyseaAnime },
      { textEn: "Journey to the Center of the Earth", textHe: "מסע אל מרכז כדור הארץ", image: journeyCenterEarthAnime },
      { textEn: "Mediterranean Harbor at sunset", textHe: "נמל הים התיכון בשקיעה", image: disneyseaHarborAnime },
      { textEn: "Romantic Valentine's dinner 💕", textHe: "ארוחת ערב רומנטית לולנטיינז 💕", image: valentineDinnerAnime },
    ],
    icon: <Heart className="w-5 h-5" />,
    moodEn: "Romance",
    moodHe: "רומנטיקה",
    image: disneyseaAnime,
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
    highlights: [
      { textEn: "Morning: Bullet train to Kyoto", textHe: "בוקר: נסיעה לקיוטו ברכבת המהירה", image: shinkansenTrainAnime },
      { textEn: "Check-in at traditional Ryokan", textHe: "צ׳ק-אין בריוקאן מסורתי", image: ryokanAnime },
      { textEn: "Afternoon: Fushimi Inari (10,000 torii gates)", textHe: "אחה״צ: מקדש פושימי אינארי (10,000 שערי טורי)", image: fushimiInariAnime },
      { textEn: "Evening: Stroll through Gion district", textHe: "ערב: טיול ברובע גיון", image: gionGeishaAnime },
      { textEn: "Maybe spot some Geishas", textHe: "אולי נראה גיישות", image: gionGeishaAnime },
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
    highlights: [
      { textEn: "Morning: Kinkaku-ji (Golden Pavilion)", textHe: "בוקר: קינקאקו-ג׳י (הביתן הזהוב)", image: kinkakujiAnime },
      { textEn: "Arashiyama Bamboo Forest", textHe: "יער הבמבוק בארשיאמה", image: bambooForestAnime },
      { textEn: "Lunch: Kyoto-style Kaiseki", textHe: "צהריים: קייסקי בסגנון קיוטו", image: kaisekiAnime },
      { textEn: "Afternoon: Nijo Castle", textHe: "אחה״צ: טירת ניג׳ו", image: nijoCastleAnime },
      { textEn: "Evening: Private onsen experience", textHe: "ערב: חוויית אונסן פרטית", image: onsenAnime },
    ],
    icon: <TreePine className="w-5 h-5" />,
    moodEn: "Serenity",
    moodHe: "שלווה",
    image: kyotoBambooAnime,
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
    highlights: [
      { textEn: "Morning: Day trip to Nara", textHe: "בוקר: טיול יום לנארה", image: naraAnime },
      { textEn: "Feed the sacred deer at Nara Park", textHe: "האכלת האיילים הקדושים בפארק נארה", image: naraDeerParkAnime },
      { textEn: "Visit Todai-ji Temple", textHe: "ביקור במקדש טודאי-ג׳י", image: todaijiTempleAnime },
      { textEn: "Afternoon: Travel to Osaka", textHe: "אחה״צ: נסיעה לאוסקה", image: shinkansenTrainAnime },
      { textEn: "Evening: Dotonbori nightlife", textHe: "ערב: חיי הלילה של דוטונבורי", image: dotonboriNightAnime },
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
    highlights: [
      { textEn: "Morning: Osaka Castle", textHe: "בוקר: טירת אוסקה", image: osakaCastleAnime },
      { textEn: "Kuromon Market - culinary tour", textHe: "שוק קורומון - סיור קולינרי", image: kuromonMarketAnime },
      { textEn: "Best takoyaki and okonomiyaki", textHe: "הטאקויאקי והאוקונומיאקי הטובים ביותר", image: takoyakiAnime },
      { textEn: "Afternoon: Shinsekai district", textHe: "אחה״צ: רובע שינסקאי", image: shinsekaiAnime },
      { textEn: "Last shopping in Shinsaibashi", textHe: "קניות אחרונות בשינסאיבאשי", image: shinsaibashiAnime },
      { textEn: "Farewell dinner at upscale izakaya", textHe: "ארוחת פרידה באיזקאיה יוקרתית", image: izakayaAnime },
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
    highlights: [
      { textEn: "Morning: Universal Studios Japan (optional)", textHe: "בוקר: יוניברסל סטודיוז יפן (אופציונלי)", image: universalStudiosAnime },
      { textEn: "Or: Free exploration of Osaka", textHe: "או: חקירה חופשית של אוסקה", image: osakaAnime },
      { textEn: "Visit Osaka Aquarium", textHe: "ביקור באקווריום אוסקה", image: aquariumAnime },
      { textEn: "Shopping in Namba", textHe: "קניות בנאמבה", image: nambaShoppingAnime },
      { textEn: "Last evening in Japan", textHe: "ערב אחרון ביפן", image: dotonboriNightAnime },
    ],
    icon: <Sparkles className="w-5 h-5" />,
    moodEn: "Freedom",
    moodHe: "חופש",
    image: osakaUniversalAnime,
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
    highlights: [
      { textEn: "Last morning in Osaka", textHe: "בוקר אחרון באוסקה", image: osakaAnime },
      { textEn: "Travel to Kansai Airport", textHe: "נסיעה לשדה התעופה קאנסאי", image: kansaiAirportAnime },
      { textEn: "Last airport shopping", textHe: "קניות אחרונות בשדה התעופה", image: airportShoppingAnime },
      { textEn: "Flight back to Israel", textHe: "טיסה חזרה לישראל", image: flightHomeAnime },
      { textEn: "Hearts full of memories ❤️", textHe: "לבבות מלאים בזיכרונות ❤️", image: memoriesHeartAnime },
    ],
    icon: <Heart className="w-5 h-5" />,
    moodEn: "Bittersweet",
    moodHe: "מתוק-מר",
    image: departureAnime,
    emoji: "✈️",
  },
];

const HighlightWithImage = ({ 
  highlight, 
  index, 
  dayIndex,
  t 
}: { 
  highlight: HighlightItem; 
  index: number; 
  dayIndex: number;
  t: (en: string, he: string) => string;
}) => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  const content = (
    <div className="relative">
      <img 
        src={highlight.image} 
        alt={t(highlight.textEn, highlight.textHe)}
        className="w-full h-48 md:h-40 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
      <p className="absolute bottom-2 left-2 right-2 text-cream text-xs font-medium line-clamp-2">
        {t(highlight.textEn, highlight.textHe)}
      </p>
    </div>
  );

  const listItem = (
    <li 
      className="text-sm text-muted-foreground flex items-start gap-2 opacity-0 animate-fade-up hover:text-foreground transition-colors duration-200 cursor-pointer"
      style={{ animationDelay: `${(dayIndex * 100) + (index * 50)}ms`, animationFillMode: 'forwards' }}
    >
      <span className="text-gold mt-0.5 group-hover:animate-pulse">•</span>
      <span className="hover:text-primary transition-colors border-b border-transparent hover:border-primary/30">
        {t(highlight.textEn, highlight.textHe)}
      </span>
    </li>
  );

  // Use Dialog for mobile (tap to open)
  if (isMobile) {
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          {listItem}
        </DialogTrigger>
        <DialogContent className="p-0 overflow-hidden border-2 border-sakura/30 max-w-[90vw] w-72">
          {content}
        </DialogContent>
      </Dialog>
    );
  }

  // Use HoverCard for desktop (hover to show)
  return (
    <HoverCard openDelay={100} closeDelay={100}>
      <HoverCardTrigger asChild>
        {listItem}
      </HoverCardTrigger>
      <HoverCardContent 
        className="w-64 p-0 overflow-hidden border-2 border-sakura/30 shadow-xl"
        side="top"
        sideOffset={8}
      >
        {content}
      </HoverCardContent>
    </HoverCard>
  );
};

const ItinerarySection = () => {
  const { t } = useLanguage();

  return (
    <section id="itinerary" className="py-12 md:py-20 px-4 md:px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <span className="text-primary/60 font-display text-xs md:text-sm tracking-widest uppercase mb-2 block">旅程</span>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-3 md:mb-4">
            {t("Your Journey", "המסע שלכם")}
          </h2>
          <div className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-4 md:mb-6" />
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto px-2">
            {t("February 11-21, 2026 • 10 magical days in Japan", "11-21 בפברואר 2026 • 10 ימים קסומים ביפן")}
          </p>
          <p className="text-xs text-primary/60 mt-2">
            {t("✨ Hover over activities to see anime illustrations", "✨ רחפו מעל הפעילויות לראות איורי אנימה")}
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
              <div className="absolute left-4 md:left-1/2 w-8 h-8 md:w-10 md:h-10 -ml-4 md:-ml-5 rounded-full bg-background border-3 md:border-4 border-primary flex items-center justify-center z-10 transition-all duration-300 hover:scale-125 hover:border-sakura group">
                <span className="text-xs md:text-sm group-hover:hidden">{day.day}</span>
                <span className="text-sm md:text-lg hidden group-hover:block">{day.emoji}</span>
              </div>

              {/* Card */}
              <Card
                className={`card-elevated ml-10 md:ml-0 md:w-[calc(50%-2.5rem)] overflow-hidden animate-fade-up group ${
                  idx % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                }`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Day image */}
                <div className="h-32 md:h-40 overflow-hidden relative">
                  <img 
                    src={day.image} 
                    alt={t(day.titleEn, day.titleHe)}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                  
                  {/* Mood badge on image */}
                  <span className="absolute top-2 right-2 md:top-3 md:right-3 text-xs px-2 py-0.5 md:px-3 md:py-1 rounded-full bg-sakura/80 backdrop-blur-sm text-primary font-medium transition-all duration-300 group-hover:bg-gold/80">
                    {t(day.moodEn, day.moodHe)}
                  </span>
                </div>

                <div className="p-4 md:p-6">
                  <div className="flex items-start justify-between mb-3 md:mb-4">
                    <div>
                      <p className="text-xs text-gold font-medium">{t(day.fullDateEn, day.fullDateHe)}</p>
                      <h3 className="font-display text-lg md:text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                        {t(day.titleEn, day.titleHe)}
                      </h3>
                      <p className="text-xs md:text-sm text-primary flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3" /> {t(day.locationEn, day.locationHe)}
                      </p>
                    </div>
                    <div className="p-1.5 md:p-2 rounded-lg bg-sakura/20 text-primary transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 group-hover:bg-gold/20">
                      {day.icon}
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {day.highlights.map((highlight, i) => (
                      <HighlightWithImage 
                        key={i}
                        highlight={highlight}
                        index={i}
                        dayIndex={idx}
                        t={t}
                      />
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
