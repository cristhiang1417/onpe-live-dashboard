import RegionPanel from "../RegionPanel";
import TrendChart from "../TrendChart";

export default function AnalyticsSection({
  regions,
  leftColor,
  rightColor,
  history,
}) {
  return (
    <>
      <RegionPanel
        regions={regions}
        leftColor={leftColor}
        rightColor={rightColor}
      />

      <TrendChart
        history={history}
      />
    </>
  );
}