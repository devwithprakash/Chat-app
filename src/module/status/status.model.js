import mongoose, { Schema } from "mongoose";

const statusSchema = new Schema({
    caption: {
        type: String
    },

    content_url: {
        type: String
    },
    content_type: {
        type: String,
        enum: ["text", "image", "video"]
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true })

export const Status = mongoose.model("Status", statusSchema)