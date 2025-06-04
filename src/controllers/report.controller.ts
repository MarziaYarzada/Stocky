import { Request, Response } from "express";
import { getInventoryStats } from "../services/report.service";

export const getReport = async (req: Request, res: Response) => {
  const stats = await getInventoryStats();
  res.json(stats);
};
