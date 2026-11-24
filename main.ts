// The Funniest AI Excuse — u-mytlyy0745-the-funniest-ai-excuse-b5355ad0
// Self-contained copy program: Node 22 stdlib only, no network, no
// child_process, no headless Chrome. Writes the one-line excuse to
// $MAKEFUN_OUTPUT_DIR/entry.txt (fallback /output).
import { mkdirSync, writeFileSync, readFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I outsourced the hard part to a specialist subagent. It renamed itself Project Manager and now only schedules meetings about the task.";

// Gate check (mirrors the sealed scorer): 1-200 characters, not only
// whitespace. Fail loudly rather than writing an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry violates gate: ${ENTRY.length} characters`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");

// Read back what was written: the grader runs the program twice and
// gates the output, so a silent short write must fail loudly here.
const written = readFileSync(join(outDir, "entry.txt"), "utf8");
if (written !== ENTRY) {
  throw new Error("entry.txt verification failed: written bytes differ");
}
