import express from "express";
import statusRouter from "./module/status/status.route.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Server is running",
    });
});

app.use("/status", statusRouter);


export default app;