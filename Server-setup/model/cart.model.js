import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
    {
        cartItem: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product"
        },
        itemQuantity: {
            type: Number,
            required: true,
            default: 1
        },
        totalPrice: {
            type: Number,
            default: 0
        }
    }, { timestamps: true }
);

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;