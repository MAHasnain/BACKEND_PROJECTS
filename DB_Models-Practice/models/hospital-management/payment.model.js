import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
    bill: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Bill",
        require: true
    },
    paymentDate: {
        type: Date,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    method: {
        type: String,
        required: true
    },

}, { timestamps: true });

export const Payment = mongoose.model("Payment", paymentSchema);