import fs from "node:fs";
function createModels(projectName) {
  //create auth.models.js in models
  fs.writeFileSync(
    `${projectName}/src/models/auth.models.js`,
    `
import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "username is required"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
  },
  password: {
    type: String,
    required: [true, "password is required"],

  },
});
const authModel = mongoose.model("user", userSchema);
export default authModel;
    `,
  );
}
export default createModels;
