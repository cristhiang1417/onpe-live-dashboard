import Image from "next/image";

export default function CandidateCard({ candidate, side }) {
  const isLeft = side === "left";

  const candidateImage = isLeft
    ? "/candidates/keiko.png"
    : "/candidates/roberto.png";

  const partyImage = isLeft
    ? "/parties/fuerza-popular.png"
    : "/parties/juntos-peru.png";

  return (
    <div className="bg-[#131b30] rounded-3xl p-8 text-center shadow-2xl border border-white/5 transition-all duration-500 hover:scale-[1.02]">
      <div className="relative w-60 h-60 mx-auto mb-5 rounded-full overflow-hidden border-4 border-white/10">
        <Image
          src={candidateImage}
          alt={candidate.name}
          fill
          className="object-cover"
          priority
        />
      </div>

      <h2 className="text-4xl font-extrabold">{candidate.name}</h2>
      <h3 className="text-3xl">{candidate.lastname}</h3>

      <div className="flex flex-col items-center mt-6">
        <Image
          src={partyImage}
          alt={candidate.party || "Partido político"}
          width={160}
          height={160}
          className="object-contain transition-transform duration-300 hover:scale-105"
        />

        <div className="mt-3 text-xl font-bold tracking-wide text-gray-200 text-center">
          {candidate.party}
        </div>
      </div>

      <div
        className="mt-6 text-7xl font-bold transition-all duration-700"
        style={{ color: candidate.color }}
      >
        {candidate.percent.toFixed(3)}%
      </div>

      <div className="mt-3 text-2xl transition-all duration-700">
        {candidate.votes.toLocaleString("en-US")} votos
      </div>
    </div>
  );
}