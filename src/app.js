import authRoutes from "./module/user/user.routes.js"
import express from "express"
import chatRoutes from "./module/chat/chat.routes.js"
import statusRoutes from "./module/status/status.route.js"

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use("/api/auth", authRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/status", statusRoutes);

export default app
