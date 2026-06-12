    export default function PeruMap({ regions }) {
  return (
    <section className="mt-8 bg-[#131b30] rounded-3xl p-6 border border-white/5">
      <h2 className="text-xl font-bold mb-6">
        Mapa de avance por región
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {regions.map((region) => (
          <div
            key={region.name}
            className="bg-[#0b1020] rounded-2xl p-4 border border-white/5 hover:border-cyan-400 transition"
          >
            <div className="font-bold">{region.name}</div>

            <div className="text-3xl font-bold text-cyan-400 mt-2">
              {region.progress}%
            </div>

            <div className="text-gray-400 text-sm">
              avance contabilizado
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}