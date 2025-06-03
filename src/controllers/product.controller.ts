import { Request, Response } from 'express';
import * as service from '../services/product.service';



export const addProduct = async (req: Request, res: Response) => {
  try {
    const { name, quantity = 0, price, categoryId, sku } = req.body;

    if (!name || price === undefined || !categoryId) {
      return res.status(400).json({ message: "Missing required fields: name, price, or categoryId" });
    }

    const product = await service.createProduct(name, quantity, price, categoryId, sku);
    return res.status(201).json(product);
  } catch (error) {
    console.error("Error adding product:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getProducts = async (req: Request, res: Response) => {
  const products = await service.getAllProduct();
  res.json(products);
};

export const updateProductById = async (req: Request, res: Response) => {
  const updated = await service.updateProduct(req.params.id, req.body);
  res.json(updated);
};

export const deleteProductById = async (req: Request, res: Response) => {
  await service.deleteProduct(req.params.id);
  res.status(204).send();
};
