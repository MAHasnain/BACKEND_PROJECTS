import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        enum: ["M", "F", "O"],
        required: true
    },
    bloodType: {
        type: String,
        enum: ["O", "A", "B", "AB", "O-", "A-", "B-", "AB-"],
        required: true
    },

}, { timestamps: true });

export const Patient = mongoose.model("Patient", patientSchema);
