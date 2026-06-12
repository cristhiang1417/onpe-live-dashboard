import RegionPanel from "../RegionPanel";
import { useElection } from "../../context/ElectionContext";

export default function RegionSection() {
  const electionData = useElection();

  return (
    <RegionPanel
      regions={electionData.regions}
      leftColor={electionData.left.color}
      rightColor={electionData.right.color}
    />
  );
}