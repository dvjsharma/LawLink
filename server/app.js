import express from "express";
import { connectDB } from "./data/database.js";
import { config } from "dotenv";
import userrouter from "./routes/user.js";
import cors from 'cors';
import cookieParser from "cookie-parser";

export const app = express();


config({
    path: "./data/config.env",
});

connectDB();

app.use(cors({origin: 'http://localhost:5173',
methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
credentials: true,
}));
app.use(express.json());
app.use(cookieParser());
app.use("/users", userrouter);

