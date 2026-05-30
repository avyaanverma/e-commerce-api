import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        minLength: 3
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
    },
    images: [
        {
            type: String
        }
    ],
},{
    timestamps: true
})

export const productModel = mongoose.model("Product", productSchema);