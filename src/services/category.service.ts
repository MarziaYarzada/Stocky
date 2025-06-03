import prisma from "../prisma/client";
export const createCategory = (name: string) => {
  return prisma.category.create({ data: { name } });
};
export const getAllCategories = () => {
  return prisma.category.findMany();
};
