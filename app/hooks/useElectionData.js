"use client";

import { useEffect, useState } from "react";
import { electionData } from "../data/mockData";

export default function useElectionData() {
  const [data, setData] = useState(electionData);

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) => {
        const leftVotes = prev.left.votes + Math.floor(Math.random() * 120);
        const rightVotes = prev.right.votes + Math.floor(Math.random() * 150);

        const totalVotes = leftVotes + rightVotes;

        const leftPercent = Number(((leftVotes / totalVotes) * 100).toFixed(3));
        const rightPercent = Number(((rightVotes / totalVotes) * 100).toFixed(3));

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

          difference: Math.abs(rightVotes - leftVotes),
        };
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return data;
}