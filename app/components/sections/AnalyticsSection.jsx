import RegionPanel from "../RegionPanel";
import TrendChart from "../TrendChart";
import { useElection } from "../../context/ElectionContext";

export default function AnalyticsSection() {
  const electionData = useElection();

  return (
    <>
      <RegionPanel
        regions={electionData.regions}
        leftColor={electionData.left.color}
        rightColor={electionData.right.color}
      />

      <TrendChart history={electionData.history || []} />
    </>
  );
}