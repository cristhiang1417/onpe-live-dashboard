export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b1020] text-white p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <span className="bg-red-600 px-3 py-1 rounded-full text-sm font-bold">
            🔴 EN VIVO
          </span>

          <h1 className="text-4xl font-bold mt-4">
            SEGUNDA VUELTA
          </h1>

          <p className="text-gray-400">
            Elección Presidencial 2026
          </p>
        </div>

        <div className="text-right">
          <p className="text-gray-400">
            Última actualización
          </p>

          <h2 className="text-2xl font-bold">
            21:35:12
          </h2>
        </div>
      </div>

      {/* VS */}

      <div className="grid grid-cols-3 gap-4 items-center">

        {/* Izquierda */}

        <div className="bg-[#131b30] rounded-3xl p-6 text-center">

          <div className="w-32 h-32 rounded-full bg-orange-500 mx-auto mb-4"></div>

          <h2 className="text-3xl font-bold">
            KEIKO
          </h2>

          <h3 className="text-2xl">
            FUJIMORI
          </h3>

          <div className="mt-6 text-6xl font-bold text-orange-400">
            49.973%
          </div>

          <div className="mt-3 text-xl">
            9,008,804 votos
          </div>

        </div>

        {/* Centro */}

        <div className="text-center">

          <div className="text-7xl font-bold">
            VS
          </div>

          <div className="mt-8">

            <div className="text-6xl font-bold text-cyan-400">
              97.92%
            </div>

            <div className="text-gray-400">
              contabilizado
            </div>

          </div>

          <div className="mt-10">

            <div className="text-5xl font-bold">
              9,788
            </div>

            <div className="text-gray-400">
              votos de diferencia
            </div>

          </div>

        </div>

        {/* Derecha */}

        <div className="bg-[#131b30] rounded-3xl p-6 text-center">

          <div className="w-32 h-32 rounded-full bg-green-500 mx-auto mb-4"></div>

          <h2 className="text-3xl font-bold">
            ROBERTO
          </h2>

          <h3 className="text-2xl">
            SANCHEZ
          </h3>

          <div className="mt-6 text-6xl font-bold text-green-400">
            50.027%
          </div>

          <div className="mt-3 text-xl">
            9,018,592 votos
          </div>

        </div>

      </div>

      {/* Barra */}

      <div className="mt-10 h-6 rounded-full overflow-hidden flex">

        <div
          className="bg-orange-500"
          style={{ width: "49.973%" }}
        />

        <div
          className="bg-green-500"
          style={{ width: "50.027%" }}
        />

      </div>

      {/* Cards */}

      <div className="grid grid-cols-3 gap-4 mt-8">

        <div className="bg-[#131b30] rounded-2xl p-6 text-center">

          <div className="text-4xl font-bold">
            1,615
          </div>

          <div className="text-gray-400">
            Actas enviadas
          </div>

        </div>

        <div className="bg-[#131b30] rounded-2xl p-6 text-center">

          <div className="text-4xl font-bold">
            318
          </div>

          <div className="text-gray-400">
            Pendientes
          </div>

        </div>

        <div className="bg-[#131b30] rounded-2xl p-6 text-center">

          <div className="text-4xl font-bold">
            92,766
          </div>

          <div className="text-gray-400">
            Total actas
          </div>

        </div>

      </div>

    </main>
  );
}