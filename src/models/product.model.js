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
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }
},{
    timestamps: true
})

export const productModel = mongoose.model("Product", productSchema);