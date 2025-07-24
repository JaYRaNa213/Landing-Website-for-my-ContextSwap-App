const fs = require("fs");
const path = require("path");

const IGNORE = [".git", "node_modules", "dist", ".next", ".turbo"];

function walk(dir, prefix = "", treeLines = []) {
  const entries = fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((e) => !IGNORE.includes(e.name))
    .sort((a, b) => a.name.localeCompare(b.name));

  entries.forEach((entry, index) => {
    const isLast = index === entries.length - 1;
    const linePrefix = isLast ? "└── " : "├── ";
    treeLines.push(`${prefix}${linePrefix}${entry.name}`);

    if (entry.isDirectory()) {
      const nextPrefix = prefix + (isLast ? "    " : "│   ");
      walk(path.join(dir, entry.name), nextPrefix, treeLines);
    }
  });

  return treeLines;
}

const rootDir = __dirname;

const treeOutput = walk(rootDir).join("\n");

fs.writeFileSync("tree.txt", treeOutput);

console.log("✅ tree.txt generated successfully.");
