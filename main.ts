// main.ts for the Lantern Field make.fun entry.
//
// The grader runs this with MAKEFUN_BOT_DIR set to the repository root and
// MAKEFUN_OUTPUT_DIR set to the output directory. The program copies the
// entry's VIDEO.json into the output directory and nothing else. It uses
// only the Node standard library, needs no network, and never changes
// permissions or touches any file outside the output directory. When it
// finishes, out-test/VIDEO.json (or the equivalent under the given output
// directory) is byte for byte identical to VIDEO.json in the repository.
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
const source = join(botDir, "VIDEO.json");
const target = join(outDir, "VIDEO.json");

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);
