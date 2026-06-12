import ProgressBar from "../ProgressBar";
import StatsCards from "../StatsCards";

export default function OverviewSection({
  left,
  right,
  stats,
}) {
  return (
    <>
      <ProgressBar
        left={left}
        right={right}
      />

      <StatsCards
        stats={stats}
      />
    </>
  );
}