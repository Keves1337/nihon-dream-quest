import { MapPin, Sparkles, Heart, Camera, UtensilsCrossed, Castle, TreePine } from "lucide-react";
import { Card } from "@/components/ui/card";

// Import anime images
import tokyoAnime from "@/assets/tokyo-shibuya-anime.png";
import disneyAnime from "@/assets/disney-beauty-beast-anime.png";
import kyotoAnime from "@/assets/kyoto-torii-anime.png";
import naraAnime from "@/assets/nara-deer-anime.png";
import osakaAnime from "@/assets/osaka-dotonbori-anime.png";
import ramenAnime from "@/assets/japan-ramen-anime.png";

interface DayPlan {
  day: number;
  date: string;
  fullDate: string;
  location: string;
  title: string;
  highlights: string[];
  accommodation: string;
  icon: React.ReactNode;
  mood: string;
  image?: string;
}

const itinerary: DayPlan[] = [
  {
    day: 1,
    date: "יום 1",
    fullDate: "11 בפברואר 2026",
    location: "טוקיו",
    title: "הגעה ושיבויה",
    highlights: [
      "נחיתה בשדה התעופה נריטה/הנדה",
      "צ'ק-אין במלון בטוקיו (אזור שיבויה)",
      "מעבר החציה בשיבויה ופסל האצ'יקו",
      "טיול ערב בהרג'וקו",
      "ארוחת ערב באומוטסנדו",
    ],
    accommodation: "מלון טוקיו - שיבויה",
    icon: <Sparkles className="w-5 h-5" />,
    mood: "התרגשות",
    image: tokyoAnime,
  },
  {
    day: 2,
    date: "יום 2",
    fullDate: "12 בפברואר 2026",
    location: "טוקיו",
    title: "טוקיו המסורתית",
    highlights: [
      "בוקר במקדש סנסו-ג'י (אסאקוסה)",
      "רחוב הקניות נאקאמיסה",
      "צהריים במסעדת ראמן מסורתית",
      "אחה״צ באקיהברה",
      "ערב בטיםלאב או טוקיו סקייטרי",
    ],
    accommodation: "מלון טוקיו - שיבויה",
    icon: <TreePine className="w-5 h-5" />,
    mood: "תרבות",
    image: tokyoAnime,
  },
  {
    day: 3,
    date: "יום 3",
    fullDate: "13 בפברואר 2026",
    location: "דיסני טוקיו",
    title: "✨ קסם דיסני",
    highlights: [
      "צ'ק-אין במלון דיסנילנד טוקיו",
      "לינה בחדר היפה והחיה!",
      "יום מלא בדיסנילנד טוקיו",
      "אטרקציית היפה והחיה",
      "מצעד לילי וזיקוקים",
    ],
    accommodation: "מלון דיסנילנד טוקיו - חדר היפה והחיה",
    icon: <Castle className="w-5 h-5" />,
    mood: "קסום",
    image: disneyAnime,
  },
  {
    day: 4,
    date: "יום 4",
    fullDate: "14 בפברואר 2026 💕",
    location: "דיסני טוקיו",
    title: "ולנטיינז בדיסני-סי",
    highlights: [
      "בוקר: ארוחת בוקר במלון והנאה מהמתקנים",
      "יום מלא בטוקיו דיסני-סי",
      "מסע אל מרכז כדור הארץ",
      "נמל הים התיכון בשקיעה",
      "ארוחת ערב רומנטית לולנטיינז 💕",
    ],
    accommodation: "מלון דיסנילנד טוקיו - חדר היפה והחיה",
    icon: <Heart className="w-5 h-5" />,
    mood: "רומנטיקה",
    image: disneyAnime,
  },
  {
    day: 5,
    date: "יום 5",
    fullDate: "15 בפברואר 2026",
    location: "קיוטו",
    title: "שינקנסן לקיוטו",
    highlights: [
      "בוקר: נסיעה לקיוטו ברכבת המהירה",
      "צ'ק-אין בריוקאן מסורתי",
      "אחה״צ: מקדש פושימי אינארי (10,000 שערי טורי)",
      "ערב: טיול ברובע גיון",
      "אולי נראה גיישות",
    ],
    accommodation: "ריוקאן מסורתי בקיוטו",
    icon: <Camera className="w-5 h-5" />,
    mood: "מסורתי",
    image: kyotoAnime,
  },
  {
    day: 6,
    date: "יום 6",
    fullDate: "16 בפברואר 2026",
    location: "קיוטו",
    title: "מקדשים וגנים",
    highlights: [
      "בוקר: קינקקו-ג'י (הביתן הזהוב)",
      "יער הבמבוק בארשיאמה",
      "צהריים: קייסקי בסגנון קיוטו",
      "אחה״צ: טירת ניג'ו",
      "ערב: חווית אונסן פרטית",
    ],
    accommodation: "ריוקאן מסורתי בקיוטו",
    icon: <TreePine className="w-5 h-5" />,
    mood: "שלווה",
    image: kyotoAnime,
  },
  {
    day: 7,
    date: "יום 7",
    fullDate: "17 בפברואר 2026",
    location: "נארה ואוסקה",
    title: "טיול יום ואוסקה",
    highlights: [
      "בוקר: טיול יום לנארה",
      "האכלת האיילים הקדושים בפארק נארה",
      "ביקור במקדש טודאי-ג'י",
      "אחה״צ: נסיעה לאוסקה",
      "ערב: חיי הלילה של דוטונבורי",
    ],
    accommodation: "מלון אוסקה",
    icon: <Sparkles className="w-5 h-5" />,
    mood: "הרפתקה",
    image: naraAnime,
  },
  {
    day: 8,
    date: "יום 8",
    fullDate: "18 בפברואר 2026",
    location: "אוסקה",
    title: "סיור אוכל באוסקה",
    highlights: [
      "בוקר: טירת אוסקה",
      "שוק קורומון - חקירת אוכל",
      "הטאקויאקי והאוקונומיאקי הטובים ביותר",
      "אחה״צ: רובע שינסקאי",
      "קניות אחרונות בשינסאיבאשי",
      "ארוחת פרידה באיזקאיה יוקרתית",
    ],
    accommodation: "מלון אוסקה",
    icon: <UtensilsCrossed className="w-5 h-5" />,
    mood: "אוכל",
    image: osakaAnime,
  },
  {
    day: 9,
    date: "יום 9",
    fullDate: "19 בפברואר 2026",
    location: "אוסקה",
    title: "יום חופשי באוסקה",
    highlights: [
      "בוקר: Universal Studios Japan (אופציונלי)",
      "או: חקירה חופשית של אוסקה",
      "ביקור באקווריום אוסקה",
      "קניות ב-Namba",
      "ערב אחרון ביפן",
    ],
    accommodation: "מלון אוסקה",
    icon: <Sparkles className="w-5 h-5" />,
    mood: "חופש",
    image: osakaAnime,
  },
  {
    day: 10,
    date: "יום 10",
    fullDate: "20 בפברואר 2026",
    location: "יציאה",
    title: "להתראות יפן",
    highlights: [
      "בוקר אחרון באוסקה",
      "נסיעה לשדה התעופה קאנסאי",
      "קניות אחרונות בשדה התעופה",
      "טיסה חזרה לדובאי",
      "לבבות מלאים בזכרונות ❤️",
    ],
    accommodation: "טיסה הביתה",
    icon: <Heart className="w-5 h-5" />,
    mood: "מתוק-מר",
    image: ramenAnime,
  },
];

