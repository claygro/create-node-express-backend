#!/usr/bin/env node
import fs from "node:fs";
//fs means file system. It is a built-in nodejs module which let us to work with files and folder
import { exec, execSync } from "node:child_process";
//child_process is a node.js module that allows your js program to run other programs or teminal commands from inside your code.
//execSync means execute synchronously.
// It runs a terminal command and waits until it finishes before moving to the next line.
import createModels from "../files/models.js";
import createControllers from "../files/controllers.js";
import createRoutes from "../files/routes.js";
import createUtils from "../files/utils.js";
function createBackend(projectName) {
  fs.mkdirSync(`${projectName}`);
  //create folders inside src
  fs.mkdirSync(`${projectName}/src`);

  //create src subFolders
  const folders = ["controllers", "models", "routes", "middlewares", "utils"];
  folders.forEach((folder) => {
    fs.mkdirSync(`${projectName}/src/${folder}`);
    console.log("folder is created");
  });

  //create index.js
  fs.writeFileSync(
    `${projectName}/index.js`,
    `
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";
import authRoutes from "./src/routes/auth.routes.js"
import cookieParser from "cookie-parser";
const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/auth", authRoutes)
app.get("/", (req,res)=>{
    res.send("Backend Running");
});
app.listen(process.env.PORT, async()=>{
  try{
     await mongoose.connect(process.env.MONGO_DB_CONNECTION_URL)
     console.log("Server is started");
  }catch(error){
     console.log("Error in starting the server: ", error);
  }
});
    `,
  );
  //create models
  createModels(projectName);
  //create controllers
  createControllers(projectName);
  // create routes
  createRoutes(projectName);
  // create utils
  createUtils(projectName);

  //.env
  fs.writeFileSync(
    `${projectName}/.env`,
    `
PORT=8000
JWT_SECRET_KEY= YOUR JWT_SECRET_KEY
MONGO_DB_CONNECTION_URL= YOUR MONGO_DB_CONNECTION_URL
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
  execSync(
    "npm install express mongoose dotenv cookie-parser cors jsonwebtoken argon2",
    {
      cwd: projectName, //cwd(current working directory)
      stdio: "inherit", //stdio means standard input output
    },
  );
  execSync("npm install nodemon -D", {
    cwd: projectName, //cwd(current working directory)
    stdio: "inherit", //stdio means standard input output
  });
  // update package.json
  const packageJsonPath = `${projectName}/package.json`;

  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));

  packageJson.type = "module";

  packageJson.scripts = {
    start: "nodemon index.js",
  };

  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
  console.log("project setup completed");
}
export default createBackend;
