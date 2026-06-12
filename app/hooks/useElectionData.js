"use client";

import { useEffect, useState } from "react";
import { electionData } from "../data/mockData";

export default function useElectionData() {
  const [data, setData] = useState({
    ...electionData,
    history: [
      {
        time: new Date().toLocaleTimeString("es-PE"),
        diff: electionData.difference,
      },
    ],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) => {
        // Generar nuevos votos
        const leftVotes =
          prev.left.votes + Math.floor(Math.random() * 120);

        const rightVotes =
          prev.right.votes + Math.floor(Math.random() * 150);

        const totalVotes = leftVotes + rightVotes;

        // Calcular porcentajes
        const leftPercent = Number(
          ((leftVotes / totalVotes) * 100).toFixed(3)
        );

        const rightPercent = Number(
          ((rightVotes / totalVotes) * 100).toFixed(3)
        );

        // Diferencia de votos
        const difference = Math.abs(
          rightVotes - leftVotes
        );

        // Nuevo punto para el gráfico
        const newPoint = {
          time: new Date().toLocaleTimeString("es-PE"),
          diff: difference,
        };

        return {
          ...prev,

          updatedAt: new Date().toLocaleTimeString("es-PE"),

          left: {
            ...prev.left,
            votes: leftVotes,
            percent: leftPercent,
          },

          right: {
            ...prev.right,
            votes: rightVotes,
            percent: rightPercent,
          },

          difference,

          history: [
            ...(prev.history || []),
            newPoint,
          ].slice(-20),
        };
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return data;
}