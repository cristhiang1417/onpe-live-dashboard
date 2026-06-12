export default function RegionPanel({ regions, leftColor, rightColor }) {
  return (
    <section className="mt-8 bg-[#131b30] rounded-3xl p-6 border border-white/5">
      <div className="flex justify-between mb-6">
        <h2 className="text-xl font-bold">Voto y avance por región</h2>
        <span className="text-gray-400">{regions.length} regiones</span>
      </div>

      <div className="space-y-6">
        {regions.map((region) => (
          <div key={region.name}>
            <div className="flex justify-between mb-2">
              <h3 className="font-bold text-lg">{region.name}</h3>
              <span className="text-gray-300">{region.progress}%</span>
            </div>

            <div className="h-7 rounded-full overflow-hidden flex">
              <div
                className="flex items-center justify-center text-sm font-bold text-black"
                style={{
                  width: `${region.left}%`,
                  backgroundColor: leftColor,
                }}
              >
                {region.left}%
              </div>

              <div
                className="flex items-center justify-center text-sm font-bold text-black"
                style={{
                  width: `${region.right}%`,
                  backgroundColor: rightColor,
                }}
              >
                {region.right}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}