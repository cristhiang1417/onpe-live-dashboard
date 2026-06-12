import { readElection } from "../../lib/readElection";
import { writeElection } from "../../lib/writeElection";

export async function GET() {
  return Response.json(readElection());
}

export async function POST(request) {
  const body = await request.json();

  const current = readElection();

  const leftVotes = Number(body.leftVotes);
  const rightVotes = Number(body.rightVotes);
  const totalVotes = leftVotes + rightVotes;

  const updated = {
    ...current,
    updatedAt: new Date().toLocaleTimeString("es-PE"),

    left: {
      ...current.left,
      votes: leftVotes,
      percent: Number(((leftVotes / totalVotes) * 100).toFixed(3)),
    },

    right: {
      ...current.right,
      votes: rightVotes,
      percent: Number(((rightVotes / totalVotes) * 100).toFixed(3)),
    },

    difference: Math.abs(rightVotes - leftVotes),
  };

  writeElection(updated);

  return Response.json(updated);
}