export default function StatsCards({ stats }) {
  const items = [
    { label: "Actas enviadas", value: stats.sent },
    { label: "Pendientes", value: stats.pending },
    { label: "Total actas", value: stats.total },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
      {items.map((item) => (
        <div
          key={item.label}
          className="bg-[#131b30] rounded-2xl p-6 text-center border border-white/5"
        >
          <div className="text-4xl font-bold">
            {item.value.toLocaleString("en-US")}
          </div>

          <div className="text-gray-400">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}