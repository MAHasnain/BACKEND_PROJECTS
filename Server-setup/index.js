import express from "express";
import router from "./routes/index.controller.js";

const app = express();

app.use(express.json({limit: "16kb"}));

app.use("/api", router)

// router.get("/users", )

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`\n Server running on port ${PORT}`);
})