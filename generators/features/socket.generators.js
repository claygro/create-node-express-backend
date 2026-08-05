import fs from "node:fs";
import { execSync } from "node:child_process";
function createSocket(projectName) {
  console.log("creating socket");
  execSync("npm install socket.io", {
    cwd: projectName,
    stdio: "inherit",
  });
  fs.mkdirSync(`${projectName}/src/socket`, {
    recursive: true,
  });
  fs.writeFileSync(
    `${projectName}/src/socket/socket.js`,
    `
import { Server } from "socket.io";

let io;

export default function initializeSocket(server) {
  io = new Server(server, {
    cors: {
      origin: "*",
      credentials: true,
    },
  });

  io.on("connection", (socket) => {
    console.log("Client Connected :", socket.id);

    socket.on("disconnect", () => {
      console.log("Client Disconnected :", socket.id);
    });
  });
}

export { io };

    `,
  );
  updateIndex(projectName);

  function updateIndex(projectName) {
    const indexPath = `${projectName}/index.js`;
    let content = fs.readFileSync(indexPath, "utf-8");
    content = content.replace(
      'import express from "express";',

      `import express from "express";
       import { createServer } from "http";
       import initializeSocket from "./src/socket/socket.js";`,
    );
    content = content.replace(
      "app.listen(process.env.PORT, async()=>{",

      `const server = createServer(app);

      initializeSocket(server);

      server.listen(process.env.PORT, async()=>{`,
    );
    fs.writeFileSync(indexPath, content);
  }
}
export default createSocket;
