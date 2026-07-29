import fs from "node:fs";
function createModels(projectName) {
  //create auth.models.js in models
  fs.writeFileSync(`${projectName}/src/models/auth.models.js`, "hello world");
}
export default createModels;
