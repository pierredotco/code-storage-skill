#!/usr/bin/env node

import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { homedir } from "node:os";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const packageRoot = resolve(__dirname, "..");
const sourceFile = join(packageRoot, "skill", "SKILL.md");
const targets = [
  join(homedir(), ".claude", "skills", "code-storage", "SKILL.md"),
  join(homedir(), ".codex", "skills", "code-storage", "SKILL.md"),
  join(homedir(), ".agents", "skills", "code-storage", "SKILL.md")
];

if (!existsSync(sourceFile)) {
  console.error(`Error: missing skill file at ${sourceFile}`);
  process.exit(1);
}

for (const targetFile of targets) {
  mkdirSync(dirname(targetFile), { recursive: true });
  copyFileSync(sourceFile, targetFile);
  console.log(`Installed Code Storage skill to ${targetFile}`);
}

console.log("Code Storage skill installed for Claude Code, Codex CLI, and compatible agents.");
