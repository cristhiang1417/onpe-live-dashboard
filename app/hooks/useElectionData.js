"use client";

import { useEffect, useState } from "react";
import api from "../services/api";
import { electionData } from "../data/mockData";

export default function useElectionData() {
  const [data, setData] = useState(electionData);

  useEffect(() => {
    async function load() {
      try {
        const res = await api.get("/results");
        setData(res.data);
      } catch (e) {
        console.log("Usando datos mock");
      }
    }

    load();
  }, []);

  return data;
}