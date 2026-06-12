export default function CandidateCard({ candidate, side }) {
  const isLeft = side === "left";

  return (
    <div className="bg-[#131b30] rounded-3xl p-6 text-center shadow-2xl border border-white/5">
      <div
        className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg"
        style={{ backgroundColor: candidate.color }}
      />

      <h2 className="text-3xl font-bold">
        {candidate.name}
      </h2>

      <h3 className="text-2xl">
        {candidate.lastname}
      </h3>

      <div
        className="mt-6 text-6xl font-bold"
        style={{ color: candidate.color }}
      >
        {candidate.percent.toFixed(3)}%
      </div>

      <div className="mt-3 text-xl">
        {candidate.votes.toLocaleString("en-US")} votos
      </div>

      <div className="mt-4 text-sm text-gray-400">
        {isLeft ? "Candidato 1" : "Candidato 2"}
      </div>
    </div>
  );
}