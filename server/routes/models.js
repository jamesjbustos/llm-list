import express from "express";
import path from "path";

import { fileURLToPath } from "url";

import ModelsController from "../controllers/models.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get("/", ModelsController.getModels);

router.get("/:modelId", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "../public/model.html"));
});

export default router;
