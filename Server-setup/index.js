import express from "express";
import router from "./routes/index.controller.js";
import mongoose from "./db/index.js";
import dotenv from "dotenv";
dotenv.config()

const app = express();

mongoose.connection.on("open", () => {
    console.log(`🍀 Mongodb connected successfully.\n`);
})
mongoose.connection.on("error", (error) => {
    console.log(`❌ Mongodb connection error.`, error);
})

app.use(express.json({ limit: "16kb" }));

app.use("/api", router)

// router.get("/users", )

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`\n⚙️  Server running on port ${PORT}.`);
})