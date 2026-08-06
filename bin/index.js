#!/usr/bin/env node
import fs from "node:fs";
import createBackend from "../generators/project/backend.generators.js";
import createSocket from "../generators/features/socket.generators.js";
const projectName = process.argv[2];
const flags = process.argv.slice(3);
if (!projectName) {
  console.log("Please provide project name");
  process.exit(1);
}
const projectExist = fs.existsSync(projectName);
if (!projectExist) {
  createBackend(projectName);
  process.exit(0);
}
if (flags.includes("--socket")) {
  createSocket(projectName);
  process.exit(0);
}
console.log("Project already exists");
