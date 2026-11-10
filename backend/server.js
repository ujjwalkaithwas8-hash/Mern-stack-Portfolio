import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";

const app = express();
app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:5173" }));
app.use(express.json({ limit: "20kb" }));

app.get("/api/health", (_req, res) => res.json({ status: "ok" }));
app.use("/api/contact", contactRoutes);

app.use((_req, res) => res.status(404).json({ success: false, message: "Not found" }));
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ success: false, message: "Server error" });
});

const PORT = process.env.PORT || 5000;
connectDB().finally(() => app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`)));
