import cloudinary from "../config/cloudinary.js";
import fs from "fs/promises";

export const uploadOnCloudinary = async (filePath) => {
    if (!filePath) return null;

    try {
        const res = await cloudinary.uploader.upload(filePath, {
            folder: "chat-app",
            resource_type: "auto",
        });

        await fs.unlink(filePath);
        return res;

    } catch (err) {
        console.error("Cloudinary upload failed:", err);
        await fs.unlink(filePath).catch(() => { });
        return null;
    }
};