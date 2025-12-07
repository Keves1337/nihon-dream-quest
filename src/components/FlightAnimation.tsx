import { useEffect, useState } from "react";
import { Plane } from "lucide-react";

interface FlightAnimationProps {
  onComplete: () => void;
}

const FlightAnimation = ({ onComplete }: FlightAnimationProps) => {
  const [showPlane, setShowPlane] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const planeTimer = setTimeout(() => setShowPlane(true), 500);
    const fadeTimer = setTimeout(() => setFadeOut(true), 4000);
    const completeTimer = setTimeout(() => onComplete(), 5000);

    return () => {
      clearTimeout(planeTimer);
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-1000 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
      style={{
        background: "linear-gradient(135deg, hsl(200 60% 25%), hsl(220 50% 35%), hsl(200 40% 20%))",
      }}
    >
      {/* Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/60 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* World Map Simplified */}
      <div className="relative w-full max-w-4xl h-96 px-8">
        {/* Map background */}
        <svg
          viewBox="0 0 800 400"
          className="w-full h-full opacity-30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Simplified continent outlines */}
          <ellipse cx="400" cy="200" rx="350" ry="150" stroke="hsl(43 70% 52%)" strokeWidth="1" opacity="0.3" />
          <ellipse cx="400" cy="200" rx="250" ry="100" stroke="hsl(43 70% 52%)" strokeWidth="1" opacity="0.2" />
        </svg>

        {/* Dubai Marker */}
        <div className="absolute left-[25%] top-[45%] flex flex-col items-center animate-fade-in">
          <div className="w-4 h-4 bg-gold rounded-full shadow-lg animate-pulse" />
          <span className="mt-2 text-gold-light font-display text-sm font-semibold">Dubai</span>
        </div>

        {/* Japan Marker */}
        <div className="absolute right-[20%] top-[35%] flex flex-col items-center animate-fade-in animation-delay-500">
          <div className="w-4 h-4 bg-sakura rounded-full shadow-lg animate-pulse" />
          <span className="mt-2 text-sakura font-display text-sm font-semibold">Japan</span>
        </div>

        {/* Flight Path */}
        <svg
          viewBox="0 0 800 400"
          className="absolute inset-0 w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 200 180 Q 400 80 640 140"
            stroke="url(#flightGradient)"
            strokeWidth="3"
            strokeDasharray="10 5"
            className="animate-fade-in animation-delay-300"
            opacity="0.8"
          />
          <defs>
            <linearGradient id="flightGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(43 70% 52%)" />
              <stop offset="50%" stopColor="hsl(350 80% 75%)" />
              <stop offset="100%" stopColor="hsl(350 80% 85%)" />
            </linearGradient>
          </defs>
        </svg>

        {/* Animated Plane */}
        {showPlane && (
          <div className="absolute top-[30%] animate-plane-fly">
            <Plane className="w-12 h-12 text-white drop-shadow-lg" />
          </div>
        )}

        {/* Title */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center animate-fade-in animation-delay-700">
          <h1 className="font-display text-4xl md:text-5xl text-white mb-2">
            Amit & Jonathan
          </h1>
          <p className="text-gold-light text-lg font-display italic">
            Honeymoon to Japan
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlightAnimation;
