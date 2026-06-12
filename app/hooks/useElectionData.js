"use client";

import { useEffect, useState } from "react";
import { electionData } from "../data/mockData";
import { getElectionResults } from "../services/electionService";

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
    async function loadData() {
      try {
        const apiData = await getElectionResults();

        setData((prev) => ({
          ...apiData,
          history: [
            ...(prev.history || []),
            {
              time: apiData.updatedAt,
              diff: apiData.difference,
            },
          ].slice(-20),
        }));
      } catch (error) {
        console.log("No se pudo sincronizar con ONPE");
      }
    }

    loadData();

    const interval = setInterval(loadData, 5000);

    return () => clearInterval(interval);
  }, []);

  return data;
}