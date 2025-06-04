import prisma from "../prisma/client";

export const getInventoryStats = async () => {
  const productCount = await prisma.product.count();
  const categoryCount = await prisma.category.count();
  const totalValueResult = await prisma.product.aggregate({
    _sum: { price: true },
  });
  return {
    totalProducts: productCount,
    totalCategories: categoryCount,
    totalInventoryValue: totalValueResult._sum.price ?? 0,
  };
};
