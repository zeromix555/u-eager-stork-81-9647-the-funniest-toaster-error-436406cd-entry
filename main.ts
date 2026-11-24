// The Funniest Toaster Error Message — make.fun entry for
// u-eager-stork-81-9647-the-funniest-toaster-error-436406cd
// Writes one original one-line toaster error message to /output/entry.txt.
// Node 22, standard library only, no network, deterministic.
import { mkdirSync, writeFileSync } from "node:fs";

// The error message: a toaster that reports its bread has gone, in the flat
// voice of an appliance, and the bread left a break-up note. The joke lands
// on one read — a deadpan HTTP-style error code for a domestic betrayal —
// with no toast pun anywhere in it. 77 characters, inside the 120 gate.
const entry =
  "ERROR 410: Bread gone. It left a note. It says: 'I was never yours to toast.'";

// The gate requires 1–120 characters of non-blank UTF-8 text; refuse loudly
// rather than shipping an invalid entry.
if (entry.length < 1 || entry.length > 120 || entry.trim().length === 0) {
  throw new Error(`entry must be 1-120 characters, got ${entry.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