const ItinerarySection = () => {
  return (
    <section id="itinerary" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <MapPin className="w-6 h-6 text-primary animate-bounce" />
            <span className="text-primary font-display text-lg">旅程</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            המסע שלכם
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            11-20 בפברואר 2026 • 10 ימים קסומים ביפן
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
              <div className="absolute left-4 md:left-1/2 w-8 h-8 -ml-4 rounded-full bg-background border-4 border-primary flex items-center justify-center z-10 transition-transform hover:scale-125">
                <span className="text-xs font-bold text-primary">{day.day}</span>
              </div>

              {/* Card */}
              <Card
                className={`card-elevated ml-12 md:ml-0 md:w-[calc(50%-2rem)] overflow-hidden animate-fade-up group ${
                  idx % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                }`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Day image */}
                {day.image && (
                  <div className="h-40 overflow-hidden relative">
                    <img 
                      src={day.image} 
                      alt={day.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                    
                    {/* Mood badge on image */}
                    <span className="absolute top-3 right-3 text-xs px-3 py-1 rounded-full bg-sakura/80 backdrop-blur-sm text-primary font-medium">
                      {day.mood}
                    </span>
                  </div>
                )}

                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-xs text-gold font-medium">{day.fullDate}</p>
                      <p className="text-sm text-muted-foreground">{day.date}</p>
                      <h3 className="font-display text-2xl text-foreground">{day.title}</h3>
                      <p className="text-sm text-primary flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3" /> {day.location}
                      </p>
                    </div>
                    <div className="p-2 rounded-lg bg-sakura/20 text-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                      {day.icon}
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {day.highlights.map((highlight, i) => (
                      <li 
                        key={i} 
                        className="text-sm text-muted-foreground flex items-start gap-2 opacity-0 animate-fade-up"
                        style={{ animationDelay: `${(idx * 100) + (i * 50)}ms`, animationFillMode: 'forwards' }}
                      >
                        <span className="text-gold mt-0.5">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-border flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      🏨 {day.accommodation}
                    </span>
                  </div>
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
