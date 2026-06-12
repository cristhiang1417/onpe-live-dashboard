import PendingRegions from "../PendingRegions";
import PeruMap from "../PeruMap";

export default function GeographySection({
  regions,
}) {
  return (
    <>
      <PendingRegions
        regions={regions}
      />

      <PeruMap />
    </>
  );
}