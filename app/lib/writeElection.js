import fs from "fs";
import path from "path";

export function writeElection(data) {
  const filePath = path.join(
    process.cwd(),
    "data",
    "election.json"
  );

  fs.writeFileSync(
    filePath,
    JSON.stringify(data, null, 2),
    "utf8"
  );

  return data;
}