import express from "express";
import path from "path";

import { fileURLToPath } from "url";

import modelData from "../data/models.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get("/:modelId", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "../public/model.html"));
});

router.get("/", (req, res) => {
  res.status(200).json(modelData);
});

export default router;
