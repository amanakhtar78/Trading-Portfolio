import { Request, Response } from "express";
import { getStockData } from "../services/yahooService";

export const getPortfolio = async (req: Request, res: Response) => {
  try {
    const { symbols } = req.body; // e.g., ["AAPL", "MSFT"]
    if (!symbols || !Array.isArray(symbols)) {
      return res.status(400).json({ error: "Symbols array is required" });
    }

    const data = await Promise.all(symbols.map(getStockData));
    res.json({ portfolio: data });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
