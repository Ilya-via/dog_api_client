import express from "express";
import dotenv from "dotenv";

import { DogApi } from "./api/index.js";
import { DogService } from "./services/index.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 1337;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/dogs", async (req, res) => {
  try {
    let dogs = await DogApi.getAllDogsAsync();
    let modifiedDogs = DogService.parseDogsItems(dogs);

    res.status(200).json(modifiedDogs);
  } catch (e) {
    res.status(404).json({ message: e.messsage });
  }
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
