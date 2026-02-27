import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    specialty: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },

}, { timestamps: true });

export const Doctor = mongoose.model("Doctor", doctorSchema);