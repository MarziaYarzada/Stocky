import prisma from "../prisma/client";
import { generateSKU } from '../utils/sku';

interface ProductFilters{
  name?:string;
  minPrice?:number;
  maxPrice?:number
  categoryId?:string
}
export const createProduct = async (
  name: string,
  quantity: number,
  price: number,
  categoryId: string,
  sku: string
) => {
  let finalSku = sku;

  if (!sku) {
    const category = await prisma.category.findUnique({
      where: { id: categoryId },
    });

    if (!category) {
      throw new Error("Category not found");
    }

    let attempts = 0;
    while (attempts < 5) {
      const generated = generateSKU(name, category.name);
      const exists = await prisma.product.findUnique({
        where: { sku: generated },
      });

      if (!exists) {
        finalSku = generated;
        break;
      }

      attempts++;
    }

    if (!finalSku) {
      throw new Error("Failed to generate unique SKU");
    }
  }

  return prisma.product.create({
    data: {
      name,
      quantity,
      price,
      categoryId,
      sku: finalSku,
    },
  });
};

export const getAllProducts = (fiters:ProductFilters={}) => {
  const {name,minPrice,maxPrice,categoryId}=fiters;

  return prisma.product.findMany({
    where:{
      name: name ? {contains:name,mode:'insensitive'} : undefined,
      price: {
        gte:minPrice,
        lte:maxPrice
      },
      categoryId:categoryId || undefined
    },
    include:{category:true}
  });
};
export const updateProduct = (
  id: string,
  data: Partial<{
    name: string;
    quantity: number;
    price: number;
    categoryId: string;
  }>
) => {
  return prisma.product.update({ where: { id }, data });
};
export const deleteProduct = (id: string) => {
  return prisma.product.delete({ where: { id } });
};
