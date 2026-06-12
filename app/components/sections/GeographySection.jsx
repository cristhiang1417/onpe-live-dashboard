import PendingRegions from "../PendingRegions";
import PeruMap from "../PeruMap";
import { useElection } from "../../context/ElectionContext";

export default function GeographySection() {
  const electionData = useElection();

  return (
    <>
      <PendingRegions regions={electionData.regions} />

      <PeruMap />
    </>
  );
}