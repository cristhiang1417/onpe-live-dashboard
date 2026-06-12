"use client";

import { createContext, useContext } from "react";
import useElectionData from "../hooks/useElectionData";

const ElectionContext = createContext(null);

export function ElectionProvider({ children }) {
  const electionData = useElectionData();

  return (
    <ElectionContext.Provider value={electionData}>
      {children}
    </ElectionContext.Provider>
  );
}

export function useElection() {
  const context = useContext(ElectionContext);

  if (!context) {
    throw new Error("useElection debe usarse dentro de ElectionProvider");
  }

  return context;
}