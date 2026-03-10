import express from "express";
import router from "./routes/index.controller.js";
import mongoose from "./db/index.js";
import logger from "./logger/winston.logger.js";
import dotenv from "dotenv";
import morgan from "morgan";
import morganMiddleware from "./logger/morgan.logger.js";
dotenv.config()

const app = express();
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

// Morgan middleware for logging HTTP requests, integrated with Winston logger
app.use(morganMiddleware);
app.use(
    morgan("combined", {
        stream: {
            write: (message) => logger.info(message.trim()),
        },
    })
);

app.use("/api", router)
// router.get("/users", )

mongoose.connection.on("open", () => {
    logger.info(`🍀 Mongodb connected successfully.`);
})
mongoose.connection.on("error", (error) => {
    logger.error(`❌ Mongodb connection error.`, error);
})

const PORT = 3000;

app.listen(PORT, () => {
    logger.info(`⚙️  Server running on port ${PORT}.`);
})