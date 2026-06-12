import fs from "fs";
import path from "path";

export function readElection() {
  const filePath = path.join(
    process.cwd(),
    "data",
    "election.json"
  );

  const data = fs.readFileSync(filePath, "utf8");

  return JSON.parse(data);
}