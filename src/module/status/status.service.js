import { Status } from "./status.model.js";
import { uploadOnCloudinary } from "../../common/utils/upload.js";
import ApiError from "../../common/utils/api-error.js";

const createStatus = async ({ text }, file) => {
    try {

        let type, content;

        if (!file && text) {
            type = "text";
            content = text;
        }

        else if (file) {
            const mime = file.mimetype;

            if (!mime.startsWith("image/") && !mime.startsWith("video/")) {
                throw ApiError.badRequest("Invalid file type")
            }

            const uploadRes = await uploadOnCloudinary(file.path);

            if (!uploadRes) {
                throw ApiError.serverError("Upload failed")
            }

            type = mime.startsWith("image/") ? "image" : "video";
            content = uploadRes.secure_url;
        }

        else {
            throw ApiError.badRequest("No content provided")
        }

        const status = await Status.create({
            user: req.user._id,
            type,
            content,
        });

        return res.status(201).json({
            success: true,
            data: status,
        });

    } catch (err) {
        console.error(err);
        throw ApiError.serverError()
    }
};

export {
    createStatus
}