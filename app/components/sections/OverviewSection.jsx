import ProgressBar from "../ProgressBar";
import StatsCards from "../StatsCards";
import { useElection } from "../../context/ElectionContext";

export default function OverviewSection() {
  const electionData = useElection();

  return (
    <>
      <ProgressBar
        left={electionData.left}
        right={electionData.right}
      />

      <StatsCards stats={electionData.stats} />
    </>
  );
}