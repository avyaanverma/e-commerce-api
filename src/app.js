import { config } from "dotenv";
import express from "express";
import authRoutes from "./routes/auth.routes.js";
import productRoutes from "./routes/product.routes.js";
import cookieParser from "cookie-parser";
import { userModel } from "./models/user.schema.js";

config();
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/product", productRoutes);

app.get("/user", async (req, res)=>{
    const users = await userModel.find();
    return res.status(200).json({
        users: users
    })
})

export default app;
