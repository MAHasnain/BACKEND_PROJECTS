import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    image: {
        type: String,
        required: true
    },
    // category: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Category"
    // },
    stock: {
        type: Number,
        default: 0
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

}, { timestamps: true });

const Product = mongoose.model("Product", productSchema);

export default Product