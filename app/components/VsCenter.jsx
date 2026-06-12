export default function VsCenter({ progress, difference, winner }) {
  return (
    <div className="text-center transition-all duration-700">
      <div className="text-7xl font-bold animate-pulse">
        VS
      </div>

      <div className="mt-8">
        <div className="text-6xl font-bold text-cyan-400 transition-all duration-700">
          {progress.toFixed(2)}%
        </div>

        <div className="text-gray-400">
          actas contabilizadas
        </div>
      </div>

      <div className="mt-10">
        <div className="text-5xl font-bold transition-all duration-700">
          {difference.toLocaleString("en-US")}
        </div>

        <div className="text-gray-400">
          votos a favor de {winner}
        </div>
      </div>
    </div>
  );
}