import { useState } from "react";

interface FlightAnimationProps {
  onComplete: () => void;
}

const FlightAnimation = ({ onComplete }: FlightAnimationProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleSunClick = () => {
    setIsClicked(true);
    setTimeout(() => onComplete(), 1500);
  };

  return (
    <div
      className={`fixed inset-0 z-50 overflow-hidden transition-all duration-1500 ${
        isClicked ? "opacity-0 scale-110" : "opacity-100 scale-100"
      }`}
      style={{
        background: "linear-gradient(180deg, #FF8C42 0%, #FFB347 25%, #FFECD2 50%, #A8D8EA 75%, #AA96DA 100%)",
      }}
    >
      {/* Sky gradient overlay for anime feel */}
      <div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 50% 80%, rgba(255, 200, 150, 0.4) 0%, transparent 60%)",
        }}
      />

      {/* Distant mountains - back layer */}
      <svg
        className="absolute bottom-0 w-full"
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
        style={{ height: "50%" }}
      >
        <defs>
          <linearGradient id="mountainBack" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#6B5B95" />
            <stop offset="100%" stopColor="#4A4063" />
          </linearGradient>
        </defs>
        <path
          d="M0 400 L0 250 Q180 150 360 220 Q540 180 720 200 Q900 120 1080 180 Q1260 140 1440 200 L1440 400 Z"
          fill="url(#mountainBack)"
          opacity="0.7"
        />
      </svg>

      {/* Middle mountains */}
      <svg
        className="absolute bottom-0 w-full"
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
        style={{ height: "45%" }}
      >
        <defs>
          <linearGradient id="mountainMid" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#5D4E7A" />
            <stop offset="100%" stopColor="#3D3456" />
          </linearGradient>
        </defs>
        <path
          d="M0 400 L0 280 Q120 200 240 250 Q420 150 600 220 Q780 170 960 230 Q1140 160 1320 210 L1440 180 L1440 400 Z"
          fill="url(#mountainMid)"
          opacity="0.85"
        />
      </svg>

      {/* Front mountains */}
      <svg
        className="absolute bottom-0 w-full"
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
        style={{ height: "40%" }}
      >
        <defs>
          <linearGradient id="mountainFront" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2D2438" />
            <stop offset="100%" stopColor="#1A1423" />
          </linearGradient>
        </defs>
        <path
          d="M0 400 L0 300 Q200 240 400 280 Q600 200 800 260 Q1000 220 1200 270 Q1350 230 1440 260 L1440 400 Z"
          fill="url(#mountainFront)"
        />
      </svg>

      {/* Sun - clickable */}
      <div
        onClick={handleSunClick}
        className={`absolute cursor-pointer transition-all duration-500 hover:scale-110 ${
          isClicked ? "scale-150 opacity-0" : ""
        }`}
        style={{
          left: "50%",
          top: "35%",
          transform: "translateX(-50%)",
        }}
      >
        {/* Sun glow */}
        <div
          className="absolute rounded-full animate-pulse"
          style={{
            width: "200px",
            height: "200px",
            left: "-40px",
            top: "-40px",
            background: "radial-gradient(circle, rgba(255, 200, 100, 0.6) 0%, transparent 70%)",
          }}
        />
        {/* Sun core */}
        <div
          className="relative rounded-full shadow-2xl"
          style={{
            width: "120px",
            height: "120px",
            background: "radial-gradient(circle at 30% 30%, #FFEB3B 0%, #FF9800 50%, #FF5722 100%)",
            boxShadow: "0 0 60px rgba(255, 152, 0, 0.8), 0 0 120px rgba(255, 87, 34, 0.4)",
          }}
        />
        {/* Click hint */}
        <p className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-white/80 text-sm font-display whitespace-nowrap animate-pulse">
          ✨ Click the sun ✨
        </p>
      </div>

      {/* Cherry blossom tree - main trunk */}
      <svg
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
        width="600"
        height="500"
        viewBox="0 0 600 500"
        style={{ zIndex: 10 }}
      >
        <defs>
          <linearGradient id="trunkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3D2817" />
            <stop offset="50%" stopColor="#5D4037" />
            <stop offset="100%" stopColor="#3D2817" />
          </linearGradient>
          <radialGradient id="blossomPink" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFB7C5" />
            <stop offset="70%" stopColor="#FF8FA3" />
            <stop offset="100%" stopColor="#FF6B8A" />
          </radialGradient>
          <radialGradient id="blossomLight" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFF0F3" />
            <stop offset="70%" stopColor="#FFCCD5" />
            <stop offset="100%" stopColor="#FFB3C1" />
          </radialGradient>
        </defs>

        {/* Tree trunk */}
        <path
          d="M280 500 Q270 450 260 400 Q250 350 270 300 Q280 250 260 200 Q250 180 270 150"
          stroke="url(#trunkGradient)"
          strokeWidth="40"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M320 500 Q330 450 340 400 Q350 350 330 300 Q320 250 340 200 Q350 180 330 150"
          stroke="url(#trunkGradient)"
          strokeWidth="35"
          fill="none"
          strokeLinecap="round"
        />

        {/* Main branches */}
        <path d="M270 300 Q200 250 120 220" stroke="url(#trunkGradient)" strokeWidth="20" fill="none" strokeLinecap="round" />
        <path d="M330 300 Q400 250 480 220" stroke="url(#trunkGradient)" strokeWidth="20" fill="none" strokeLinecap="round" />
        <path d="M260 200 Q180 150 100 130" stroke="url(#trunkGradient)" strokeWidth="15" fill="none" strokeLinecap="round" />
        <path d="M340 200 Q420 150 500 130" stroke="url(#trunkGradient)" strokeWidth="15" fill="none" strokeLinecap="round" />
        <path d="M300 150 Q300 100 320 50" stroke="url(#trunkGradient)" strokeWidth="12" fill="none" strokeLinecap="round" />

        {/* Smaller branches */}
        <path d="M150 230 Q100 200 60 180" stroke="url(#trunkGradient)" strokeWidth="8" fill="none" strokeLinecap="round" />
        <path d="M450 230 Q500 200 540 180" stroke="url(#trunkGradient)" strokeWidth="8" fill="none" strokeLinecap="round" />
        <path d="M120 220 Q80 180 50 200" stroke="url(#trunkGradient)" strokeWidth="6" fill="none" strokeLinecap="round" />
        <path d="M480 220 Q520 180 550 200" stroke="url(#trunkGradient)" strokeWidth="6" fill="none" strokeLinecap="round" />
      </svg>

      {/* Blossom clusters - animated */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[500px]" style={{ zIndex: 11 }}>
        {/* Large blossom clusters */}
        {[
          { x: 80, y: 120, size: 80, delay: 0 },
          { x: 520, y: 120, size: 85, delay: 0.2 },
          { x: 120, y: 180, size: 90, delay: 0.4 },
          { x: 480, y: 180, size: 88, delay: 0.6 },
          { x: 60, y: 200, size: 70, delay: 0.8 },
          { x: 540, y: 200, size: 72, delay: 1 },
          { x: 150, y: 240, size: 95, delay: 0.3 },
          { x: 450, y: 240, size: 92, delay: 0.5 },
          { x: 200, y: 280, size: 85, delay: 0.7 },
          { x: 400, y: 280, size: 88, delay: 0.9 },
          { x: 280, y: 100, size: 75, delay: 0.2 },
          { x: 320, y: 60, size: 65, delay: 0.4 },
          { x: 100, y: 150, size: 80, delay: 0.1 },
          { x: 500, y: 150, size: 78, delay: 0.3 },
        ].map((cluster, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: cluster.x,
              bottom: 500 - cluster.y,
              width: cluster.size,
              height: cluster.size,
              background: i % 2 === 0 
                ? "radial-gradient(ellipse, #FFB7C5 0%, #FF8FA3 40%, transparent 70%)"
                : "radial-gradient(ellipse, #FFF0F3 0%, #FFCCD5 40%, transparent 70%)",
              borderRadius: "50%",
              animationDelay: `${cluster.delay}s`,
              animationDuration: "3s",
            }}
          />
        ))}

        {/* Individual flower petals overlay */}
        {[...Array(40)].map((_, i) => (
          <div
            key={`petal-${i}`}
            className="absolute rounded-full"
            style={{
              left: 50 + Math.random() * 500,
              bottom: 150 + Math.random() * 300,
              width: 8 + Math.random() * 12,
              height: 8 + Math.random() * 12,
              background: Math.random() > 0.5 ? "#FFB7C5" : "#FFF0F3",
              opacity: 0.8 + Math.random() * 0.2,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
      </div>

      {/* Falling petals animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <div
            key={`falling-${i}`}
            className="absolute animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-20px`,
              width: "12px",
              height: "12px",
              background: Math.random() > 0.5 ? "#FFB7C5" : "#FFCCD5",
              borderRadius: "50% 0 50% 50%",
              opacity: 0.7,
              animation: `fall ${5 + Math.random() * 5}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Ground/grass silhouette */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20"
        style={{
          background: "linear-gradient(180deg, #1A1423 0%, #0D0A10 100%)",
        }}
      />

      {/* Title text */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 text-center z-20">
        <h1 
          className="font-display text-5xl md:text-7xl mb-3"
          style={{
            color: "#FFF0F3",
            textShadow: "2px 2px 20px rgba(0, 0, 0, 0.5), 0 0 40px rgba(255, 183, 197, 0.5)",
          }}
        >
          Amit & Jonathan
        </h1>
        <p 
          className="text-xl md:text-2xl font-display italic"
          style={{
            color: "#FFCCD5",
            textShadow: "1px 1px 10px rgba(0, 0, 0, 0.5)",
          }}
        >
          ירח דבש ביפן 🌸
        </p>
      </div>

      <style>{`
        @keyframes fall {
          0% {
            transform: translateY(-20px) rotate(0deg) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.7;
          }
          90% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(100vh) rotate(720deg) translateX(100px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default FlightAnimation;
