import express from "express";
import { getPortfolio } from "../controllers/portfolioController";

const router = express.Router();

router.post("/portfolio", getPortfolio);

export default router;
