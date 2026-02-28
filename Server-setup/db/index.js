import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

const dbUri = process.env.MONGODB_URI
mongoose.connect(dbUri);

export default mongoose;