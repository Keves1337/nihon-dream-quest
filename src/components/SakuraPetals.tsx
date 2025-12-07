const SakuraPetals = () => {
  const petals = [...Array(15)];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {petals.map((_, i) => (
        <div
          key={i}
          className="absolute animate-float-petal"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${6 + Math.random() * 4}s`,
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            className="opacity-60"
            style={{
              transform: `scale(${0.5 + Math.random() * 0.5})`,
            }}
          >
            <ellipse
              cx="10"
              cy="10"
              rx="8"
              ry="5"
              fill="hsl(350 80% 85%)"
              transform="rotate(45 10 10)"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default SakuraPetals;
