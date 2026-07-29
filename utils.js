import fs from "node:fs";
function createUtils() {
  fs.writeFileSync(
    `${projectName}/src/utils/generateToken.js`,
    `
import jwt from "jsonwebtoken";

export const generateAccessToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      username: user.username,
    },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: "7d",
    },
  );
};


        `,
  );
}
