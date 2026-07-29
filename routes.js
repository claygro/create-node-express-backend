import fs from "node:fs";
function createRoutes(projectName) {
  fs.writeFileSync(
    `${projectName}/src/routes/auth.routes.js`,
    `
import AuthControllers from "../controllers/auth.controllers.js";
import { Router } from "express";
const authRoutes = Router();
const authControllers = new AuthControllers();
authRoutes.post("/signup", authControllers.signup);
authRoutes.post("/login", authControllers.login);
export default authRoutes


        `,
  );
}
export default createRoutes;
