import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({

    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient"
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor"
    },
    reason: {
        type: String,

    }

}, { timestamps: true });

export const Appointment = mongoose.model("Appointment", appointmentSchema);