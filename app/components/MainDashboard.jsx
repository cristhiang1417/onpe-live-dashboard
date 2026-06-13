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

      <GeographySection />

      {/* Footer */}
      <footer className="mt-12 mb-6">
        <div className="rounded-3xl bg-gradient-to-r from-[#0b1020] via-[#132347] to-[#0b1020] border border-cyan-500/20 shadow-2xl p-8 text-center">

          <h3 className="text-2xl md:text-3xl font-bold text-white">
            Dashboard Electoral 2026
          </h3>

          <p className="mt-3 text-gray-300 text-base md:text-lg">
            Monitoreo en tiempo real de resultados oficiales
          </p>

          <div className="my-6 h-px bg-white/10"></div>

          <p className="text-lg text-gray-300">
            Desarrollado por
          </p>

          <p className="mt-2 text-4xl md:text-5xl font-extrabold tracking-wide text-cyan-400">
            Cristhian Gomez
          </p>

          <p className="mt-5 text-sm text-gray-500">
            © {new Date().getFullYear()} | Powered by Next.js • Vercel • ONPE
          </p>

        </div>
      </footer>
    </DashboardShell>
  );
}