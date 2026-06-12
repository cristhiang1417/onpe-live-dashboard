"use client";

export default function PeruSVG({
  regions,
  selected,
  setSelected,
}) {
  function getColor(progress) {
    if (progress >= 99) return "#00d25b";
    if (progress >= 97) return "#facc15";
    if (progress >= 95) return "#fb923c";
    return "#ef4444";
  }

  return (
    <svg
      viewBox="0 0 700 500"
      className="w-full h-auto"
    >
      {regions.map((region, index) => (
        <g
          key={region.id}
          onClick={() => setSelected(region)}
          style={{ cursor: "pointer" }}
        >
          <rect
            x={40 + (index % 4) * 150}
            y={40 + Math.floor(index / 4) * 120}
            width="120"
            height="80"
            rx="10"
            fill={getColor(region.progress)}
            stroke={
              selected?.id === region.id
                ? "#ffffff"
                : "#0b1020"
            }
            strokeWidth="3"
          />

          <text
            x={100 + (index % 4) * 150}
            y={75 + Math.floor(index / 4) * 120}
            textAnchor="middle"
            fill="black"
            fontSize="14"
            fontWeight="bold"
          >
            {region.name}
          </text>
        </g>
      ))}
    </svg>
  );
}