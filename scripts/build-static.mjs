import { cp, mkdir, rm } from "node:fs/promises";
import { dirname, relative } from "node:path";
import { fileURLToPath } from "node:url";

const repositoryRoot = fileURLToPath(new URL("../", import.meta.url));
const sourceDirectory = fileURLToPath(new URL("../site/", import.meta.url));
const outputDirectory = fileURLToPath(new URL("../dist/", import.meta.url));
const excludedFiles = new Set(["package.json", "serve.js"]);

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(dirname(outputDirectory), { recursive: true });
await cp(sourceDirectory, outputDirectory, {
  recursive: true,
  filter(sourcePath) {
    return !excludedFiles.has(relative(sourceDirectory, sourcePath));
  },
});

console.log(`Static Framer mirror built at ${relative(repositoryRoot, outputDirectory)}/`);
