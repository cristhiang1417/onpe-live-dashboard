export default function VsCenter({ progress, difference, winner }) {
  return (
    <div className="text-center">
      <div className="text-7xl font-extrabold text-white/70 mb-8">
        VS
      </div>

      <div className="text-7xl font-extrabold text-cyan-400">
        {progress.toFixed(2)}%
      </div>

      <div className="text-gray-400 mt-2">
        actas contabilizadas
      </div>

      <div className="text-6xl font-extrabold mt-12">
        {difference.toLocaleString("en-US")}
      </div>

      <div className="text-gray-400 mt-2">
        votos a favor de {winner}
      </div>
    </div>
  );
}