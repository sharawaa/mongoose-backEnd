import userModel from "../model/user-model.js";
import bcrypt from "bcrypt";
export async function addUser(user) {
  const hashedPassword = await bcrypt.hash(user.password, 10);
  const result = await userModel.create({
    userName: user.userName,
    sureName: user.sureName,
    role: user.role,
    email: user.email,
    password: hashedPassword,
  });
  return result;
}
