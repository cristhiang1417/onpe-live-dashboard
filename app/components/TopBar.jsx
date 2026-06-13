export default function TopBar({ updatedAt }) {
  return (
    <div className="mb-6 md:mb-8 rounded-3xl border border-white/10 bg-[#131b30] px-5 py-5 md:px-8 md:py-6 shadow-2xl">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

        {/* Título */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <span className="h-3 w-3 rounded-full bg-red-500 animate-pulse"></span>

            <span className="text-red-400 font-bold tracking-wide">
              EN VIVO
            </span>
          </div>

          <h1 className="mt-3 font-extrabold leading-none text-5xl sm:text-6xl lg:text-7xl">
            SEGUNDA VUELTA
          </h1>

          <p className="mt-2 text-gray-400 text-lg sm:text-xl">
            Elección Presidencial 2026
          </p>
        </div>

        {/* Hora */}
        <div className="text-center md:text-right">
          <div className="text-gray-400 text-base md:text-lg">
            Última actualización
          </div>

          <div className="mt-2 font-bold text-4xl sm:text-5xl">
            {updatedAt}
          </div>
        </div>

      </div>
    </div>
  );
}