#!/usr/bin/env node

import fs from "node:fs";
//fs means file system. It is a built-in nodejs module which let us to work with files and folder
import { exec, execSync } from "node:child_process";
//child_process is a node.js module that allows your js program to run other programs or teminal commands from inside your code.
//execSync means execute synchronously.
// It runs a terminal command and waits until it finishes before moving to the next line.

const projectName = process.argv[2];

if (!projectName) {
  throw new Error(
    "Please provide project name. For example backend, server etc.",
  );
}

//create main project folder
fs.mkdirSync(`${projectName}`);
//create folders inside src
fs.mkdirSync(`${projectName}/src`);

//create src subFolders
const folders = ["controllers", "models", "routes", "middlewares"];
folders.forEach((folder) => {
  fs.mkdirSync(`${projectName}/src/${folder}`);
  console.log("folder is created");
});

//create index.js
fs.writeFileSync(
  `${projectName}/index.js`,
  `
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.get("/", (req,res)=>{
    res.send("Backend Running");
});
app.listen(process.env.PORT,()=>{
    console.log("Server running");
});
    `,
);

//.env
fs.writeFileSync(
  `${projectName}/.env`,
  `
PORT=8000
      
    `,
);
//.gitignore
fs.writeFileSync(
  `${projectName}/.gitignore`,
  `
node_modules 
.env`,
);
// initialize npm
execSync("npm init -y", {
  cwd: projectName,
  stdio: "inherit",
});
//npm install
execSync("npm install express nodemon dotenv cookie-parser cors", {
  cwd: projectName, //cwd(current working directory)
  stdio: "inherit", //stdio means standard input output
});
console.log("project setup completed");
