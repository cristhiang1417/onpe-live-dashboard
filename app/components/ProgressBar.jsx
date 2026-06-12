export default function ProgressBar({ left, right }) {
  return (
    <div className="mt-10 h-6 rounded-full overflow-hidden flex shadow-lg bg-[#111827]">
      <div
        className="transition-all duration-1000 ease-in-out"
        style={{
          width: `${left.percent}%`,
          backgroundColor: left.color,
        }}
      />

      <div
        className="transition-all duration-1000 ease-in-out"
        style={{
          width: `${right.percent}%`,
          backgroundColor: right.color,
        }}
      />
    </div>
  );
}