import { Router } from "express";
import * as controller from "./status.controller.js"
import {upload} from "../../common/middleware/multer.js"

const statusRouter = Router()

statusRouter.post("/store", upload.single("status"), controller.createStatus);

export default statusRouter

