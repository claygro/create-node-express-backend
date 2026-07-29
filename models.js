import fs from "node:fs";
function createModels(projectName) {
  //create auth.models.js in models
  fs.writeFileSync(
    `${projectName}/src/models/auth.models.js`,
    `
import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "username is required"],
    unique: [true, "username should be unique"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: [true, "email should be unique"],
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
