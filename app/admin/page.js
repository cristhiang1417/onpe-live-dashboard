"use client";

import { useState } from "react";

export default function AdminPage() {
  const [leftVotes, setLeftVotes] = useState(9008804);
  const [rightVotes, setRightVotes] = useState(9018592);
  const [message, setMessage] = useState("");

  async function updateResults() {
    try {
      setMessage("Actualizando resultados...");

      const response = await fetch("/api/results", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          leftVotes,
          rightVotes,
        }),
      });

      if (!response.ok) {
        setMessage("Error al actualizar resultados");
        return;
      }

      await response.json();

      setMessage("✅ Resultados actualizados correctamente");
    } catch (error) {
      setMessage("❌ Error de conexión con la API");
    }
  }

  return (
    <main className="min-h-screen bg-[#0b1020] text-white p-8">
      <section className="max-w-3xl mx-auto bg-[#131b30] rounded-3xl p-8 border border-white/10">
        <h1 className="text-4xl font-bold mb-2">Panel Administrador</h1>

        <p className="text-gray-400 mb-8">
          Gestión manual de resultados electorales.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#0d1428] rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-orange-400">
              KEIKO FUJIMORI
            </h2>

            <label className="block mt-4 text-gray-400">Votos</label>

            <input
              type="number"
              className="mt-2 w-full rounded-xl bg-[#020617] border border-white/10 px-4 py-3 text-white"
              value={leftVotes}
              onChange={(e) => setLeftVotes(Number(e.target.value))}
            />
          </div>

          <div className="bg-[#0d1428] rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-green-400">
              ROBERTO SANCHEZ
            </h2>

            <label className="block mt-4 text-gray-400">Votos</label>

            <input
              type="number"
              className="mt-2 w-full rounded-xl bg-[#020617] border border-white/10 px-4 py-3 text-white"
              value={rightVotes}
              onChange={(e) => setRightVotes(Number(e.target.value))}
            />
          </div>
        </div>

        <button
          type="button"
          onClick={updateResults}
          className="mt-8 w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-4 rounded-2xl transition-all"
        >
          Actualizar resultados
        </button>

        <div className="mt-6 text-center text-lg font-bold text-cyan-400 min-h-8">
          {message}
        </div>
      </section>
    </main>
  );
}