import mongoose from "mongoose";

export const connectDB = () => {
    mongoose.connect(
    process.env.MONGO_DB_URI,{
        dbName: "justicejunction",
    }
)
.then(() => console.log("Database connected"))
.catch((e) => console.log(e));
}