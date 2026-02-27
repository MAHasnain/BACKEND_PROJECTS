import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema({
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: true
    },
    dateOfVisit: {
        type: Date,
        required: true,
    },
    diagnosis: {
        type: String,
        
    },
    treatment: {
        type: String,

    },
    notes: {
        type: String,

    }

}, { timestamps: true });

export const MedicalRecord = mongoose.model("MedicalRecord", medicalRecordSchema);