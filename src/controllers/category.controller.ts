import { Request, Response } from "express";
import { createCategory, getAllCategories } from "../services/category.service";

export const addCategory = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const category = await createCategory(name);
    res.status(201).json(category);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
export const getCategories=async(req:Request,res:Response)=>{
    const categories=await getAllCategories();
    res.json(categories)
}