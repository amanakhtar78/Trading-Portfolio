import express from "express";
import cors from "cors";
import portfolioRoutes from "./routes/portfolioRoutes";

const app = express();
app.use(express.json());

// ✅ Allow requests from frontend
app.use(cors({ origin: "http://localhost:3000" }));

// Routes
app.use("/api", portfolioRoutes);

export default app;
