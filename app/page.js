"use client";

import PeruMap from "./components/PeruMap";
import PendingRegions from "./components/PendingRegions";
import TrendChart from "./components/TrendChart";
import Header from "./components/Header";
import CandidateCard from "./components/CandidateCard";
import VsCenter from "./components/VsCenter";
import ProgressBar from "./components/ProgressBar";
import StatsCards from "./components/StatsCards";
import RegionPanel from "./components/RegionPanel";

import useElectionData from "./hooks/useElectionData";

export default function Home() {

  const electionData = useElectionData();
  return (
    <main className="min-h-screen bg-[#0b1020] text-white p-8">
      <Header updatedAt={electionData.updatedAt} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
        <CandidateCard candidate={electionData.left} side="left" />

        <VsCenter
          progress={electionData.progress}
          difference={electionData.difference}
          winner={electionData.right.name}
        />

        <CandidateCard candidate={electionData.right} side="right" />
      </div>

      <ProgressBar left={electionData.left} right={electionData.right} />

      <StatsCards stats={electionData.stats} />

      <RegionPanel
        regions={electionData.regions}
        leftColor={electionData.left.color}
        rightColor={electionData.right.color}
      />
      <TrendChart />
      <PendingRegions regions={electionData.regions} />
      <PeruMap />
    </main>
  );
}