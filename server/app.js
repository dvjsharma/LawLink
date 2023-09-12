import express from "express";
import { connectDB } from "./data/database.js";
import { config } from "dotenv";

export const app = express();

config({
    path: "./data/config.env",
});

connectDB();

app.use(express.json());

