export default function DepartmentTooltip({ region }) {
  if (!region) return null;

  return (
    <div className="bg-[#0b1020] rounded-2xl p-4 border border-cyan-400/40">
      <h3 className="font-bold text-lg">{region.name}</h3>

      <p className="text-cyan-400 text-3xl font-bold mt-2">
        {region.progress}%
      </p>

      <p className="text-gray-400 text-sm">avance contabilizado</p>

      <div className="mt-4 text-sm">
        <div>Keiko: {region.left}%</div>
        <div>Roberto: {region.right}%</div>
      </div>
    </div>
  );
}