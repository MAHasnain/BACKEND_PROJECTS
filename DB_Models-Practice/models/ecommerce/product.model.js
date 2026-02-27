import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

    name: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    },
    productImage: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    stock: {
        type: Number,
        default: 0
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

}, { timestamps: true });

export const Product = mongoose.model("Product", productSchema);