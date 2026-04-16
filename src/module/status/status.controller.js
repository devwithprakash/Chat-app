import ApiResponse from "../../common/utils/api-response.js"
import * as service from "./status.service.js"

const createStatus = async(req, res)=>{
    const result = await service.createStatus(req.body, req.file)

    ApiResponse.ok(res, "status created", result)
}

export{
    createStatus
}