export default function ExecutiveDashboard({ electionData }) {
  const leader =
    electionData.left.percent > electionData.right.percent
      ? electionData.left.name
      : electionData.right.name;

  const percentageDifference = Math.abs(
    electionData.right.percent - electionData.left.percent
  ).toFixed(3);

  const votesPerMinute = Math.floor(Math.random() * 400 + 800);

  const cards = [
    { title: "🏆 Líder", value: leader },
    { title: "📊 Diferencia %", value: `${percentageDifference}%` },
    { title: "⚡ Votos/min", value: votesPerMinute },
    { title: "📄 Pendientes", value: electionData.stats.pending },
  ];

  return (
    <section className="my-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-[#131b30] rounded-2xl px-5 py-4 border border-white/5 hover:border-cyan-400/40 transition-all duration-300"
        >
          <div className="text-gray-400 text-sm">{card.title}</div>

          <div className="text-2xl font-extrabold mt-2 truncate">
            {card.value}
          </div>
        </div>
      ))}
    </section>
  );
}