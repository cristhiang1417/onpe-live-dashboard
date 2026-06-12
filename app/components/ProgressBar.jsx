export default function ProgressBar({ left, right }) {
  return (
    <div className="mt-10 h-6 rounded-full overflow-hidden flex shadow-lg">
      <div
        style={{
          width: `${left.percent}%`,
          backgroundColor: left.color,
        }}
      />

      <div
        style={{
          width: `${right.percent}%`,
          backgroundColor: right.color,
        }}
      />
    </div>
  );
}