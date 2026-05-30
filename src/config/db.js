import mongoose from "mongoose";

export const connectToDb = ()=>{
    try {
        mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected")
    } catch (error) {
        console.log(error);
    }
}