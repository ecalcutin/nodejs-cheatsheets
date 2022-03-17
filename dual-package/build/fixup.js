import { writeFileSync } from "node:fs";
import { resolve } from "node:path";

const path = resolve(process.cwd(), "lib", "cjs", "package.json");
writeFileSync(path, `{"type": "commonjs"}`, { encoding: "utf-8" });
