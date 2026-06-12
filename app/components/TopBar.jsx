export default function TopBar({ updatedAt }) {
  return (
    <div className="mb-8 rounded-3xl border border-white/10 bg-[#131b30] px-6 py-4 shadow-2xl">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        
        <div>
          <div className="flex items-center gap-3">
            <span className="h-3 w-3 rounded-full bg-red-500 animate-pulse"></span>

            <span className="text-red-400 font-bold">
              EN VIVO
            </span>
          </div>

          <h1 className="text-5xl font-extrabold mt-3">
            SEGUNDA VUELTA
          </h1>

          <p className="text-gray-400 text-xl">
            Elección Presidencial 2026
          </p>
        </div>

        <div className="text-right">
          <div className="text-gray-400 text-lg">
            Última actualización
          </div>

          <div className="text-4xl font-bold">
            {updatedAt}
          </div>
        </div>

      </div>
    </div>
  );
}