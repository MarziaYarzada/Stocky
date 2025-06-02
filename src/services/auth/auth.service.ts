import prisma from "../../prisma/client";
import {
  hashPassword,
  comparePassword,
  generateToken,
} from "../../utils/auth.util";

export const registerUser = async (username: string, password: string) => {
  const existing = await prisma.user.findUnique({ where: { username } });
  if (existing) throw new Error("Username is already taken");
  const hashed = await hashPassword(password);
  const user = await prisma.user.create({
    data: { username, password: hashed, role: "STAFF" },
  });
  const token = generateToken(user.id, user.role);
  return { user, token };
};
export const loginUser = async (username: string, password: string) => {
  const user = await prisma.user.findUnique({ where: { username } });
  if (!user || !(await comparePassword(password, user.password)))
    throw new Error("Invalid credentials");
  const token = generateToken(user.id, user.role);
  return { user, token };
};
