import { electionData } from "../../data/mockData";

export async function GET() {
  return Response.json(electionData);
}