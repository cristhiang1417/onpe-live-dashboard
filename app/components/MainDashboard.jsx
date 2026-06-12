"use client";

import Header from "./Header";
import CandidateCard from "./CandidateCard";
import VsCenter from "./VsCenter";
import ProgressBar from "./ProgressBar";
import StatsCards from "./StatsCards";
import RegionPanel from "./RegionPanel";
import TrendChart from "./TrendChart";
import PendingRegions from "./PendingRegions";
import PeruMap from "./PeruMap";
import LiveUpdates from "./LiveUpdates";
import useElectionData from "../hooks/useElectionData";

export default function MainDashboard() {
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

      <TrendChart history={electionData.history || []} />

      <PendingRegions regions={electionData.regions} />

      <PeruMap />

      <LiveUpdates />
    </main>
  );
}