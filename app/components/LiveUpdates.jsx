"use client";

import { useEffect, useState } from "react";
import { useElection } from "../context/ElectionContext";

const events = [
  "Lima actualizó 245 actas",
  "Junín alcanzó 99.2%",
  "Roberto aumenta ventaja",
  "Loreto reportó nuevas mesas",
  "La Libertad llegó a 99.4%",
  "ONPE procesó 180 nuevas actas",
  "Arequipa actualizó resultados",
  "Cusco incrementó su avance",
  "Lambayeque cerró nuevas mesas",
  "Ucayali reportó nueva transmisión",
];

export default function LiveUpdates() {
  const electionData = useElection();
  const [items, setItems] = useState([]);

  useEffect(() => {
    function addEvent() {
      const now = new Date().toLocaleTimeString("es-PE");
      const event = events[Math.floor(Math.random() * events.length)];

      setItems((prev) =>
        [
          {
            id: Date.now(),
            time: now,
            text: `${event} | Diferencia actual: ${electionData.difference.toLocaleString(
              "en-US"
            )} votos`,
          },
          ...prev,
        ].slice(0, 8)
      );
    }

    addEvent();

    const interval = setInterval(addEvent, 4000);

    return () => clearInterval(interval);
  }, [electionData.difference]);

  return (
    <section className="mt-8 bg-[#131b30] rounded-3xl p-6 border border-white/5">
      <h2 className="text-2xl font-bold mb-5">
        🔴 Actividad en tiempo real
      </h2>

      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-[#0d1428] rounded-xl p-3 border border-white/5 hover:border-cyan-400/30 transition-all"
          >
            <div className="text-cyan-400 font-bold text-sm">
              {item.time}
            </div>

            <div className="text-gray-200 text-sm mt-1">
              {item.text}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}