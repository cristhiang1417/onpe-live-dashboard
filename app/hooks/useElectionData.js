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
    async function loadInitialData() {
      try {
        const apiData = await getElectionResults();

        if (apiData) {
          setData({
            ...apiData,
            history: apiData.history || [
              {
                time: new Date().toLocaleTimeString("es-PE"),
                diff: apiData.difference,
              },
            ],
          });
        }
      } catch (error) {
        console.log("Usando datos simulados");
      }
    }

    loadInitialData();

    const interval = setInterval(() => {
      setData((prev) => {
        const leftVotes = prev.left.votes + Math.floor(Math.random() * 120);
        const rightVotes = prev.right.votes + Math.floor(Math.random() * 150);

        const totalVotes = leftVotes + rightVotes;

        const leftPercent = Number(((leftVotes / totalVotes) * 100).toFixed(3));
        const rightPercent = Number(((rightVotes / totalVotes) * 100).toFixed(3));

        const difference = Math.abs(rightVotes - leftVotes);

        const now = new Date().toLocaleTimeString("es-PE");

        return {
          ...prev,
          updatedAt: now,

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
            {
              time: now,
              diff: difference,
            },
          ].slice(-20),
        };
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return data;
}