import mongoose from "mongoose";

const labTest = new mongoose.Schema({
    
    medicalRecord: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "MedicalRecord",
        required: true
    },
    TestName: {
        type: String,
        required: true,
    },
    TestDate: {
        type: Date,
        required: true,
    },
    Results: {
        type: String,
    },

}, {timestamps: true});