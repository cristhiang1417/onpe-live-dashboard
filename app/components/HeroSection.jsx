import CandidateCard from "./CandidateCard";
import VsCenter from "./VsCenter";

export default function HeroSection({ electionData }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
      <CandidateCard
        candidate={electionData.left}
        side="left"
      />

      <VsCenter
        progress={electionData.progress}
        difference={electionData.difference}
        winner={electionData.right.name}
      />

      <CandidateCard
        candidate={electionData.right}
        side="right"
      />
    </div>
  );
}