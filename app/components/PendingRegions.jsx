export default function PendingRegions({ regions }) {
  const pendingRegions = [...regions].sort((a, b) => a.progress - b.progress);

  return (
    <section className="mt-8 bg-[#131b30] rounded-3xl p-6 border border-white/5">
      <h2 className="text-xl font-bold mb-6">
        Regiones con menor avance
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {pendingRegions.map((region, index) => (
          <div
            key={region.name}
            className="bg-[#0b1020] rounded-2xl p-4 border border-white/5"
          >
            <div className="text-gray-400 text-sm">
              #{index + 1}
            </div>

            <div className="text-lg font-bold">
              {region.name}
            </div>

            <div className="text-3xl font-bold text-cyan-400 mt-2">
              {region.progress}%
            </div>

            <div className="text-gray-400 text-sm">
              contabilizado
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}