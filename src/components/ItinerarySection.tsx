import { MapPin, Sparkles, Heart, Camera, UtensilsCrossed, Castle, TreePine } from "lucide-react";
import { Card } from "@/components/ui/card";

interface DayPlan {
  day: number;
  date: string;
  location: string;
  title: string;
  highlights: string[];
  accommodation: string;
  icon: React.ReactNode;
  mood: string;
}

const itinerary: DayPlan[] = [
  {
    day: 1,
    date: "Day 1",
    location: "Tokyo",
    title: "Arrival & Shibuya",
    highlights: [
      "Arrive at Narita/Haneda Airport",
      "Check into Tokyo hotel (Shibuya area)",
      "Explore Shibuya Crossing & Hachiko Statue",
      "Evening walk in Harajuku",
      "Dinner in Omotesando",
    ],
    accommodation: "Tokyo Hotel - Shibuya",
    icon: <Sparkles className="w-5 h-5" />,
    mood: "Excitement",
  },
  {
    day: 2,
    date: "Day 2",
    location: "Tokyo",
    title: "Traditional Tokyo",
    highlights: [
      "Morning at Senso-ji Temple (Asakusa)",
      "Explore Nakamise Shopping Street",
      "Lunch at traditional ramen shop",
      "Afternoon in Akihabara",
      "Evening TeamLab or Tokyo Skytree",
    ],
    accommodation: "Tokyo Hotel - Shibuya",
    icon: <TreePine className="w-5 h-5" />,
    mood: "Cultural",
  },
  {
    day: 3,
    date: "Day 3-4",
    location: "Tokyo Disney",
    title: "Disney Magic ✨",
    highlights: [
      "Check into Tokyo Disneyland Hotel",
      "Stay in Beauty and the Beast Room!",
      "Full day at Tokyo Disneyland",
      "Enchanted Tale of Beauty & the Beast ride",
      "Night parade & fireworks",
    ],
    accommodation: "Tokyo Disneyland Hotel - Beauty & Beast Room",
    icon: <Castle className="w-5 h-5" />,
    mood: "Magical",
  },
  {
    day: 4,
    date: "Day 4",
    location: "Tokyo Disney",
    title: "DisneySea Adventure",
    highlights: [
      "Morning: Enjoy hotel breakfast & amenities",
      "Full day at Tokyo DisneySea",
      "Journey to the Center of the Earth",
      "Mediterranean Harbor at sunset",
      "Romantic dinner at the park",
    ],
    accommodation: "Tokyo Disneyland Hotel - Beauty & Beast Room",
    icon: <Heart className="w-5 h-5" />,
    mood: "Romance",
  },
  {
    day: 5,
    date: "Day 5",
    location: "Kyoto",
    title: "Shinkansen to Kyoto",
    highlights: [
      "Morning: Travel to Kyoto via Shinkansen",
      "Check into traditional Ryokan",
      "Afternoon: Fushimi Inari Shrine (10,000 torii gates)",
      "Evening: Gion district walk",
      "Possible Geisha spotting",
    ],
    accommodation: "Traditional Kyoto Ryokan",
    icon: <Camera className="w-5 h-5" />,
    mood: "Traditional",
  },
  {
    day: 6,
    date: "Day 6",
    location: "Kyoto",
    title: "Temples & Gardens",
    highlights: [
      "Morning: Kinkaku-ji (Golden Pavilion)",
      "Bamboo Grove in Arashiyama",
      "Lunch: Kyoto-style kaiseki",
      "Afternoon: Nijo Castle",
      "Evening: Private onsen experience",
    ],
    accommodation: "Traditional Kyoto Ryokan",
    icon: <TreePine className="w-5 h-5" />,
    mood: "Peaceful",
  },
  {
    day: 7,
    date: "Day 7",
    location: "Nara & Osaka",
    title: "Day Trip & Osaka",
    highlights: [
      "Morning: Day trip to Nara",
      "Feed the sacred deer at Nara Park",
      "Visit Todai-ji Temple",
      "Afternoon: Travel to Osaka",
      "Evening: Dotonbori nightlife",
    ],
    accommodation: "Osaka Hotel",
    icon: <Sparkles className="w-5 h-5" />,
    mood: "Adventure",
  },
  {
    day: 8,
    date: "Day 8",
    location: "Osaka",
    title: "Osaka Food Tour",
    highlights: [
      "Morning: Osaka Castle",
      "Kuromon Market food exploration",
      "Best takoyaki & okonomiyaki",
      "Afternoon: Shinsekai district",
      "Last shopping in Shinsaibashi",
      "Farewell dinner at high-end izakaya",
    ],
    accommodation: "Osaka Hotel",
    icon: <UtensilsCrossed className="w-5 h-5" />,
    mood: "Foodie",
  },
  {
    day: 9,
    date: "Day 9",
    location: "Departure",
    title: "Sayonara Japan",
    highlights: [
      "Last morning in Osaka",
      "Travel to Kansai International Airport",
      "Last-minute airport shopping",
      "Flight back to Dubai",
      "Hearts full of memories ❤️",
    ],
    accommodation: "Flight Home",
    icon: <Heart className="w-5 h-5" />,
    mood: "Bittersweet",
  },
];

const ItinerarySection = () => {
  return (
    <section id="itinerary" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <MapPin className="w-6 h-6 text-primary" />
            <span className="text-primary font-display text-lg">旅程</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Your Journey
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            A carefully crafted 9-day adventure through Japan's most enchanting destinations
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
              <div className="absolute left-4 md:left-1/2 w-8 h-8 -ml-4 rounded-full bg-background border-4 border-primary flex items-center justify-center z-10">
                <span className="text-xs font-bold text-primary">{day.day}</span>
              </div>

              {/* Card */}
              <Card
                className={`card-elevated ml-12 md:ml-0 md:w-[calc(50%-2rem)] p-6 animate-fade-up ${
                  idx % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                }`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground">{day.date}</p>
                    <h3 className="font-display text-2xl text-foreground">{day.title}</h3>
                    <p className="text-sm text-primary flex items-center gap-1 mt-1">
                      <MapPin className="w-3 h-3" /> {day.location}
                    </p>
                  </div>
                  <div className="p-2 rounded-lg bg-sakura/20 text-primary">
                    {day.icon}
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {day.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-gold mt-0.5">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    🏨 {day.accommodation}
                  </span>
                  <span className="text-xs px-2 py-1 rounded-full bg-sakura/20 text-primary">
                    {day.mood}
                  </span>
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
