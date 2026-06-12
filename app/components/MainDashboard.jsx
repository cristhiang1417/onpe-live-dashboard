"use client";

import DashboardShell from "./DashboardShell";
import TopBar from "./TopBar";
import HeroSection from "./HeroSection";
import LiveUpdates from "./LiveUpdates";
import OverviewSection from "./sections/OverviewSection";
import AnalyticsSection from "./sections/AnalyticsSection";
import GeographySection from "./sections/GeographySection";
import ExecutiveDashboard from "./executive/ExecutiveDashboard";
import TwoColumnLayout from "./layout/TwoColumnLayout";
import { useElection } from "../context/ElectionContext";

export default function MainDashboard() {
  const electionData = useElection();

  return (
    <DashboardShell>
      <TopBar updatedAt={electionData.updatedAt} />

      <ExecutiveDashboard />

      <HeroSection />

      <OverviewSection />

      <TwoColumnLayout
        left={<AnalyticsSection />}
        right={<LiveUpdates />}
      />

      <GeographySection regions={electionData.regions} />
    </DashboardShell>
  );
}