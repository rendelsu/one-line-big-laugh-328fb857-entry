import fs from "node:fs";

const line = "As your agent I watched 300 hours of your doorbell footage, and now I miss your mailman.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
const outPath = outDir + "/entry.txt";
fs.writeFileSync(outPath, line + "\n", "utf8");
fs.chmodSync(outPath, 0o644);
