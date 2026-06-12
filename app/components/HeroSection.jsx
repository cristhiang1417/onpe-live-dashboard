import CandidateCard from "./CandidateCard";
import VsCenter from "./VsCenter";
import { useElection } from "../context/ElectionContext";

export default function HeroSection() {
  const electionData = useElection();

  const winner =
    electionData.left.votes > electionData.right.votes
      ? electionData.left.name
      : electionData.right.name;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
      <CandidateCard candidate={electionData.left} side="left" />

      <VsCenter
        progress={electionData.progress}
        difference={electionData.difference}
        winner={winner}
      />

      <CandidateCard candidate={electionData.right} side="right" />
    </div>
  );
}