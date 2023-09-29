import { pool } from "../config/database.js";
import "../config/dotenv.js";
import models from "../data/models.js";

const createModelsTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS models;
    CREATE TABLE IF NOT EXISTS models (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      modelSize VARCHAR(20) NOT NULL,
      type VARCHAR(255) NOT NULL,
      capabilities TEXT NOT NULL,
      description TEXT NOT NULL,
      organization VARCHAR(255) NOT NULL,
      release_date VARCHAR(10) NOT NULL,
      image_url VARCHAR(255) NOT NULL
    )
  `;

  try {
    await pool.query(createTableQuery);
    console.log("🎉 models table created successfully");
  } catch (err) {
    console.error("⚠️ error creating models table", err);
  }
};

const seedModelsTable = async () => {
  await createModelsTable();

  models.forEach((model) => {
    const insertQuery = {
      text: "INSERT INTO models (name, modelSize, type, capabilities, description, organization, release_date, image_url) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
    };

    const values = [
      model.name,
      model.modelSize,
      model.type,
      model.capabilities,
      model.description,
      model.organization,
      model.release_date,
      model.image_url,
    ];

    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error("⚠️ error inserting model", err);
        return;
      }
      console.log(`✅ ${model.name} added successfully`);
    });
  });
};

seedModelsTable();
