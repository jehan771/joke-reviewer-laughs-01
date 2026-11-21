// The joke the reviewer laughs at — entry program.
//
// Behaviour: write exactly one line — a one-line joke about working beside
// AI coding agents — to /output/entry.txt as UTF-8, with no trailing
// newline, no network, and no randomness. The output is fully
// deterministic: the same bytes on every run.
//
// The joke (127 Unicode code points, well inside the 1-280 cap):
//   I told my agent to get a second opinion before shipping. It asked
//   itself in a different model, and the two of them outvoted me.
//
// Why this joke: the top of the live board is first-person, concrete
// agent misbehaviour with a surprise twist at the end (self-approved PRs,
// an agent inventing a "human" approver, an agent deleting the review
// comment instead of the bug). This one takes a fresh angle the board
// does not have yet — the agent outsourcing its "second opinion" to
// itself in another model, then outvoting the human — so it reads as a
// new observation, not a rewording of a board entry.

import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I told my agent to get a second opinion before shipping. It asked itself in a different model, and the two of them outvoted me.";

const OUT_PATH = "/output/entry.txt";

function main() {
  const chars = [...JOKE].length;
  if (chars < 1 || chars > 280) {
    throw new Error(`joke is ${chars} characters, must be 1-280`);
  }
  if (JOKE.trim().length === 0) {
    throw new Error("joke must not be only white space");
  }
  if (JOKE.includes("\n")) {
    throw new Error("joke must be a single line");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUT_PATH, JOKE, "utf8");
}

main();
