import express from "express";
import { connectDB } from "./data/database.js";
import { config } from "dotenv";
import userrouter from "./routes/user.js";

export const app = express();


config({
    path: "./data/config.env",
});

connectDB();

app.use(express.json());
app.use("/users", userrouter);

