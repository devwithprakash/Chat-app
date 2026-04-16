import app from "./src/app.js";
import "dotenv/config"
import connectDB from "./src/common/config/db.js";

const PORT = process.env.PORT || 5000;

const start = async () => {
    connectDB()
    app.listen(PORT, () => {
        console.log(`Server is running at ${PORT}`);
    });
};

start().catch((err) => {
    console.log("Failed to start server", err);
    process.exit(1);
});
